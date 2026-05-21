import { useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import api from '../api/api'

export default function EditProduct() {
  const { id } = useParams()
  const navigate = useNavigate()

  const [form, setForm] = useState({
    name: '',
    price: '',
    quantity: ''
  })

  async function loadProduct() {
    const response = await api.get(`/products/${id}`)

    setForm(response.data)
  }

  async function handleSubmit(e) {
    e.preventDefault()

    await api.put(`/products/${id}`, {
      name: form.name,
      price: Number(form.price),
      quantity: Number(form.quantity)
    })

    navigate('/products')
  }

  useEffect(() => {
    loadProduct()
  }, [])

  return (
    <div className="page">
      <h1>Editar Produto</h1>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={form.name}
          onChange={e => setForm({ ...form, name: e.target.value })}
        />

        <input
          type="number"
          value={form.price}
          onChange={e => setForm({ ...form, price: e.target.value })}
        />

        <input
          type="number"
          value={form.quantity}
          onChange={e => setForm({ ...form, quantity: e.target.value })}
        />

        <button type="submit">Atualizar</button>
      </form>
    </div>
  )
}
