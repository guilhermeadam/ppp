import { Routes, Route } from 'react-router-dom';

import Broad from './pages/broad';
import Coverage from './pages/coverage';
import Service from './pages/service';

export default function Router() {
  return (
    <Routes>
      <Route path='/' element={<Broad />} />
      <Route path='/cobertura' element={<Coverage />} />
      <Route path='/servicos' element={<Service />} />
      <Route path='/ligacoes' element={<h1>Ligações</h1>} />
      <Route path='/rede' element={<h1>Rede</h1>} />
      <Route path='/infraestrutura' element={<h1>Infraestrutura</h1>} />

      <Route path='*' element={<h1>Rota desconhecida</h1>} />
    </Routes>
  );
}
