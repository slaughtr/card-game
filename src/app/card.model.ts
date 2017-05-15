export class Card {

  //TODO: how will special work? We need a string to display to player, but we will need to run a function at some point for special things, unless we do it inside our component and use "if (card.name === "Blah") { doSpecialThing()}" but that seems bad? We definitely can't push functions to firebase so....??˜
  constructor(public name: string, public health: number, public attack: number, public special: string) {}
}
