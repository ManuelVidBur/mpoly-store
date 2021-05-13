import { Card } from "../components/Card.js"
import { Header } from "../components/Header.js"

const iconcitoLink = 'https://res.cloudinary.com/initial-cloud/image/upload/v1620870788/carrito_zs5b0x.png'

const productos = [
  {
    id: 1,
    img: 'https://res.cloudinary.com/initial-cloud/image/upload/v1620870405/shirt_kbryht.png',
    nombre: 'polera',
    talla: 'L',
    estado: "disponible",
    color: "gris",
    precio: "9990",
    tipo: "Hombre",
    categoria: "hombres"
  },
  {
    id: 2,
    img: 'https://res.cloudinary.com/initial-cloud/image/upload/v1620870405/shirt_kbryht.png',
    nombre: 'pantalon',
    talla: 'S',
    estado: "disponible",
    color: "negro",
    precio: "5990",
    tipo: "Hombre",
    categoria: "hombres"
  },
  {
    id: 3,
    img: 'https://res.cloudinary.com/initial-cloud/image/upload/v1620870405/shirt_kbryht.png',
    nombre: 'polera',
    talla: 'L',
    estado: "disponible",
    color: "gris",
    precio: "9990",
    tipo: "Hombre",
    categoria: "hombres"
  },
  {
    id: 4,
    img: 'https://res.cloudinary.com/initial-cloud/image/upload/v1620870405/shirt_kbryht.png',
    nombre: 'polera',
    talla: 'L',
    estado: "disponible",
    color: "gris",
    precio: "9990",
    tipo: "Hombre",
    categoria: "hombres"
  },
]

export const PantallaIngresoCliente = () => {
  return (
    <div>
      <Header />
      {
        productos.map((producto) => {
          return <Card key={producto.id} imagen={ producto.img } iconito={ iconcitoLink } />
        })
      }
    </div>
  )
}
