/**
 * greedy name.
 * @param human
 */
export const greedy = (human: Human) => {
  console.log(`hello, ${human.name}!!`)
  return `my name is ${human.name}`
}


export interface Human {
  name: string
  age?: number
}


