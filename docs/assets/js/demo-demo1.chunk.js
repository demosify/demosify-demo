(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["demo-demo1"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./demos/basic/index.html":
/*!**********************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./demos/basic/index.html ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!DOCTYPE html>\n<html lang=\"en\">\n<head>\n  <meta charset=\"UTF-8\">\n  <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\n  <meta http-equiv=\"X-UA-Compatible\" content=\"ie=edge\">\n  <title>basic sprites</title>\n</head>\n<body>\n  <div id=\"paper\"></div>\n</body>\n</html>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./demos/basic/style.css":
/*!*********************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./demos/basic/style.css ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("html,body{\n  margin: 0;\n  padding: 0;\n  background: #151718;\n  height: 100%;\n  width: 100%;\n}\n#paper{\n  width: 100%;\n  height: 100%;\n  background: #201e1e;\n}  ");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./demos/quick start/script.js":
/*!***************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./demos/quick start/script.js ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("(async function () {\n  const {Scene, Sprite, Group} = spritejs;\n  const scene = new Scene('#paper', {viewport: ['auto', 'auto'], resolution: [1200, 1200]});\n\n  await scene.preload([\n    'https://p5.ssl.qhimg.com/t01f47a319aebf27174.png',\n    'https://s3.ssl.qhres.com/static/a6a7509c33a290a6.json',\n  ]);\n\n  const bglayer = scene.layer('bg', {\n      handleEvent: false,\n    }),\n    fglayer = scene.layer('fg', {\n      handleEvent: false,\n      renderMode: 'repaintDirty',\n    });\n\n  const center = [600, 640];\n  const region = new Group();\n\n  region.attr({\n    anchor: 0.5,\n    size: [920, 920],\n    pos: center,\n    bgcolor: '#f4f2e6',\n    borderRadius: 120,\n  });\n  bglayer.append(region);\n\n  const robot = new Sprite('guanguan1.png');\n  robot.attr({\n    anchor: [0.5, 1],\n    pos: [280, 600],\n    transformOrigin: [0, -300],\n    scale: 0.4,\n  });\n  fglayer.append(robot);\n\n  async function robotMotion() {\n    await robot.animate([\n      {textures: 'guanguan1.png'},\n      {textures: 'guanguan2.png'},\n      {textures: 'guanguan3.png'},\n      {textures: 'guanguan1.png'},\n      {textures: 'guanguan2.png'},\n      {textures: 'guanguan3.png', scale: [-0.4, 0.4]},\n      {textures: 'guanguan1.png', scale: [0.4, 0.4]},\n    ], {\n      duration: 3000,\n      easing: 'step-end',\n      fill: 'forwards',\n    }).finished;\n\n    await robot.animate([\n      {y: 600},\n      {y: 1280},\n    ], {\n      duration: 500,\n      easing: 'ease-in',\n      fill: 'forwards',\n    }).finished;\n\n    await robot.animate([\n      {textures: 'guanguan1.png'},\n      {textures: 'guanguan3.png', scale: [-0.4, 0.4]},\n      {textures: 'guanguan1.png'},\n      {textures: 'guanguan2.png'},\n      {textures: 'guanguan3.png', scale: [0.4, 0.4]},\n    ], {\n      duration: 2000,\n      easing: 'step-end',\n      fill: 'forwards',\n    }).finished;\n\n    await robot.animate([\n      {x: 280},\n      {x: 940},\n    ], {\n      duration: 2000,\n      easing: 'ease-in-out',\n      fill: 'forwards',\n    }).finished;\n\n    await robot.animate([\n      {rotate: 0},\n      {rotate: -70},\n    ], {\n      duration: 1000,\n      easing: 'ease-in-out',\n      direction: 'alternate',\n      iterations: 2,\n      fill: 'forwards',\n    }).finished;\n\n    await robot.animate([\n      {textures: 'guanguan3.png'},\n      {textures: 'guanguan1.png'},\n      {textures: 'guanguan2.png'},\n      {textures: 'guanguan1.png'},\n      {textures: 'guanguan3.png'},\n    ], {\n      duration: 2500,\n      easing: 'step-end',\n      fill: 'forwards',\n    }).finished;\n\n    await robot.animate([\n      {rotate: 0},\n      {rotate: -70},\n    ], {\n      duration: 1000,\n      easing: 'ease-in-out',\n      direction: 'alternate',\n      iterations: 2,\n      fill: 'forwards',\n    }).finished;\n\n    await robot.animate([\n      {textures: 'guanguan3.png'},\n      {textures: 'guanguan1.png'},\n      {textures: 'guanguan2.png'},\n      {textures: 'guanguan1.png'},\n      {textures: 'guanguan3.png', scale: [-0.4, 0.4]},\n    ], {\n      duration: 2500,\n      easing: 'step-end',\n      fill: 'forwards',\n    }).finished;\n\n    await robot.animate([\n      {x: 940},\n      {x: 280, offset: 0.99, scale: [-0.4, 0.4]},\n      {x: 280, scale: [0.4, 0.4]},\n    ], {\n      duration: 1000,\n      easing: 'ease-in-out',\n      fill: 'forwards',\n    }).finished;\n\n    await robot.animate([\n      {x: 280, y: 1280, rotate: 0},\n      {x: 940, y: 1280, rotate: 0, offset: 0.3},\n      {x: 940, y: 1280, rotate: -90, offset: 0.35},\n      {x: 940, y: 600, rotate: -90, offset: 0.65},\n      {x: 940, y: 600, rotate: -180, offset: 0.7},\n      {x: 280, y: 600, rotate: -180},\n    ], {\n      delay: 500,\n      duration: 3500,\n      easing: 'ease-in',\n      fill: 'forwards',\n    }).finished;\n\n    robot.attr({\n      textures: 'guanguan1.png',\n    });\n\n    await robot.animate([\n      {y: 600, rotate: -180},\n      {y: 600, rotate: 0},\n    ], {\n      delay: 1000,\n      duration: 1000,\n      fill: 'forwards',\n    }).finished;\n  }\n\n  // noprotect\n  while(1) {\n    /* eslint-disable no-await-in-loop */\n    await robotMotion();\n    /* eslint-enable no-await-in-loop */\n  }\n}());");

/***/ })

}]);
//# sourceMappingURL=demo-demo1.chunk.js.map