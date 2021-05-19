import { Button } from "../components/Button";
import { Header } from "../components/Header";
import { Soporte } from "../components/Soporte";
import ArrowBackIcon from '@material-ui/icons/ArrowBack';

export const PantallaRetiroLocal = () => {
  return (
    <>
      <Header />

      <section className="border">
        <div className="icono">
        <ArrowBackIcon />
        </div>
        <div className="border">
          <h2 className="sub-titulo-retiro-local">Has seleccionado Retiro en local</h2>
        </div>
      </section>

      <section className="border">
        <ul className="section-lista border">
          <li>Dirección: Los Guanteletes #461.</li>
          <li>Comuna: Puente Alto.</li>
          <li>Persona a Cargo: Javiera Fernandez.</li>
          <li>Lugar de Referencia aproximado: Metro Protectora de la infancia</li>
        </ul>
      </section>

      <section className="boton border">  
      <Button>
        Aceptar y Pagar 
      </Button>
      </section>
      <section className="boton2 border">
      <Button>
        Pagar en el local
      </Button>
      </section>  
      <Soporte />

    </>
  );
};
