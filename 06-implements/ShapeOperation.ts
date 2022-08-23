import TwoDimensionShape from "./TwoDimensionShape";

export default class ShapeOperation extends TwoDimensionShape {
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