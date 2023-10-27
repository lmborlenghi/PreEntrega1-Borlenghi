import CartWidget from "./CartWidget"
import logo from "../assets/logo.png"
import cart from "../assets/cart.png"

const Navbar = () => {
    return (
        <header>
            <nav className="navbar navbar-expand-md">
                <div className="navbar-left">
                    <div>
                        <a className="nav-link" href="./"><img src={logo} alt="" /></a>
                    </div>
                    <div className="collapse navbar-collapse" id="options">
                        <ul className="navbar-nav">
                            <li className="nav-item"><a className="nav-link" href="./">Inicio</a></li>
                            <li className="nav-item"><a className="nav-link" href="./">Platillos</a></li>
                            <li className="nav-item"><a className="nav-link" href="./">Redoblantes</a></li>
                            <li className="nav-item"><a className="nav-link" href="./">Baterias Completas</a></li>
                            <li className="nav-item"><a className="nav-link" href="./">Pedales</a></li>
                        </ul>
                    </div>
                </div>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#options">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="navbar-right">
                    <div>
                        <CartWidget id='cartIconToggle' type="button" toggle="offcanvas" target="#offcanvasWithBackdrop"
                            ariacontrols="offcanvasWithBackdrop" routeImg={cart} />
                    </div>
                </div>
            </nav>
        </header>
    );
}
export default Navbar