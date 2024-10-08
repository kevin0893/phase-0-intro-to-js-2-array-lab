// Write your solution here!
// Write your solution here!
const cats = ["Milo", "Otis", "Garfield"]
function  destructivelyAppendCat(){
const end = cats.push('Ralph');
console.log(end);
}
function destructivelyPrependCat(){
    const prepend =cats.unshift('Bob')
    console.log(prepend);
}
function destructivelyRemoveLastCat(){
    const last =cats.pop()
    console.log(last);
}
function destructivelyRemoveFirstCat(){
    const first =cats.shift()
    console.log(first);
}
function appendCat(name){
  let newCats =[ ...cats,name];
  return newCats;
}
function prependCat(name){ 
    let afterCats =[ name, ...cats];
    return afterCats;
  }
function removeLastCat(){
    let lastCat = cats.slice(0,-1)
    return lastCat;
}
function removeFirstCat(){
    let firstCat = cats.slice(1)
    return firstCat;
}