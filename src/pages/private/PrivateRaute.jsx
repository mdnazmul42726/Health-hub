import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import { useNavigate } from "react-router-dom";
import { TailSpin } from "react-loader-spinner";

const PrivateRaute = ({ children }) => {
    const { user, loading } = useContext(AuthContext);
    const navigate = useNavigate();

    if (loading) {

        return (
            <div className="min-h-screen flex justify-center items-center">
                <TailSpin height="80" width="80" color="#4fa94d" ariaLabel="tail-spin-loading" radius="1" visible={true} />
            </div>
        )

    } 

    if (user) {
        return <div className="min-h-screen">{children}</div>;
    } else {
        return navigate('/login');
    }
};

export default PrivateRaute;