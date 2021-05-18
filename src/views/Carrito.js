import { Header } from "../components/Header.js";
import { CarritoCompra } from "../components/CarritoCompra.js";
import { Soporte } from "../components/Soporte.js";

export const Carrito = () => {
  return (
    <>
      <section>
        <Header />
      </section>
      <section>
        <CarritoCompra />
        <Soporte />
      </section>
      </>  
  )
}
