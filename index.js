let perros = {
  miniatura:  'chihuahua',
  mediano:  'salchicha'
}
console.log(perros)
console.log(perros.miniatura)
console.log(perros['miniatura'])

//Agregar nuevos pares key-value
perros.nuevoKey = 'valor nuevo';
perros['algoNuevo'] = 'Nuevo de otra manera'
console.log(perros)

perros.nuevoKey = 'hola'
console.log(perros)

//Eliminar una propiedad en un Objeto
delete perros.algoNuevo

console.log(perros)

console.log('👇')
// Listar las propiedades de un Objeto
Object.keys(perros)