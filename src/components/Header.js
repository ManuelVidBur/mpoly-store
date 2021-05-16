import { Avatar } from "./Avatar"
import ExitToAppIcon from "@material-ui/icons/ExitToApp";

let avatarcito = 'https://res.cloudinary.com/dacsggoox/image/upload/v1620600640/avatar_rkcnm2.png'

export const Header = () => {
  return (
    <section className="barra-title">
      <div className="principal-title">
        <a href="/">
          <h1 className="title-header">MPoly Store</h1>
        </a>
      </div>
      <div className="container-right-head">
        <Avatar configClass= "img-avatar" img= { avatarcito } alt= "avatar del header" width= "40" height= "40"/> 
        <h3 className="name">Jorge Arancibia</h3>
        <a href="./login.html">
          <ExitToAppIcon />
        </a>
      </div>
    </section>
  );
};
