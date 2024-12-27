import { useNavigate } from "react-router";
export default function Protect(){
    const user = localStorage.getItem('user');
    const navigate = useNavigate();
    function role () { 
        if (user.role === 'admin') 
        {
            navigate('/admin/dashbord')
        } else if (user.role === "user") {
            navigate('/user/dashboard')
        } else {
            navigate('/connexion')
        }
    }

    return(
        <>
        {
            role()
        }
        </>
    )
}