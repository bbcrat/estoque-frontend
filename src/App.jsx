import "./styles/global.css";

function App() {
  return (
    <div className="layout">
      <aside className="sidebar">
        <h2>Estoque</h2>

        <nav>
          <a href="#">Dashboard</a>
          <a href="#">Produtos</a>
          <a href="#">Adicionar Produto</a>
        </nav>
      </aside>

      <main className="content">
        <h1>Sistema de Estoque</h1>

        <div className="cards">
          <div className="card">
            <h3>Produtos</h3>
            <p>120</p>
          </div>

          <div className="card">
            <h3>Baixo Estoque</h3>
            <p>8</p>
          </div>

          <div className="card">
            <h3>Vendas Hoje</h3>
            <p>25</p>
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;