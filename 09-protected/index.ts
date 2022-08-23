import ShapeOperation from "./ShapeOperation"

/**
 * @ID Jika tidak diisi pada pemanggilan classnya maka akan terjadi error.
 * Class nya meminta kita 3 argument karena kita telah memasukkan 3 syarat pada constructor TwoDimensionShape
 * Ketika kita menambahkan constructor kita tidak perlu melakukan overriding value
 */

let rectangle: ShapeOperation = new ShapeOperation('Rectangle', 10, 15)

/**
 * Calling methods 
 * Yang dilakukan disini adalah memanggil method dari class yang dipanggil
 * */

rectangle.print()

/**
 * @EN We cannot acces the specified methods because we don't allow them to be called. Check 12th line of ./ShapeOperation.ts .
 * But, we can access print() method because ShapeOperation extends TwoDimensionShape. Check at ./ShapeOperation and 56th line of ./TwoDimensionShape.ts .
 * Uncomment the following line if you want to see the difference.
 * 
 * @ID Kita tidak bisa mengakses method tertentu karena kita tidak mengijinkannya untuk dipanggil. Cek baris ke 12 pada ./ShapeOperation.ts .
 * Tapi, kita dapat mengakses method print() karena ShapeOperation meluas TwoDimensionShape. Cek pada ./ShapeOperation dan line ke 56 dari ./TwoDimensionShape.ts .
 * Jalankan perintah dibawah untuk mengetahuinya.
 */

// rectangle.circumference()