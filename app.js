const pokemon = require('./data.js');

const game = {
    party: [],
    gyms: [
      { location: "Pewter City", completed: false, difficulty: 1 },
      { location: "Cerulean City", completed: false, difficulty: 2 },
      { location: "Vermilion City", completed: false, difficulty: 3 },
      { location: "Celadon City", completed: false, difficulty: 4 },
      { location: "Fuchsia City", completed: false, difficulty: 5 },
      { location: "Saffron City", completed: false, difficulty: 6 },
      { location: "Cinnabar Island", completed: false, difficulty: 7 },
      { location: "Viridian City", completed: false, difficulty: 8 },
    ],
    items: [
      { name: "potion", quantity: 4 },
      { name: "pokeball", quantity: 8 },
      { name: "rare candy", quantity: 99 },
    ],
  }

  //Exercise 1
//console.dir(pokemon, { maxArrayLength: null });


//Exercise 2
//console.log(game)



/*
Exercise 3
1. Add a new property to the `game` object. Let's call it "difficulty".
2. Choose a value for "difficulty" that you think fits the game. Ex: "Easy", "Med" or "Hard". How would you assign it?


Solve Exercise 3 here:
*/


game.difficulty=['Easy','Med','Hard','VeryHard'];
console.log(`Exercise 3 : ${game.difficulty}`);
console.log()

/*
Exercise 4
1. Select a starter Pokémon from the `pokemon` array. Remember, a starter Pokémon's `starter` property is true.
2. Add this Pokémon to the `game.party` array. Which array method will you use to add them?


Solve Exercise 4 here:
*/

const starterPokemon=pokemon[24];
// console.log(starterPokemon)
// console.log()

game.party.push(starterPokemon);
console.log(`Exercise 4 :`)
console.log(game.party)
console.log()


/*
Exercise 5
1. Choose three more Pokémon from the `pokemon` array and add them to your party.
2. Consider different attributes like 'type' or 'HP' for your selection. Which array method will you use to add them?


Solve Exercise 5 here:
*/

const p1=pokemon[43];
const p2=pokemon[68];
const p3=pokemon[98];
// console.log(p1)
// console.log(p2)
// console.log(p3)
game.party.push(p1,p2,p3)
console.log("Exercise 5 ")
console.log(game.party)
console.log()


/*
Exercise 6
1. Set the `completed` property to true for gyms with a difficulty below 3.
2. Think about how you'd loop through the `gyms` array to check and update the `completed` property.


Solve Exercise 6 here:
*/

for(let key in game.gyms){
    if(game.gyms[key].difficulty <3 )
        game.gyms[key].completed = true;
    else
        continue;
}
 console.log("Exercise 6")
 console.log(game.gyms)
 console.log()


 /*
Exercise 7
1. Evolve the starter Pokémon you added to your party earlier. Each starter Pokémon evolves into a specific one.
2. How would you replace the current starter Pokémon in your party with its evolved form?

Hint: 
  - Pokemon 1: Bulbasaur evolves into Pokemon 2: Ivysaur
  - Pokemon 4: Charmander evolves into Pokemon 5: Charmeleon
  - Pokemon 7: Squirtle evolves into Pokemon 8: Wartortle
  - Pokemon 25: Pikachu evolves into Pokemon 26: Raichu

More Hints: The existing starter Pokemon will be *replaced* in your party with the Pokemon it evolved into. When working with an array of objects, the splice() array method is ideal for replacing one element with another. 


Solve Exercise 7 here:
*/
console.log("Exercise 7:")
const evolve=pokemon[25];
game.party.splice(0,1,evolve);
console.log(game.party)
console.log()


/*
Exercise 8
1. Print the name of each Pokémon in your party.
2. Consider using a loop or an array method to access each Pokémon's name.

Solve Exercise 8 here:
*/

console.log("Exercise 8:")
for(let c=0;c<game.party.length;c++){
    console.log(game.party[c].name)
}
console.log()


/*
Exercise 9
1. Can you print out all the starter Pokémon from the `pokemon` array?
2. Think about how you can identify a starter Pokémon and then log their names.


Solve Exercise 9 here:
*/

console.log("Exercise 9");
for(let c=0;c<pokemon.length;c++){
    if(pokemon[c].starter ===true)
        console.log(pokemon[c])
}
console.log()


/*
Exercise 10
Create a method called `catchPokemon` and add it to the `game` object. You should not need to edit the original game object directly. This method should:
  - Accept an object as a parameter called `pokemonObj`
  - Add the `pokemonObj` to the `game.party` array.
  - not return anything

After writing this method, call it and pass in a Pokemon object of your choice from the `pokemon` data to catch it.

Solve Exercise 10 here:
*/

console.log("Exercise 10:")
game.catchPokemon=catchPokemon =(pokemonObj)=>{game.party.push(pokemonObj)};
// console.log(game)
game.catchPokemon(pokemon[98]);
console.log(game.party)
console.log()


/*
Exercise 11
1. Copy the `catchPokemon` method that you just wrote above, and paste it below. Modify it so that it also decreases the number of pokeballs in your inventory each time you catch a Pokémon.
2. How will you find and update the quantity of pokeballs in the `game.items` array?

Tips:
For this exercise, it's okay to have a negative number of pokeballs.
After updating the method, call it and pass in a Pokemon object of your choice from the `pokemon` data to catch it.
Also, log the `game.items` array to confirm that the pokeball quantity is being decremented.

Solve Exercise 11 here:
*/









