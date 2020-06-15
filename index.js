let perros = {
  miniatura:  'chihuahua',
  mediano:  'salchicha'
}
console.log(perros)
console.log(perros.miniatura)
console.log(perros['miniatura'])

perros.nuevoKey = 'valor nuevo';
perros['algoNuevo'] = 'Nuevo de otra manera'
console.log(perros)

perros.nuevoKey = 'hola'
console.log(perros)

delete perros.algoNuevo

console.log(perros)

console.log('👇')
Object.keys(perros)