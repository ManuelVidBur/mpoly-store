import { Soporte } from "./Soporte"

export const CarritoCompra = () => {
  return (
    <div className="border">
      <section className="container-titulo-carrito container-flex-center">
        <h2 className="title"> Carrito de Compras </h2>
      </section>

      <section className="lista-compras-carrito border">
        <div className="descripciones-compras border">

        </div>
        <div className="advertencia-y-boton border">
          <h1 className="advertencia"> Para confirmar pedido, primero debe iniciar sesión. </h1>
          <input className="boton-confirmar-compra border" type="button" value="Confirmar Compra" />
        </div>
      </section>

      <section className="soporte">
        <Soporte />
      </section>



    </div>

  )
}