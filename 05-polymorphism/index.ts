/**
 * Description: Extends adalah turunan class atau inheritance
 */

import ShapeOperation from "./ShapeOperation"

let rectangle: ShapeOperation = new ShapeOperation()

/**
 * Override properties
 * Yang dilakukan disini adalah menimpa width dan height yang tadinya nol menjadi angka yang dimasukkan
 * */

rectangle.width = 10
rectangle.length = 15

/**
 * Calling methods 
 * Yang dilakukan disini adalah memanggil method dari class yang dipanggil
 * */

rectangle.print()
rectangle.area()
rectangle.circumference()