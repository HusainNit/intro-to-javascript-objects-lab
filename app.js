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
console.log("Exercise 11:")
game.catchPokemon=catchPokemon =(pokemonObj)=>{
    game.party.push(pokemonObj);
    game.items[1].quantity--;
};
game.catchPokemon(pokemon[149]);
console.log(game.items)
console.log()


/*
Exercise 12
1. Similar to Exercise 6, now complete gyms with a difficulty below 6. How will you approach this?
 (change the value of `complete` in the qualifying objects from false to true).

Solve Exercise 12 here:
*/

console.log("Exercise 12:")
for(let key in game.gyms){
    if(game.gyms[key].difficulty <6 )
        game.gyms[key].completed = true;
    else
        continue;
}
console.log(game.gyms)
console.log()


/*
Exercise 13
1. Create a `gymStatus` method in `game` to tally completed and incomplete gyms.
2. How will you iterate through the `gyms` array and update the tally? Remember to log the final tally.

This method should:
  - Not accept any arguments.
  - Initially create a constant `gymTally`, which is an object that has two 
    properties: `completed` and `incomplete`, both of which are initially set to 0.
  - Iterate through the objects in the `game.gyms` array and update the 
    properties on `gymTally` as follows: 
    - `completed` should count how many gyms in the array have a value of `true` 
      for their `completed` property. 
    - `incomplete` should count how many gyms in the array have a value of 
      `false` for their `completed` property.
  - Log the value of `gymTally`.
  - The method should not return anything.

For example, if five gym objects have a value of `true` on their `completed` property and three gym objects have a value of `false` on their `completed` property, the logged value would be: `{ completed: 5, incomplete: 3 }`.

Solve Exercise 13 here:
*/

console.log("Exercise 13:")
game.gymStatus = gymStatus = ()=>{
    let gymTally={completed:0,incomplete:0}
    for(let c=0;c<game.gyms.length;c++){
        let currentV=game.gyms[c].completed;
        if(currentV === true){
            gymTally.completed+=1;
        }
        else{
            gymTally.incomplete+=1;
        }
    }
    console.log(gymTally);
};

game.gymStatus();
console.log();


/*
Exercise 14
1. Add a `partyCount` method to `game` that counts the number of Pokémon in your party.

This method should:
  - Not accept any arguments.
  - Count the number of Pokemon in the party.
  - return the found number of Pokemon in the party.

Solve Exercise 14 here:
*/

console.log("Exercise 14:")
game.partyCount = partyCount = () =>{
    return (game.party.length)
}
console.log("Number of pokémon's in the party = "+game.partyCount())
console.log()


/*
Exercise 15
1. Now, complete gyms with a difficulty below 8. Reflect on how this is similar to or different from the previous gym exercises.
(change the value of `complete` in the qualifying objects from false to true).

Solve Exercise 15 here:
*/

console.log("Exercise 15:")
for(let key in game.gyms){
    if(game.gyms[key].difficulty <8 )
        game.gyms[key].completed = true;
    else
        continue;
}
console.log(game.gyms)
console.log()


/*
Exercise 16
1. Log the entire `game` object to the console. Take a moment to review the changes you've made throughout the exercises.


Solve Exercise 16 here:
*/

console.log("Exercise 16:")
console.dir(game)
console.log()



console.log("======== level up ========");
console.log()


/*
Exercise 17
1. Arrange the Pokémon in `game.party` by their HP. The one with the highest HP should come first.
2. You'll need to use the `.sort()` method. How does the compare function work in sorting numbers?


Solve Exercise 17 here:
*/

console.log("Exercise 17:")
pokemon.sort((a, b) => b.hp - a.hp);
console.log(pokemon)
console.log()


/*
Exercise 18
Add a new property to the `game` object called `collection` and initialize its value to an empty array.

Copy the `catchPokemon` method you wrote in Exercise Twelve and paste it below. Modify it so that:
  - Ensure that no more than six Pokemon can be in the party at any time. 
    Excess Pokemon should be placed in the `game.collection` array.
  - It's up to you how to distribute Pokemon in a situation where more than six 
    would be placed into the `game.party` array.

Again, for this exercise, it's okay to have a negative number of pokeballs.

After updating the method, use it by calling it and passing in a pokemon object of your choice from the `pokemon` data to catch it.

Also, log the `game.items` array to confirm that the pokeball quantity is being decremented.

Solve Exercise 18 here:
*/

console.log("Exercise 18:")
game.collection=[];

game.catchPokemon=catchPokemon =(pokemonObj)=>{
    if(game.party.length === 6){
        game.collection.push(pokemonObj)
        game.items[1].quantity--;
    }
    else{
        game.party.push(pokemonObj);
        game.items[1].quantity--;
    }
};
game.catchPokemon(pokemon[21]); // its sorted :\ , i can't choice one from data.js file
console.log(game.items);
console.log(game.collection[0])
console.log()


/*
Exercise 19
Copy the `catchPokemon` method that you just wrote above, and paste it below. The time has come to make it so that we cannot catch a Pokemon when we do not have any pokeballs to catch it with. 

Modify the method so that if there are no pokeballs a message will be displayed that there are not enough pokeballs to catch the desired Pokemon.

Also, ensure that the Pokemon isn't added to the `game.party` or the `game.collection`.

Solve Exercise 19 here:
*/

console.log("Exercise 19:")
game.catchPokemon=catchPokemon =(pokemonObj)=>{
    if( (!game.party.find((poke)=> poke.number === pokemonObj.number) && !game.collection.find((poke)=> poke.number === pokemonObj.number))){
        if(game.items[1].quantity !== 0 ){
            if(game.party.length === 6){
                game.collection.push(pokemonObj)
                game.items[1].quantity--;
            }
            else{
                game.party.push(pokemonObj);
                game.items[1].quantity--;
            }
        }
        else{
            console.log("there are not enough pokeballs to catch the desired Pokemon");
        }
    }else{
        console.log("you already have same type of Pokemon in the party or collection");
    }
};
game.catchPokemon(pokemon[10])
//game.catchPokemon(pokemon[10])  //for testing case where Pokemon in party or collection
console.log(game)
console.log()


/*
Exercise 20
Copy the `catchPokemon` method that you just wrote above, and paste it below. Modify is so that you can just pass in the name of a Pokemon instead of an entire object, and the method will look up the Pokemon from the data set for you.

The string passed in should be allowed to be any case (for example, if the string 'PiKacHU' is passed to the function, it should match to 'Pikachu' in the data set). 

If there is not a match, then return a string noting that the selected Pokemon does not exist. Ensure you do not decrement the pokeball count if an invalid Pokemon name is passed in, and also ensure that the Pokemon isn't added to the `game.party` or the `game.collection`.

Solve Exercise 20 here:
*/

console.log("Exercise 20:")
game.catchPokemon=catchPokemon =(pokeName)=>{
    const evryCase= pokeName.toLowerCase();
    let addPoke=false;
    for(let c=0;c<pokemon.length;c++){
        if(evryCase === pokemon[c].name.toLowerCase()){
            if( (!game.party.find((poke)=> poke.name === pokeName) && !game.collection.find((poke)=> poke.name === pokeName))){
                if(game.items[1].quantity !== 0 ){
                    addPoke=true;
                    // if(game.party.length === 6){
                    //     game.collection.push(pokemon[c])
                    //     game.items[1].quantity--;
                    // }
                    // else{
                    //     game.party.push(pokemon[c]);
                    //     game.items[1].quantity--;
                    // }
                    console.log(pokemon[c])
                }
                else{
                    console.log("there are not enough pokeballs to catch the desired Pokemon");
                }
            }else{
                console.log("you already have same type of Pokemon in the party or collection");
            }
        }
    }
    if(addPoke === false)
        console.log("selected Pokemon does not exist")
};
game.catchPokemon("Bulbasaur");
console.log()


/*
Exercise 21
Dynamically construct an object with the existing `pokemon` data sorted by the different pokemon types. The object will have this structure:

{
  grass: [
    { number: 1, name: 'Bulbasaur', type: 'grass', hp: 45, starter: true },
    { number: 2, name: 'Ivysaur', type: 'grass', hp: 60, starter: false },
    { number: 3, name: 'Venusaur', type: 'grass', hp: 80, starter: false },
    * more grass type Pokemon objects...
  ],
  fire: [
    { number: 4, name: 'Charmander', type: 'fire', hp: 39, starter: true },
    * more fire type Pokemon objects...
  ],
  water: [
    * water type Pokemon objects...
  ],
  * etc... until there is an array for every Pokemon type!
}

Log the object when it's constructed.

Solve Exercise 21 here:
*/

console.log("Exercise 21:")
const pokeSortByType = {};
for (let c = 0; c < pokemon.length; c++) {
  const type = pokemon[c].type;
  if(!pokeSortByType[type]) { // checking if the type is exist, if not add the type as array that will hold pokemon of same type
    pokeSortByType[type] = [];
  }
  pokeSortByType[type].push(pokemon[c]);
}
console.log(pokeSortByType)