import { useState } from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";

const LoginForm = () => {

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();

        const authObject = {
            "Project-ID": "5f564386-4459-4416-9845-44182a92e254",
            "User-Name": username,
            "User-Secret": password,
        }

        try {
            await axios.get("https://api.chatengine.io/chats", {
              headers: authObject,
            });

            localStorage.setItem("username", username);
            localStorage.setItem("password", password);

            window.location.reload();
        } catch (e) {
            setError("Invalid username or password");
            throw e;
        }
    }

    const handleUsernameOnChange = (e) => {
        setUsername(e.target.value);
    }

    const handlePasswordOnChange = (e) => {
        setPassword(e.target.value);
    }

    return(
        <div className={"wrapper"}>
            <div className={"form"}>
                <h1 className={"text-center mb-4 card-title text-white"}>JavaScript Mastery's Chat Application</h1>
                <form onSubmit={handleSubmit}>
                    <input className={"form-control border-3 mb-3 rounded-pill"} type="text" placeholder={"Input username"} value={username} onChange={handleUsernameOnChange} required />
                    <input className={"form-control border-3 mb-3 rounded-pill"} type="password" placeholder={"Input password"} value={password} onChange={handlePasswordOnChange} required />
                    <div align={"center"}>
                        <button type={"submit"} className={"btn btn-outline-light rounded-pill px-5 mt-2"}>
                            LOGIN
                        </button>
                        <h3 className={"text-danger"}>{error}</h3>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default LoginForm;