import { useCart } from "@/hooks/useCart";
import Link from "next/link";
import { Badge, Nav, Navbar } from "reactstrap";

const Header = () => {
    const {cart} = useCart();
    return (
        <Navbar container="md" color="dark" dark>
            <Link href="/" className="navbar-brand">
                Bazar da web
            </Link>
            <Nav className="flex-row" navbar>
                <Link href="/products" className="nav-link me-2">
                    Produtos
                </Link>
                <Link href="/cart" className="nav-link">
                    Carrinho
                    <Badge>
                        {cart.length}
                    </Badge>
                </Link>
            </Nav>
        </Navbar>
    );
};

export default Header;
