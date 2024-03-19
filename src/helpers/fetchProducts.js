import axios from 'axios'

export const fetchProducts = async (setProducts, currentPage) => {
  try {
    const response = await axios.get(`http://localhost:8000/productos?page=${currentPage}`)
    setProducts(response.data)
  } catch (error) {
    console.error('Error fetching products:', error)
  }
}
