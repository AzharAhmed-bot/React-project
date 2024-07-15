import { Navigate } from "react-router-dom";
import { useAppContext } from "./AppProvider";

export default function PrivateRoute({ children}) {
    

    const token=localStorage.getItem('sb-zkvotynkoewautmtfrcb-auth-token');
    console.log(token);

    return token ? children : <Navigate to='/login' />;
}
