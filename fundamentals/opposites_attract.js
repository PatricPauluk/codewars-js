// Timmy & Sarah think they are in love, but around where they live, they will only know once they pick a flower each.
// If one of the flowers has an even number of petals and the other has an odd number of petals it means they are in love.
// Write a function that will take the number of petals of each flower and return true if they are in love and false if they aren't.

function lovefunc(flower1, flower2){
  // moment of truth
  const f1 = flower1 % 2 == 0 ? true : false
  console.log("Flor 1: "+f1);
  const f2 = flower2 % 2 == 0 ? true : false
  console.log("Flor 2: "+f2);
  return f1 === f2 ? false : true;
}

console.log(lovefunc(433, 304));

// You have passed all of the tests! :)