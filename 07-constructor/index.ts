/**
 * Description: Extends adalah turunan class atau inheritance
 */

import ShapeOperation from "./ShapeOperation"

/**
 * Jika tidak diisi pada pemanggilan classnya maka akan terjadi error.
 * Class nya meminta kita 3 argument karena kita telah memasukkan 3 syarat pada constructor TwoDimensionShape
 * Ketika kita menambahkan constructor kita tidak perlu melakukan overriding value
 */

let rectangle: ShapeOperation = new ShapeOperation('Rectangle', 10, 15)

/**
 * Calling methods 
 * Yang dilakukan disini adalah memanggil method dari class yang dipanggil
 * */

rectangle.print()