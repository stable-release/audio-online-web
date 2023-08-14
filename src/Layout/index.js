import { Link } from "react-router-dom";

function Layout() {
    return (
        <div>
            <Link to="signIn">
                <button className="border border-black py-2 px-4 max-w-md border-" type="button">Sign In</button>
            </Link>
        </div>
    );
}

export default Layout;
