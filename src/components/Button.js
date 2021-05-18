
export const Button = (
  {
    isButton,
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