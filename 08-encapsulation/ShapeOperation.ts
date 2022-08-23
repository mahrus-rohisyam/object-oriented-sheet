import TwoDimensionShape from "./TwoDimensionShape";

export default class ShapeOperation extends TwoDimensionShape {
  /**
   * Untuk dapat mengakses isi dari constructor TwoDimensionShape kita harus menambahkan super(namaProperti) di dalam constructor class.
   */

  constructor(name: string, width: number, height: number) {
    super(name, width, height);
  }

  /**
 * @EN We made circumference() and area() methods as private.
 * It means, inheritance of this class nor caller cannot access those methods.
 * Only current class (ShapeOperation) can access them.
 * 
 * @ID Kita membuat method circumference() dan area() menjadi private.
 * Artinya adalah turunan dari kelas ini atupun pemanggilannya tidak dapat mengakses method tersebut.
 * Hanya kelas sekarang (ShapeOperation) yang dapat mengaksesnya.
 */

  private circumference(): number {
    return 2 * (this.width + this.length)
  }

  private area(): number {
    return this.width * this.length
  }

  print(): void {
    console.log(`${this.name} has ${this.width} and ${this.length} with ${this.circumference()} circumference and ${this.area()} area`)
  }
}