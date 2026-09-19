console.log("Hola mundo NODE")
let edad1=19;
let edadb2=21;

console.log("Edad promedio: ");
console.log((edad1 + edadb2) / 2);   

console.log("Medidor de Procesos");
console.time("mi proceso");
for (let i=0 ; i<100000000 ; i++){}
console.timeEnd("mi proceso");