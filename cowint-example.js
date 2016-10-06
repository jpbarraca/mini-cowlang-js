//Support functions
function input_char() {
    return 97;
}

var STDOUT = '';

function output_char(c) {
    STDOUT = STDOUT+c[0];
}


//Interpreter start
c = (c => {
  for (r = v = input_char, x = output_char, b = a = 0, m = [0], f = [], c = c.match(g = /[MO]{3}/gi), l = "moomOomoOmOOMooMOoMoOMOOOOOMMMOOMoom".match(g), k = [b => {
   a = f.pop() - 1
  }, a => --b, a => !m[++b] && (m[b] = 0), b => 3 != t && l[t] ? k[t]() : a = -1, a => t ? x(String.fromCharCode(t)) : m[b] = v(), a => --m[b], a => ++m[b], b => {
   if (!t) {
    for (a++; c[++a] != l[0];) c[a] == l[7] && k[7]();
    a++
   }
   t && f.push(a)
  }, a => m[b] = 0, a => r == v ? r = t : (m[b] = r, r = v), a => ("" + t).split("").map(x), a => m[b] = v()]; c[a];) t = m[b],
 i = l.indexOf(c[a++]),
 i >= 0 && k[i](i)
})
//Interpreter end

//Simple test with Hello World!
var hello="MoOMoOMoOMoOMoOMoOMoOMoOMoOMoOMoOMoOMoOMoOMoOMoOMoOMoOMoOMoOMoOMoOMoOMoOMoOMoOMoOMoOMoOMoOMoOMoOMoOMoOMoOMoOMoOMoOMoOMoOMoOMoOMoOMoOMoOMoOMoOMoOMoOMoOMoOMoOMoOMoOMoOMoOMoOMoOMoOMoOMoOMoOMoOMoOMoOMoOMoOMoOMoOMoOMoOMoOMooMoOMoOMoOMoOMoOMoOMoOMoOMoOMoOMoOMoOMoOMoOMoOMoOMoOMoOMoOMoOMoOMoOMoOMoOMoOMoOMoOMoOMoOMooMoOMoOMoOMoOMoOMoOMoOMooMooMoOMoOMoOMooOOOMoOMoOMoOMoOMoOMoOMoOMoOMoOMoOMoOMoOMoOMoOMoOMoOMoOMoOMoOMoOMoOMoOMoOMoOMoOMoOMoOMoOMoOMoOMoOMoOMoOMoOMoOMoOMoOMoOMoOMoOMoOMoOMoOMoOMooMoOMoOMoOMoOMoOMoOMoOMoOMoOMoOMoOMoOMoOMoOMoOMoOMoOMoOMoOMoOMoOMoOMoOMoOMoOMoOMoOMoOMoOMoOMoOMoOMoOMoOMoOMoOMoOMoOMoOMoOMoOMoOMoOMoOMoOMoOMoOMoOMoOMoOMoOMoOMoOMoOMoOMoOMoOMoOMoOMoOMoOMoOMoOMoOMoOMoOMoOMoOMoOMoOMoOMoOMoOMoOMoOMoOMoOMoOMoOMoOMoOMoOMoOMoOMoOMoOMoOMoOMoOMoOMoOMoOMoOMoOMoOMoOMoOMoOMoOMoOMoOMoOMoOMoOMoOMoOMoOMoOMoOMoOMoOMoOMoOMoOMoOMoOMooMOoMOoMOoMOoMOoMOoMOoMOoMOoMOoMOoMOoMOoMOoMOoMOoMOoMOoMOoMOoMOoMOoMOoMOoMOoMOoMOoMOoMOoMOoMOoMOoMOoMOoMOoMOoMOoMOoMOoMOoMOoMooMOoMOoMOoMOoMOoMOoMOoMOoMooMoOMoOMoOMooMOoMOoMOoMOoMOoMOoMooMOoMOoMOoMOoMOoMOoMOoMOoMooOOOMoOMoOMoOMoOMoOMoOMoOMoOMoOMoOMoOMoOMoOMoOMoOMoOMoOMoOMoOMoOMoOMoOMoOMoOMoOMoOMoOMoOMoOMoOMoOMoOMoOMoo";

console.log("Test: Hello world");
c(hello)
console.log(STDOUT);