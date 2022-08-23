import Properties from "./Properties"

export default class TwoDimensionShape implements Properties {
  /**
   * Secara default properti dari class bersifat public dan dapat diakses secara langsung.
   * Kita telah membuat _propertyName menjadi private, dimana hal tersebut dinamakan encapsulation atau penutupan.
   * Mudah kata, kita tidak bisa mengakses properti tersebut dengan langsung.
   * Membutuhkan getter dan setter untuk mengakses hal tersebut.
   */

  private _name: string = ''
  private _width: number = 0
  private _length: number = 0

  /**
   * Constructor memberikan kita kebebasan dalam pengisian nilai awal (initial value).
   * Disini dicontohkan bahwa kita dapat mengisi atau memberikan initial value name, width dan length.
   */

  constructor(name: string, width: number, length: number) {
    this.name = name
    this.width = width
    this.length = length
  }

  /**
   * Yang terjadi disini adalah implements dari Properties sampai pada baris akhir yang bertuliskan  get.
   * set untuk mengubah private properti.
   * get untuk mengakses properti.
   */

  set name(name: string){
    this._name = name
  }

  set width(width: number){
    this._width = width
  }
  
  set length(length: number){
    this._length = length
  }

  get name(): string {
    return this._name
  }
  
  get width(): number {
    return this._width
  }

  get length(): number {
    return this._length
  }
  
  protected print(): void {
    console.log(`${this.name} has ${this.width} and ${this.length}`)
  }

}