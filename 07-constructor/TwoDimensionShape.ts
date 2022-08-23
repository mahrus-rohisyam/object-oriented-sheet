import Properties from "./Properties"

export default class TwoDimensionShape implements Properties {
  /**
   * Dibawah ini adalah properti dari TwoDimensionShape
   */

  name: string = ''
  width: number = 0
  length: number = 0

  /**
   * Constructor memberikan kita kebebasan dalam pengisian nilai awal (initial value).
   * Disini dicontohkan bahwa kita dapat mengisi atau memberikan initial value name, width dan length.
   */

  constructor(name: string, width: number, length: number) {
    this.name = name
    this.width = width
    this.length = length
  }
  
  print(): void {
    console.log(`${this.name} has ${this.width} and ${this.length}`)
  }

}