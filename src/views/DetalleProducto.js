import { Header } from "../components/Header.js";
import { Button } from "../components/Button.js";
import { Detalle } from "../components/Detalle.js";
import { Imagen } from "../components/Imagen.js";

export const DetalleProducto = () => {
  return (
    <>
      <Header />
      <div className="dos-sections">
        <section className="img-container-detalle-producto  container-flex-center">
          <Imagen ancho="50%" alto="50%" />
        </section>

        <section className="detalle-container-detalle-producto  container-flex-center">
          <Detalle />
        </section>
      </div>

      <section className="boton-container-detalle-producto container-flex-center ">
        <Button isButton texto="Volver al Inicio" />
      </section>
    </>
  );
};
