/**
 * Kita mendefinisikan Properties sebagai properti dari class dengan setter dan getternya masing - masing sehingga tidak perlu membuatnya pada class kita.
 */

export default interface Properties {
  set name(name: string)
  get name(): string
  
  set width(width: number)
  get width(): number

  set length(length: number)
  get length(): number
}