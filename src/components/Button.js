
export const Button = (
  {
    ancho="20px",
    iconitoButton,
    isButton,
    texto="Seleccionar"

  }
) => {

  return (
    <>
    {
      isButton ? 
        (
          <button className="botoncito">
            {texto} 
          {
            iconitoButton && 
            <img src={ iconitoButton } width="20px" alt="carrito" />
          }
        </button>
        ) : (
          <a href="/" className="botoncito">
            {texto}
          {
            iconitoButton && 
            <img src={ iconitoButton } width="20px" alt="carrito" />
          }
        </a>
        )
    }
  
    </>
  )
}