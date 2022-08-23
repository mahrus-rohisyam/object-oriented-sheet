import TwoDimensionShape from "./TwoDimensionShape";

export default class ShapeOperation extends TwoDimensionShape {
  /**
   * Untuk dapat mengakses isi dari constructor TwoDimensionShape kita harus menambahkan super(namaProperti) di dalam constructor class.
   */

  constructor(name: string, width: number, height: number){
    super(name, width, height);
  }

  circumference(): number {
    return 2 * (this.width + this.length)
  }

  area(): number {
    return this.width * this.length
  }

  print(): void {
    console.log(`${this.name} has ${this.width} and ${this.length} with ${this.circumference()} circumference and ${this.area()} area`)
  }
}