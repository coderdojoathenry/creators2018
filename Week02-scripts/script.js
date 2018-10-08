let a = 4;
let b = 5;
let c = Divide(a, b);

console.log('hgellow there')

if (c < 1){
  MyFunction("c is less than one")
}
else {
  MyFunction("c is greater than one")
}

function MyFunction(what){
    console.log(what);
}

function Divide(n, m){
    return n / m;
}
