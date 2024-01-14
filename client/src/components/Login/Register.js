import { useRef, useState } from "react"

export default function Register() {
    const [newUserInfo, setNewUserInfo] = useState({});
    const [errorMessage, setErrMsg] = useState("");


    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;

        setNewUserInfo(values => ({ ...values, [name]: value }));


        console.log(newUserInfo);

        switch (true) {
            case newUserInfo.username.length <= 6:
                // Show the label and inform the user with the error
                setErrMsg("username is short");
                break;
            case newUserInfo.password !== newUserInfo.passConfirmation:
                setErrMsg("password isn't match");
                break;

            default:
                setErrMsg("");
                break;
        }
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(newUserInfo);
    }
    return <>
        <div className="container" style={{ marginTop: "7rem" }}>
            <h1>Register</h1>
            <hr></hr>
            <form action="/register" method="post">
                <div className="container col-6">

                    <label>Username:</label>
                    <input type="text" className="form-control" aria-label="Sizing example input"
                        aria-describedby="inputGroup-sizing-default" onChange={handleChange} name="username" value={newUserInfo.username || ""} />

                    <label>Email address:</label>
                    <input type="email" className="form-control" aria-label="Sizing example input"
                        aria-describedby="inputGroup-sizing-default" name="email" onChange={handleChange} value={newUserInfo.email || ""} />

                    <label>Password:</label>
                    <input type="password" className="form-control" aria-label="Sizing example input"
                        aria-describedby="inputGroup-sizing-default" onChange={handleChange} name="password" value={newUserInfo.password || ""} />

                    <label>Re-Enter Password:</label>
                    <input type="password" className="form-control" aria-label="Sizing example input"
                        aria-describedby="inputGroup-sizing-default" onChange={handleChange} name="passConfirmation" value={newUserInfo.passConfirmation || ""} />

                    <label>Birthday:</label>
                    <input type="date"
                        id="birthday"
                        name="birthday"
                        className="form-control"
                        aria-label="Sizing example input"
                        aria-describedby="inputGroup-sizing-default"
                        min="1980-01-01"
                        max="1999-12-31"
                        onChange={handleChange} value={newUserInfo.birthday || ""}
                    />
                    <button type="submit" className="btn btn-primary mt-3" onSubmit={handleSubmit}> Register</button>


                    <p className="mt-1 text-center error-msg" >{errorMessage}</p>
                </div>

            </form>

        </div>
    </>
};