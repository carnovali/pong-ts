/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./app/model/colors.ts":
/*!*****************************!*\
  !*** ./app/model/colors.ts ***!
  \*****************************/
/***/ ((__unused_webpack_module, exports) => {

eval("\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nexports.COLORS = void 0;\r\nvar COLORS;\r\n(function (COLORS) {\r\n    COLORS[\"BLACK\"] = \"#000\";\r\n    COLORS[\"WHITE\"] = \"#fff\";\r\n    COLORS[\"GRAY\"] = \"gray\";\r\n})(COLORS = exports.COLORS || (exports.COLORS = {}));\r\n\n\n//# sourceURL=webpack:///./app/model/colors.ts?");

/***/ }),

/***/ "./app/pong/pong.ts":
/*!**************************!*\
  !*** ./app/pong/pong.ts ***!
  \**************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nexports.Pong = void 0;\r\nconst game_1 = __webpack_require__(/*! ./res/game */ \"./app/pong/res/game.ts\");\r\nconst inputs_1 = __webpack_require__(/*! ./res/inputs */ \"./app/pong/res/inputs.ts\");\r\nconst ui_1 = __webpack_require__(/*! ./res/ui */ \"./app/pong/res/ui.ts\");\r\nclass Pong {\r\n    constructor() {\r\n        this.game = new game_1.Game();\r\n        this.UI = new ui_1.UI();\r\n        this.inputs = new inputs_1.Inputs();\r\n        this.p1score = 0;\r\n        this.p2score = 0;\r\n        this.isPaused = false;\r\n        document.addEventListener(\"keydown\", (event) => this.inputs.manageKeyDown(event, this.game.leftPaddle, this.game.rightPaddle));\r\n        document.addEventListener(\"keyup\", (event) => this.inputs.manageKeyUp(event, this.game.leftPaddle, this.game.rightPaddle));\r\n        this.UI.startButton.addEventListener(\"click\", () => {\r\n            this.isPaused = !this.isPaused;\r\n            if (this.isPaused) {\r\n                this.UI.isPaused();\r\n            }\r\n            else {\r\n                this.UI.isPlaying();\r\n            }\r\n            this.loop();\r\n        });\r\n        this.initializeGame();\r\n    }\r\n    initializeGame() {\r\n        this.loop();\r\n        this.isPaused = true;\r\n    }\r\n    noticeScore(whoScored) {\r\n        if (whoScored === 1) {\r\n            this.p2score++;\r\n            this.UI.updateScore(2, this.p2score);\r\n        }\r\n        if (whoScored === 2) {\r\n            this.p1score++;\r\n            this.UI.updateScore(1, this.p1score);\r\n        }\r\n        this.game.whoScored = 0;\r\n    }\r\n    loop() {\r\n        this.noticeScore(this.game.whoScored);\r\n        if (!this.isPaused) {\r\n            this.game.clearCanvas();\r\n            this.game.update();\r\n            this.game.draw();\r\n            requestAnimationFrame(() => this.loop());\r\n        }\r\n    }\r\n}\r\nexports.Pong = Pong;\r\n\n\n//# sourceURL=webpack:///./app/pong/pong.ts?");

/***/ }),

/***/ "./app/pong/res/game.ts":
/*!******************************!*\
  !*** ./app/pong/res/game.ts ***!
  \******************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nexports.Game = void 0;\r\nconst colors_1 = __webpack_require__(/*! ../../model/colors */ \"./app/model/colors.ts\");\r\nconst objects_1 = __webpack_require__(/*! ../res/objects */ \"./app/pong/res/objects.ts\");\r\nclass Game {\r\n    constructor() {\r\n        this.canvas = document.getElementById(\"canvas\");\r\n        this.ctx = this.canvas.getContext(\"2d\");\r\n        this.ball = new objects_1.Ball(this.canvas);\r\n        this.leftPaddle = new objects_1.Paddle(this.canvas);\r\n        this.rightPaddle = new objects_1.Paddle(this.canvas, this.canvas.width - objects_1.Paddle.width);\r\n        this.whoScored = 0;\r\n    }\r\n    drawCanvas() {\r\n        this.ctx.fillStyle = colors_1.COLORS.BLACK;\r\n        this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);\r\n    }\r\n    drawMiddle() {\r\n        this.ctx.beginPath();\r\n        this.ctx.strokeStyle = colors_1.COLORS.GRAY;\r\n        this.ctx.lineWidth = 10;\r\n        this.ctx.moveTo(this.canvas.width / 2, 0);\r\n        this.ctx.lineTo(this.canvas.width / 2, this.canvas.height);\r\n        this.ctx.stroke();\r\n    }\r\n    drawBall() {\r\n        this.ctx.beginPath();\r\n        this.ctx.arc(this.ball.x, this.ball.y, this.ball.radius, 0, Math.PI * 2);\r\n        this.ctx.fillStyle = colors_1.COLORS.WHITE;\r\n        this.ctx.fill();\r\n        this.ctx.closePath();\r\n    }\r\n    drawPaddles() {\r\n        this.ctx.fillStyle = colors_1.COLORS.WHITE;\r\n        this.ctx.fillRect(this.leftPaddle.x, this.leftPaddle.y, objects_1.Paddle.width, objects_1.Paddle.height);\r\n        this.ctx.fillRect(this.rightPaddle.x, this.rightPaddle.y, objects_1.Paddle.width, objects_1.Paddle.height);\r\n    }\r\n    movePaddles() {\r\n        this.leftPaddle.y += this.leftPaddle.dy;\r\n        this.rightPaddle.y += this.rightPaddle.dy;\r\n        if (this.leftPaddle.y < 0) {\r\n            this.leftPaddle.y = 0;\r\n        }\r\n        else if (this.leftPaddle.y > this.canvas.height - objects_1.Paddle.height) {\r\n            this.leftPaddle.y = this.canvas.height - objects_1.Paddle.height;\r\n        }\r\n        if (this.rightPaddle.y < 0) {\r\n            this.rightPaddle.y = 0;\r\n        }\r\n        else if (this.rightPaddle.y > this.canvas.height - objects_1.Paddle.height) {\r\n            this.rightPaddle.y = this.canvas.height - objects_1.Paddle.height;\r\n        }\r\n    }\r\n    resetBall() {\r\n        this.ball.x = this.canvas.width / 2;\r\n        this.ball.y = this.canvas.height / 2;\r\n        this.ball.dx = -this.ball.dx;\r\n        this.ball.dy = -this.ball.dy;\r\n    }\r\n    detectCollision() {\r\n        if (this.ball.x - this.ball.radius < this.leftPaddle.x + objects_1.Paddle.width &&\r\n            this.ball.y + this.ball.radius > this.leftPaddle.y &&\r\n            this.ball.y - this.ball.radius < this.leftPaddle.y + objects_1.Paddle.height) {\r\n            this.ball.dx = -this.ball.dx;\r\n        }\r\n        if (this.ball.x + this.ball.radius > this.rightPaddle.x &&\r\n            this.ball.y + this.ball.radius > this.rightPaddle.y &&\r\n            this.ball.y - this.ball.radius < this.rightPaddle.y + objects_1.Paddle.height) {\r\n            this.ball.dx = -this.ball.dx;\r\n        }\r\n    }\r\n    update() {\r\n        this.ball.x += this.ball.dx;\r\n        this.ball.y += this.ball.dy;\r\n        if (this.ball.y - this.ball.radius < 0 ||\r\n            this.ball.y + this.ball.radius > this.canvas.height) {\r\n            this.ball.dy = -this.ball.dy;\r\n        }\r\n        if (this.ball.x - this.ball.radius < 0) {\r\n            this.whoScored = 1;\r\n            this.resetBall();\r\n        }\r\n        else if (this.ball.x + this.ball.radius > this.canvas.width) {\r\n            this.whoScored = 2;\r\n            this.resetBall();\r\n        }\r\n        this.movePaddles();\r\n        this.detectCollision();\r\n    }\r\n    draw() {\r\n        this.drawCanvas();\r\n        this.drawMiddle();\r\n        this.drawBall();\r\n        this.drawPaddles();\r\n    }\r\n    clearCanvas() {\r\n        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);\r\n    }\r\n}\r\nexports.Game = Game;\r\n\n\n//# sourceURL=webpack:///./app/pong/res/game.ts?");

/***/ }),

/***/ "./app/pong/res/inputs.ts":
/*!********************************!*\
  !*** ./app/pong/res/inputs.ts ***!
  \********************************/
/***/ ((__unused_webpack_module, exports) => {

eval("\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nexports.Inputs = void 0;\r\nclass Inputs {\r\n    constructor(p1UpKey = \"KeyW\", p1DownKey = \"KeyS\", p2UpKey = \"ArrowUp\", p2DownKey = \"ArrowDown\") {\r\n        this.p1UpKey = p1UpKey;\r\n        this.p1DownKey = p1DownKey;\r\n        this.p2UpKey = p2UpKey;\r\n        this.p2DownKey = p2DownKey;\r\n    }\r\n    manageKeyDown(event, leftPaddle, rightPaddle) {\r\n        if (event.code === this.p1UpKey) {\r\n            leftPaddle.dy = -5;\r\n        }\r\n        else if (event.code === this.p1DownKey) {\r\n            leftPaddle.dy = 5;\r\n        }\r\n        if (event.code === this.p2UpKey) {\r\n            rightPaddle.dy = -5;\r\n        }\r\n        else if (event.code === this.p2DownKey) {\r\n            rightPaddle.dy = 5;\r\n        }\r\n    }\r\n    manageKeyUp(event, leftPaddle, rightPaddle) {\r\n        if (event.code === this.p1UpKey || event.code === this.p1DownKey) {\r\n            leftPaddle.dy = 0;\r\n        }\r\n        if (event.code === this.p2UpKey || event.code === this.p2DownKey) {\r\n            rightPaddle.dy = 0;\r\n        }\r\n    }\r\n}\r\nexports.Inputs = Inputs;\r\n\n\n//# sourceURL=webpack:///./app/pong/res/inputs.ts?");

/***/ }),

/***/ "./app/pong/res/objects.ts":
/*!*********************************!*\
  !*** ./app/pong/res/objects.ts ***!
  \*********************************/
/***/ ((__unused_webpack_module, exports) => {

eval("\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nexports.Paddle = exports.Ball = void 0;\r\nclass Ball {\r\n    constructor(canvas) {\r\n        this.x = canvas.width / 2;\r\n        this.y = canvas.height / 2;\r\n        this.radius = 10;\r\n        this.dx = 7;\r\n        this.dy = 7;\r\n    }\r\n}\r\nexports.Ball = Ball;\r\nclass Paddle {\r\n    constructor(canvas, x = 0) {\r\n        Paddle.height = 80;\r\n        Paddle.width = 10;\r\n        this.x = x;\r\n        this.y = canvas.height / 2 - Paddle.height / 2;\r\n        this.dy = 0;\r\n    }\r\n}\r\nexports.Paddle = Paddle;\r\n\n\n//# sourceURL=webpack:///./app/pong/res/objects.ts?");

/***/ }),

/***/ "./app/pong/res/ui.ts":
/*!****************************!*\
  !*** ./app/pong/res/ui.ts ***!
  \****************************/
/***/ ((__unused_webpack_module, exports) => {

eval("\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nexports.UI = void 0;\r\nclass UI {\r\n    constructor() {\r\n        this.startButton = document.querySelector(\"#start\");\r\n        this.p1score = document.querySelector(\"#p1score\");\r\n        this.p2score = document.querySelector(\"#p2score\");\r\n    }\r\n    isPaused() {\r\n        this.startButton.innerHTML = \"Resume\";\r\n    }\r\n    isPlaying() {\r\n        this.startButton.innerHTML = \"Pause\";\r\n    }\r\n    updateScore(player, playerScore) {\r\n        if (player === 1) {\r\n            this.p1score.innerHTML = playerScore.toString();\r\n        }\r\n        if (player === 2) {\r\n            this.p2score.innerHTML = playerScore.toString();\r\n        }\r\n    }\r\n}\r\nexports.UI = UI;\r\n\n\n//# sourceURL=webpack:///./app/pong/res/ui.ts?");

/***/ }),

/***/ "./app/script.ts":
/*!***********************!*\
  !*** ./app/script.ts ***!
  \***********************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nconst pong_1 = __webpack_require__(/*! ./pong/pong */ \"./app/pong/pong.ts\");\r\nwindow.onload = () => {\r\n    let pong = new pong_1.Pong();\r\n};\r\n\n\n//# sourceURL=webpack:///./app/script.ts?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./app/script.ts");
/******/ 	
/******/ })()
;