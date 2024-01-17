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
                        <div class="col-md-6">
                            <label for="firstName" class="form-label" >First Name</label>
                            <input type="text" class="form-control" id="firstName" placeholder="John" aria-label="fName" name="fName" onChange={handleChange} value={newUserInfo.fName || ""} />
                        </div>
                        <div class="col-md-6">
                            <label for="lastName" class="form-label">Last Name</label>
                            <input type="text" class="form-control" id="lastName" placeholder="Smith" aria-label="lName" name="lName" onChange={handleChange} value={newUserInfo.lName || ""} />
                        </div>
                    </div>



                    <div className="col">
                        <label className="form-label">Username:</label>
                        <input type="text" className="form-control" aria-label="username"
                            aria-describedby="inputGroup-sizing-default" onChange={handleChange} name="username" value={newUserInfo.username || ""} />
                    </div>

                    <div className="col">
                        <label className="form-label">Email address:</label>
                        <input type="email" className="form-control" aria-label="email"
                            aria-describedby="inputGroup-sizing-default" name="email" onChange={handleChange} value={newUserInfo.email || ""} />
                    </div>

                    <div className="col">
                        <label className="form-label">Password:</label>
                        <input type="password" className="form-control" aria-label="password" name="password"
                            aria-describedby="inputGroup-sizing-default" onChange={handleChange} value={newUserInfo.password || ""} />
                        <div id="passwordHelpBlock" class="form-text">
                            Your password must be 8-20 characters long, contain letters and numbers, and must not contain spaces, special characters, or emoji.
                        </div>
                    </div>

                    <div className="col">
                        <label className="form-label">Re-Enter Password:</label>
                        <input type="password" className="form-control" aria-label="passConf" name="passConf"
                            aria-describedby="inputGroup-sizing-default" onChange={handleChange} value={newUserInfo.passConf || ""} />
                    </div>


                    <div className="input-group d-flex form-gr">
                        <div className="col-xl-5">
                            <label className="form-label">Date of Birth:</label>
                            <input type="date" id="birthday" name="birthday" className="form-control" aria-label="birthday"
                                aria-describedby="inputGroup-sizing-default" onChange={handleChange} min="1980-01-01" max="2005-01-01" value={newUserInfo.birthday || "1980-01-01"} />
                        </div>

                        <div className="col-xl-5">
                            <label className="form-label">Gender:</label>
                            <select name="gender" id="" className="form-select form-select-md">
                                <option selected>Select gender</option>
                                <option value="male">Male</option>
                                <option value="female">Female</option>
                            </select>
                        </div>
                    </div>


                    <div className="d-grid">
                        <button type="submit" className="btn btn-primary mt-3 reg-btn" onSubmit={handleSubmit}> Register</button>
                    </div>

                    <div className="container my-4">
                        <p className="text-danger text-center">Error Message</p>
                    </div>
                </div>

            </form>

        </div>
    </>
};