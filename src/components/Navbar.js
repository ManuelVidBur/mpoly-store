import { Search, ShoppingCart } from "@material-ui/icons";

export const Navbar = () => {
  return (
    <section className="navbar">
      <div className="container-list">
        <ul className="list">
          <a href="/">
            <li>Ofertas</li>
          </a>
          <a href="./mujer.html">
            <li>Mujer</li>
          </a>
          <a href="./hombre.html">
            <li>Hombre</li>
          </a>
          <a href="./niños.html">
            <li>Niños</li>
          </a>
          <a href="./unisex.html">
            <li>Unisex</li>
          </a>
        </ul>
      </div>
      <div className="right-nav">
        <input type="text" />
        <a className="container-search" href="./pantallaBusqueda.html">
          <Search />
        </a>
        <a href="./carritoDeCompras.html">
          <ShoppingCart />
        </a>
      </div>
    </section>
  );
};
