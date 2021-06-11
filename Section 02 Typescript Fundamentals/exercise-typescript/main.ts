// Video # 28
import {LikeComponent} from "./like.component"

let component = new LikeComponent(10, true)
component.onClick()
console.log("hello");

console.log(`likesCount :${component.likesCount} , isSelected : ${component.isSelected}  `);
