console.log('-----------------');
const producto7 = 'Monitor 20 Pulgadas';

// .replace para reemplazar
console.log(producto7);
console.log(producto7.replace('Pulgadas', '"'));
console.log(producto7.replace('Monitor', 'Monitor Curvo'));

// .slice para cortar
console.log(producto7.slice(0, 10));
console.log(producto7.slice(8));
console.log(producto7.slice(2, 1));

// Alternativa a slice
console.log(producto7.substring(0, 10));
console.log(producto7.substring(2, 1));

const usuario = "Adrián";
console.log(usuario.substring(0, 1));
console.log(usuario.charAt(0));