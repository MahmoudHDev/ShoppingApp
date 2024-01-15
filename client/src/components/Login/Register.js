import { useState } from "react"

export default function Register() {
    const [newUserInfo, setNewUserInfo] = useState({});

    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;

        setNewUserInfo(values => ({ ...values, [name]: value }));

        switch (true) {
            case value:

                break;

            default:
                break;
        }

        console.log(newUserInfo)
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

                    <div class="input-group">
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

                    <label>Password:</label>
                    <input type="password" className="form-control" aria-label="password" name="password"
                        aria-describedby="inputGroup-sizing-default" onChange={handleChange} value={newUserInfo.password || ""} />
                    <div id="passwordHelpBlock" class="form-text">
                        Your password must be 8-20 characters long, contain letters and numbers, and must not contain spaces, special characters, or emoji.
                    </div>

                    <label>Re-Enter Password:</label>
                    <input type="password" className="form-control" aria-label="passConf" name="passConf"
                        aria-describedby="inputGroup-sizing-default" onChange={handleChange} value={newUserInfo.passConf || ""} />

                    <label>Birthday:</label>
                    <input type="date" id="birthday" name="birthday" className="form-control" aria-label="birthday"
                        aria-describedby="inputGroup-sizing-default" onChange={handleChange} min="1980-01-01" max="2005-01-01" value={newUserInfo.birthday || "1980-01-01"} />

                    <select name="gender" id="" className="form-select form-select-md my-3">
                        <option selected>Select Gender</option>
                        <option value="male">Male</option>
                        <option value="female">Female</option>
                    </select>

                    <div className="d-grid">
                        <button type="submit" className="btn btn-primary mt-3" onSubmit={handleSubmit}> Register</button>

                    </div>

                    <div className="container my-4">
                        <p className="text-danger text-center">Error Message</p>
                    </div>
                </div>

            </form>

        </div>
    </>
};