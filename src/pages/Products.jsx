import { useEffect, useState } from 'react'
import api from '../api/api'

export default function Products() {
  const [products, setProducts] = useState([])

  async function loadProducts() {
    const response = await api.get('/products')
    setProducts(response.data)
  }

  async function deleteProduct(id) {
    await api.delete(`/products/${id}`)
    loadProducts()
  }

  useEffect(() => {
    loadProducts()
  }, [])

  return (
    <div className="page">
      <h1>Produtos</h1>

      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Nome</th>
            <th>Preço</th>
            <th>Quantidade</th>
            <th>Ações</th>
          </tr>
        </thead>

        <tbody>
          {products.map(product => (
            <tr key={product.id}>
              <td>{product.id}</td>
              <td>{product.name}</td>
              <td>R$ {product.price}</td>
              <td>{product.quantity}</td>

              <td>
                <button>Editar</button>
                <button onClick={() => deleteProduct(product.id)}>
                  Excluir
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
