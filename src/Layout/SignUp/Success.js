import { useNavigate } from "react-router-dom";
import Logo from "../../assets/images/logo-white.png";
import "./Success.css";
import { useEffect } from "react";

function Success() {
    const navigate = useNavigate();

    useEffect(() => {
        setTimeout(() => navigate("/", {replace: true}), 3000)
    }, [])
    

    return (
        <div
            className="w-screen h-screen flex justify-center flex-col items-center"
            style={{ background: "rgb(17 24 39)" }}
        >
            <div className="h-full w-[50%] flex flex-col justify-center items-center">
                <img
                    className="object-contain h-48 w-48 mb-10"
                    src={Logo}
                    alt=""
                />
                <div className="flex flex-col justify-center items-center">
                    <h2 className="text-2xl font-medium leading-tight text-white my-3">
                        Successful!
                    </h2>
                    <h3 className="flex text-xl font-medium leading-tight text-white items-baseline">
                        Redirecting in a few seconds&nbsp;
                        <div
                            className="loader"
                            style={{
                                border: "4px solid #f3f3f3",
                                borderTop: "4px solid #3498db",
                                borderRadius: "50%",
                                width: "15px",
                                height: "15px",
                                animation: "spin 0.5s linear infinite",
                            }}
                        />
                    </h3>
                </div>
            </div>
        </div>
    );
}

export default Success;
