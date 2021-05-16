

export const HeaderButtons = () => {
  return (
    <section className="barra-title">
      <div className="principal-title">
        <a href="/">
          <h1 className="title-header">MPoly Store</h1>
        </a>
      </div>
      <div className="container-right-head">
        <a href="/">
          <input class="login" type="button" value="Iniciar Sesión" />
        </a>
        <a href="/">
          <input class="register" type="button" value="Registrarse" />
        </a>
      </div>
    </section>
  )
}