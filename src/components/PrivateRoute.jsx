import { Navigate } from "react-router-dom";
import { useAppContext } from "./AppProvider";

export default function PrivateRoute({ children }) {
    const {user}=useAppContext();

    console.log(user);

    return user ? children : <Navigate to='/login' />;
}
