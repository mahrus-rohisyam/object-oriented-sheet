export default class TwoDimensionShape {
  /**
   * Dibawah ini adalah properti dari TwoDimensionShape
   */

  name: string = ''
  width: number = 0
  length: number = 0

  /**
   * Dibawah ini adalah method dari TwoDimensionShape
   * : type adalah keluaran dari method tersebut
   */

  print(): void {
    console.log(`${this.name} has ${this.width} and ${this.length}`)
  }

}