import { useState } from 'react';
import ListaVentas from './components/ListaVentas';
import FormularioVenta from './components/FormularioVenta';
import './App.css';

function App() {
  const [vista, setVista] = useState('lista');

  return (
    <div className="app-inframem">
      <header className="header-inframem">
        <h1>🏫 Cafetería INFRAMEN</h1>
        <p>Sistema de Gestión Escolar - Reinaldo</p>
      </header>
      
      <main className="main-inframem">
        {vista === 'lista' && <ListaVentas onAgregar={() => setVista('formulario')} />}
        {vista === 'formulario' && <FormularioVenta onSaved={() => setVista('lista')} onCancel={() => setVista('lista')} />}
      </main>

      <footer className="footer-inframem">
        <p>© 2026 Instituto Nacional "General Francisco Menéndez" - INFRAMEN</p>
      </footer>
    </div>
  );
}
export default App;