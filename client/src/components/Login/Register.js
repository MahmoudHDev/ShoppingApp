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

                    <div class="input-group mb-3">
                        <input type="text" class="form-control" placeholder="First name" aria-label="fName" name="fName" onChange={handleChange} value={newUserInfo.fName || ""} />
                        <span class="input-group-text">  </span>
                        <input type="text" class="form-control" placeholder="Last name" aria-label="lName" name="lName" onChange={handleChange} value={newUserInfo.lName || ""} />
                    </div>

                    <label>Username:</label>
                    <input type="text" className="form-control" aria-label="username"
                        aria-describedby="inputGroup-sizing-default" onChange={handleChange} name="username" value={newUserInfo.username || ""} />

                    <label>Email address:</label>
                    <input type="email" className="form-control" aria-label="email"
                        aria-describedby="inputGroup-sizing-default" name="email" onChange={handleChange} value={newUserInfo.email || ""} />

                    <label>Password: <span className="text-body-secondary">{`( at least 8 characters )`}</span></label>
                    <input type="password" className="form-control" aria-label="password" name="password"
                        aria-describedby="inputGroup-sizing-default" onChange={handleChange} value={newUserInfo.password || ""} />

                    <label>Re-Enter Password:</label>
                    <input type="password" className="form-control" aria-label="passConf" name="passConf"
                        aria-describedby="inputGroup-sizing-default" onChange={handleChange} value={newUserInfo.passConf || ""} />

                    <label>Birthday:</label>
                    <input type="date" id="birthday" name="birthday" className="form-control" aria-label="birthday"
                        aria-describedby="inputGroup-sizing-default" onChange={handleChange} min="1980-01-01" max="2005-01-01" value={newUserInfo.birthday || "1980-01-01"} />
                    <label>Gender</label>
                    <input type="checkbox" name="gender"/>

                    <button type="submit" className="btn btn-primary mt-3" onSubmit={handleSubmit}> Register</button>
                    <div className="container my-4">
                    <p className="text-danger text-center">Error Message</p>
                    </div>
                </div>

            </form>

        </div>
    </>
};