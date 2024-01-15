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

                    <label>Password:</label>
                    <input type="password" className="form-control" aria-label="password" name="password"
                        aria-describedby="inputGroup-sizing-default" onChange={handleChange} value={newUserInfo.password || ""} />

                    <label>Re-Enter Password:</label>
                    <input type="password" className="form-control" aria-label="passConf" name="passConf"
                        aria-describedby="inputGroup-sizing-default" onChange={handleChange} value={newUserInfo.passConf || ""} />

                    <label>Birthday:</label>
                    <input type="date" id="birthday" name="birthday" className="form-control" aria-label="birthday"
                        aria-describedby="inputGroup-sizing-default" onChange={handleChange} min="1980-01-01" max="2005-01-01" value={newUserInfo.birthday || "1980-01-01"} />

                    <button type="submit" className="btn btn-primary mt-3" onSubmit={handleSubmit}> Register</button>
                </div>

            </form>

        </div>
    </>
};