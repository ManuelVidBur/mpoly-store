
export const Button = (props) => {

  return (
    <a href="/" class="botoncito">
      Agregar
      {
        props.iconitoButton && 
        <img src={ props.iconitoButton } width="20px" alt="carrito" />
      }
    </a>
  )
}