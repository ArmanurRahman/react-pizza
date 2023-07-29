import Header from "./Header";
import CartOverview from "../features/cart/CartOverview";
import { Outlet } from "react-router-dom";

function AppLayout() {
    return (
        <div>
            <header>
                <Header />
            </header>
            <main>
                <Outlet />
            </main>

            <CartOverview />
        </div>
    );
}

export default AppLayout;
