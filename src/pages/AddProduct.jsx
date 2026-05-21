import api from '../api/api'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react'

export default function AddProduct() {
  const navigate = useNavigate()

  const [form, setForm] = useState({
    name: '',
    price: '',
    quantity: ''
  })

  async function handleSubmit(e) {
    e.preventDefault()

    await api.post('/products', {
      name: form.name,
      price: Number(form.price),
      quantity: Number(form.quantity)
    })

    navigate('/products')
  }

  return (
    <div className="page">
      <h1>Cadastrar Produto</h1>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Nome do produto"
          value={form.name}
          onChange={e => setForm({ ...form, name: e.target.value })}
        />

        <input
          type="number"
          placeholder="Preço"
          value={form.price}
          onChange={e => setForm({ ...form, price: e.target.value })}
        />

        <input
          type="number"
          placeholder="Quantidade"
          value={form.quantity}
          onChange={e => setForm({ ...form, quantity: e.target.value })}
        />

        <button type="submit">Salvar</button>
      </form>
    </div>
  )
}
