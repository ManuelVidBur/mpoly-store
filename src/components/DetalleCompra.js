export const DetalleCompra = (
  {
    marca="Polera Nike Verde",
    talla="L",
    tipo="Unisex",
    precio="5.990" 
  }
) => {
  return (
    <section className=" fs-l container-flex-center-end">
      <div>
      <h2 className="detalle-compra">{marca} {talla} {tipo} {precio} </h2>
      </div>
    </section>
  );
};
