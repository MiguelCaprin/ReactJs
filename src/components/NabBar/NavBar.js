import CartWidget from "./CartWidget/CartWidget"

const NavBar = () =>  {
    return (
        <nav>
            <h3>Ecomerce</h3>
            <div>
                <button>Celulares</button>
                <button>Tablets</button>
                <button>Nootebook</button>
            </div>
            <CartWidget />
        </nav>
    )
}

export default NavBar