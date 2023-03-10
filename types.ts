type Element = 'Fire' | 'Air' | 'Earth' | 'Water' | 'Sun' | 'Animal' | 'Moon' | 'Plant' | ''
type Speed = 'Slow' | 'Fast'
export interface PowerCard {
  name: string
  cost: number
  speed: Speed
  elements: Array<Element>
  description: string
}
export interface CardDeck {
  draw: Array<unknown>
  discard: Array<unknown>
  current: Array<unknown>
}
export interface FearCard {
  name: string
  level1: string
  level2: string
  level3: string
}
export type IslandLetter = 'A' | 'B' | 'C' | 'D' | 'E' | 'F'
export interface Adversary {
  title: string
  code: string
  difficulty: Array<number>
}
export type AvailableColor = 'yellow'
