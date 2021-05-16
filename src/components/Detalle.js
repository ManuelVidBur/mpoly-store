import { Button } from "./Button";

export const Detalle = (
  {
    titulo="Descripción del Producto",
    nombre="polera",
    talla="XL",
    tipo="Hombre",
    precio="5.990" 
  }
) => {
  return (
    <section className=" container-detalle">
      <h2 className="titulo-detalle ">{titulo}</h2>
      <br></br>
      <p className="nombre-detalle ">{nombre}</p>
      <br></br>
      <p className="talla-detalle">{talla}</p>
      <br></br>
      <p className="tipo-detalle">{tipo}</p>
      <br></br>
      <p className="precio-detalle">${precio}</p>
      <br></br>
      <div className="">
        <Button isButton="true" />
      </div>
    </section>
  );
};
