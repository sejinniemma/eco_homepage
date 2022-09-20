import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './app.module.css';
import Australia from './au/australia';
import Canada from './canada/canada';
import styles from './app.module.css';

function App() {
  return (
    <section>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Australia />} />
          <Route path='/canada' element={<Canada />} />
        </Routes>
      </BrowserRouter>
    </section>
  );
}

export default App;
