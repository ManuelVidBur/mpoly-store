import { ContainerCards } from "../components/ContainerCards.js";
import { Header } from "../components/Header.js";
import { Navbar } from "../components/Navbar.js";

// let titulo = 'titulo1'

export const PantallaIngresoCliente = () => {
	return (
		<div>
			<Header />
			<Navbar />
			<div className="container-section-products flex-d-c">
				<ContainerCards title="Polera" />
				<ContainerCards title="Pantalones" />
				<ContainerCards title="Buzos" />
			</div>
		</div>
	);
};
