// CLIENT FORM CONST
const INIT_CLIENT = {
  nombre: '',
  cedula: '20978852',
  telefono: ''
}

const INIT_TELF = {
  prefijo: '58',
  codigo: '',
  telf: ''
}

const CODIGOS = ['XXX', '414', '424', '412', '416', '426']

// PRODUCT FORM CONST
// const INITIAL_PRODUCT_STATE = {
//   name: '', // Nombre del producto
//   category: '', // Categoría del producto
//   price: 0.0, // Precio del producto
//   stock: 1, // Stock inicial del producto
//   cost_price: 0.0, // Precio de costo del producto
//   profit_percentage: 0, // Porcentaje de ganancia del producto
//   image_url: '', // URL de la imagen del producto
//   distribution_url: '' // URL de distribución del producto
// }

const INIT_PRODUCT = {
  nombre: '',
  categoria: '',
  precio: 0.0,
  stock: 1,
  p_cost: 0.0, // PRECIO COSTO
  p_g: 0, // PORCENTAJE GANANCIA
  url_imagen: '',
  url_dist: ''
}

const CATEGORIES = ['', 'WASHITAPES', 'STICKERS', 'LAPICEROS'].sort()

export {
  INIT_CLIENT, INIT_TELF, CODIGOS, INIT_PRODUCT, CATEGORIES
}
