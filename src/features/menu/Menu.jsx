import { useLoaderData } from "react-router-dom";
import { getMenu } from "../../services/apiRestaurant";
import MenuItem from "./MenuItem";

function Menu() {
    const menu = useLoaderData();

    return (
        <div>
            <h1>Menu</h1>
            <ul>
                {menu.map((pizza) => (
                    <MenuItem key={pizza.id} pizza={pizza} />
                ))}
            </ul>
        </div>
    );
}
export const loader = async () => await getMenu();

export default Menu;
