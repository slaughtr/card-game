# CardGame

A collectible card game (CCG) written in Angular for Epicodus group week.

Will feature card battling with unique rules. Firebase for database and authorization. Possibly even real-time online battling between seperate machines!

By: Keith Stedman | Xi Xia | Riley Watts | Chris Carr | Dallas Slaughter

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).


TODO
======

### Components
`these are alphabetical, not in order of importance`
+ About
  + Put things in it
  +
+ Board
  + Layout
  + Load in deck
  + Load in lane
  + Load in hand
  + Load in Card
  +
+ Card
  + Layout of:
  + Card info (attack, health, special, name)
  + Eventually art
  +
+ Deck
  + Create deck per player based on cards in deck template (in game component?)
  + Pull cards from deck to hand, removing from deck array
  +
+ Discard
  + Add dead cards to discard pile
  +
+ Game
  + Hold both player objects
  + Count turns
  + Check win conditions regularly (player health, num cards)
  + This should create player decks/shuffle/etc
  +
+ Hand
  + Populate with draws from deck and energy 'pile'
  + Remove cards when they are played
  + Tied to player object
  +
+ Help
  + Contain how to play info
  +
+ Lane
  + May need a model/object in DB
  + Assignable to type (shapes? colors?)
  + Holds card object when card played
  +
+ Main-page
  + Contains welcome messages
  + User logs in here
  + Links to play game, etc
  +
+ Player-detail
  + Info about the player (this will eventually necessitate adding more properties to player, such as wins, losses, bio etc)
  + Highly dependent on elected player properties


#### Services
+ Database
  + Handle all database calls/updates
  +
+ Auth
  + Handle all authorization
  + Create/update/maybe delete players
  +
+ ???


#### Models
+ Card
  + Used to populate player deck via game component
  + Other potentials?
  +
+ Game
  + Add players to game, keep turn count
  + Maybe instantiate new players inside game? Not sure.
  +
+ Player
  + Create new player (only editable thing ATM is name)
  + Could be used for potential AI?
  +

#### Mechanics
+ Lanes
  + Cannot play card unless lane has been 'typed' ('types' drawn from random seperate pile each turn, does not affect player drawing from deck)
  + Can only play card of same 'type' in 'typed' lane, unless lane is 'typed' to allow any card
  + Card in lane always attacks lane across. If no card, attacks enemy mothership
  +
+ Cards
  + Attacking:
    + Cards attack card directly across, subtracting attacking card's attack value from defending card's health value
    + If no defending card, subtrack attack from enemy mothership's health value
    + (eventually) cards can have "specials". This may be magic damage, extra damage against enemies when attacking, healing, etc
  + Defending:
    + Not much to say here
    + (eventually) "specials" may involve dodge/damage reduction
  + "Types":
    + "Types" could be shapes (circle, square, triangle)
    + Could be based on selected deck (fire wizard, water wizard, sword pirate, gun pirate, etc)
    + Randomly selected and given to each player per turn (not influencing normal deck draws)
    + Should be a "neutral" type that will allow ANY card to be played in that lane
+ Deck
  + Drawing:
    + Deck is randomized at beginning of game/random card drawn
    + One card drawn from deck to hand each turn
  + Building:
    + For now, deck is built from pre-built deck, depending on player picking pirates or wizards
    + Would like in the future to have a larger set of cards for a player to build a deck from, and actually collect cards to expand


THINGS TO CONSIDER
======
+ Lanes may need to be included in game model/DB to keep track of typing and what card is played there
+ What "specials" can we incorporate?
+ Drag/drop cards vs click to place?
+ Safely manipulating DB values (IE making new card objects per game vs using the cards from DB to prevent permanent changes).
  + Player
  + Lane
  + Deck
  + Hand
  + etc
  + Could all get screwed up?
+ Sounds of some small sort
+ Art
  + Motherships/etc: https://opengameart.org/content/space-ship-construction-kit
  + Wizards? Several here: https://opengameart.org/users/merry-dream-games
  + Pirates
  + Might be hard to find matching wizards and pirates
+ Animations
  + General UI animations for eyecandy
  + Attacking animations during game
  + Drawing/discarding animations
