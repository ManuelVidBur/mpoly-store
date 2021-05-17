
export const Button = (
  {
    ancho = "20px",
    iconitoButton,
    isButton,
    texto = "Agregar",
    children

  }
) => {

  return (
    <>
      {
        isButton ?
          (
            <button className="botoncito">
              {children}
            </button>
          ) : (
            <a href="/" className="botoncito">
              {children}
            </a>
          )
      }
    </>
  )
}