// Video # 14
// function log(message) {
//     console.log(message);
// }
// var message = "Hello World"
// log(message)
// Video # 15
// function doSomething() {
//     for(let i = 0 ; i<5; i++) {
//         console.log(i);
//     }
//     console.log(`Finally ${i}`);
// }
// doSomething()
// Video # 16 (Types)
// let count = 5
// count = 'a'
// let a: number; //a has any type
// // a=1;
// // a=true;
// // a= 'a'
// let b: boolean
// let c: string
// let d: any
// let e: number[] = [1, 2, 3, 4, 5] //for array of numbers
// let f: any[] = [1, true, 'a', false] //for array of numbers
// // In Javascript
// const colorRed = 0
// const colorGreen = 1
// const colorBlue = 2
// // In Typescript
// enum Color { Red = 0, Green = 1, Blue = 2 }
// let backgroundColor = Color.Red
// Video # 17 (Type Assertions)
// let message
// message = 'abc'
// // Type Assertions
// let endsWithC = (<string>message).endsWith('c')
// let alternativeWay = (message as string).endsWith('c')
// Video # 18 (Arrow Functions)
// let log = function(message) {
//     console.log(message);
// }
// let doLog = (message) => console.log(message);
// Video # 19 (Interfaces)
// Define an Interface
// interface Point {
//     x: number,
//     y: number,
//     draw: () => void
// }
// let drawPoint = (pointObj:{x:number, y: number}) => {}
// use interface syntax
// let drawPoint = (point: Point) => {}
// drawPoint({
//     x: 1,
//     y: 2
// })
// Video # 20 and Video # 21
// var Point = /** @class */ (function () {
//     function Point(x, y) {
//         this.x = x;
//         this.y = y;
//     }
//     // methods (because thee functions are a part of a class)
//     Point.prototype.drawPoint = function () {
//         // ...add logic for drawing a point
//         console.log("X is : " + this.x + " Y is : " + this.y);
//     };
//     return Point;
// }());
// // make objects and allocate memory to it
// // object is an instance of a class
// var point = new Point(1, 2);
// point.drawPoint();
