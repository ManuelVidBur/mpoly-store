// import { PantallaIngresoCliente } from './views/PantallaIngresoCliente.js'
import './styles/main.scss'
import { Ofertas } from './views/Ofertas'
import { Registro } from './views/Registro.js';

export const App = () => {
  return (
    <div>
      {/* <PantallaIngresoCliente /> */}
      <Ofertas />
      <Registro />
    </div>
  );
}

