import Logo from "../../assets/images/logo-white.png";
import { useEffect, useState } from "react";
import EmailPage from "./EmailPage";
import CodePage from "./CodePage";
import MessageConsole from "./MessageConsole";
import { useNavigate } from "react-router-dom";

function SignUp() {
    // Debugger
    const [page, setPage] = useState(true);
    // End Debugger
    const navigate = useNavigate();
    const API_URL = process.env.REACT_APP_API_URL;
    const [formData, setFormData] = useState({
        email: "",
        confirmEmail: "",
        username: "",
        password: "",
        confirmPassword: "",
        code: "",
    });

    const [submit, setSubmit] = useState(false);
    const [errorMessage, setErrorMessage] = useState("");

    const [submitCode, setSubmitCode] = useState(false);
    const [newCode, setNewCode] = useState(false);
    const [newCodeTime, setNewCodeTime] = useState(0);

    // Handler for submitting new account information
    useEffect(() => {
        const abortController = new AbortController();
        async function submitAccount() {
            try {
                const headersList = {
                    Accept: "*/*",
                    "Content-Type": "application/json",
                };
                const bodyContent = JSON.stringify({
                    data: {
                        account_username: `${formData.username}`,
                        account_email: `${formData.email}`,
                        account_password: `${formData.password}`,
                    },
                });
                const response = await fetch(
                    `${API_URL}accounts/new`,
                    {
                        method: "POST",
                        body: bodyContent,
                        headers: headersList,
                    }
                );
                const data = await response.json();
                console.log(data);
                if (data.error) {
                    setErrorMessage(data.error);
                    setSubmit(false);
                    setNewCodeTime(Date.now() / 1000);
                    setNewCode(false);
                } else {
                    setErrorMessage("Check you email!");
                    setPage((prev) => !prev);
                }
            } catch (error) {
                abortController.abort(error);
            }
        }
        if (formData.email !== "" && page !== false) {
            submitAccount();
        }
    }, [submit]);

    const handleSubmit = (event) => {
        event.preventDefault();
        if (
            formData.email === formData.confirmEmail &&
            formData.password === formData.confirmPassword
        ) {
            setSubmit(true);
            console.log("submitted");
        } else {
            setErrorMessage("Please confirm with matching details");
        }
    };

    // Code submission for verification
    useEffect(() => {
        const abortController = new AbortController();
        async function verifyCode() {
            try {
                const headersList = {
                    Accept: "*/*",
                    "Content-Type": "application/json",
                };
                const bodyContent = JSON.stringify({
                    data: {
                        account_email: `${formData.email}`,
                        verification_code: `${formData.code}`,
                    },
                });
                const response = await fetch(
                    `${API_URL}accounts/code`,
                    {
                        method: "POST",
                        body: bodyContent,
                        headers: headersList,
                    }
                );
                const data = await response.json();
                console.log(data);
                if (data.error) {
                    setErrorMessage(data.error);
                    setSubmit(false);
                } else {
                    setErrorMessage("Verified");
                    navigate("/signUp/success");
                }
            } catch (error) {
                abortController.abort(error);
            }
        }
        if (formData.code.length > 0) {
            verifyCode();
        }
    }, [submitCode]);

    const handleCode = (event) => {
        event.preventDefault();
        setSubmitCode((prev) => !prev);
    };

    // New code generation
    useEffect(() => {
        const abortController = new AbortController();
        async function sendCodeRequest() {
            try {
                const headersList = {
                    Accept: "*/*",
                    "Content-Type": "application/json",
                };
                const bodyContent = JSON.stringify({
                    data: {
                        account_email: `${formData.email}`,
                    },
                });
                const response = await fetch(
                    `${API_URL}accounts/send`,
                    {
                        method: "PUT",
                        body: bodyContent,
                        headers: headersList,
                    }
                );
                const data = await response.json();
                console.log(data);
                if (data.error) {
                    setErrorMessage(data.error);
                    setSubmit(false);
                } else {
                    setErrorMessage("Code sent! Check your email ^_^");
                }
            } catch (error) {
                abortController.abort(error);
            }
        }

        console.log("Request attempted");

        if (newCode === true) {
            sendCodeRequest();
            setNewCode(false);
            setNewCodeTime(Date.now() / 1000);
            console.log(Date.now() / 1000);
        }
    }, [newCode]);

    // Handler to send a new code
    const sendCode = (event) => {
        console.log("send code");
        const timePassed = Date.now() / 1000 - newCodeTime;
        if (timePassed > 10) {
            setNewCode((prev) => true);
            setNewCodeTime(Date.now() / 1000);
            console.log("Attempting to send");
        } else {
            setErrorMessage("wait 60 seconds");
        }
    };

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
                <h2 className="text-2xl font-medium leading-tight text-white">
                    Getting Started
                </h2>
                {page ? (
                    <EmailPage
                        formData={formData}
                        setFormData={setFormData}
                        handleSubmit={handleSubmit}
                    />
                ) : (
                    <CodePage
                        formData={formData}
                        setFormData={setFormData}
                        handleCode={handleCode}
                        sendCode={sendCode}
                    />
                )}
                <MessageConsole message={errorMessage} />
            </div>
            {/* Debugger Button */}
            <button
                onClick={() => setPage((prev) => !prev)}
                className="text-white"
            >
                Debugger
            </button>
        </div>
    );
}

export default SignUp;
