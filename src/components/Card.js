import { Button } from './Button.js'

export const Card = (props) => {

  return (
    <div className="card">
      <img src={ props.imagen } alt="producto" />
      <div className="footer-card">
        <Button iconitoButton={props.iconito} />
      </div>
    </div>
  )
}
