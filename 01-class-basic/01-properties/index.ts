import TwoDimensionShape from "./TwoDimensionalShape";

/**
 * Yang dilakukan pada variable square adalah menyatakan bahwa square memiliki keluaran atau type dari TwoDimensionShape
 */

let square: TwoDimensionShape = new TwoDimensionShape()

/**
 * Override properties
 * Yang dilakukan disini adalah menimpa width dan height yang tadinya nol menjadi angka yang dimasukkan
 * */

square.name = "Square"
square.width = 10
square.length = 10

console.log(square)

let rectangle: TwoDimensionShape = new TwoDimensionShape()

rectangle.name = "Rectangle"
rectangle.width = 10
rectangle.length = 15

console.log(rectangle)