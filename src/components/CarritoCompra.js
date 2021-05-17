import { Button } from "./Button"
import { CarritoItem } from "./CarritoItem"

export const CarritoCompra = (
  {
    foto = "https://res.cloudinary.com/repro/image/upload/v1620964880/shirt_nqxqme.png"

  }
) => {
  return (
    <div>
      <section className="container-titulo-carrito container-flex-center">
        <h2 className="title"> Carrito de Compras </h2>
      </section>
      <CarritoItem />
      <CarritoItem />
      <CarritoItem />
      <div className="advertencia-y-boton container-flex-center">
        <h1 className=""> Para confirmar pedido, primero debe iniciar sesión. </h1>
        <Button isButton >
          Confirmar Compra
          </Button>
      </div>
    </div>

  )
}