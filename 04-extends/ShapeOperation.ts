import TwoDimensionShape from "./TwoDimensionShape";

export default class ShapeOperation extends TwoDimensionShape {
  circumference(): number {
    return 2 * (this.width + this.length)
  }

  area(): number {
    return this.width * this.length
  }
}