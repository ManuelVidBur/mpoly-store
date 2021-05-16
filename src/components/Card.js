import { Button } from "./Button.js";

export const Card = ({
  imagen = "https://res.cloudinary.com/initial-cloud/image/upload/v1620870405/shirt_kbryht.png",
  iconito = "https://res.cloudinary.com/initial-cloud/image/upload/v1620870788/carrito_zs5b0x.png",
}) => {
  return (
    <div className="card">
      <img className="br" src={imagen} alt="producto" />
      <div className="footer-card">
        <Button iconitoButton={iconito} />
      </div>
    </div>
  );
};
