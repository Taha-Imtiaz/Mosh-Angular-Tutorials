"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Video # 28
var like_component_1 = require("./like.component");
var component = new like_component_1.LikeComponent(10, true);
component.onClick();
console.log("hello");
console.log("likesCount :" + component.likesCount + " , isSelected : " + component.isSelected + "  ");
