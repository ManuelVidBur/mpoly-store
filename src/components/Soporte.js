
export const Soporte = (
  {
    configClass = 'img-soporte',
    img = 'https://res.cloudinary.com/repro/image/upload/v1621114855/Soporte_lcyeio.svg',
    alt = "imagen",
    width = '40',
    height = '40'
  }
) => {

  return (
    <img className={configClass} src={img} alt={alt} width={width} height={height} />
  )
}