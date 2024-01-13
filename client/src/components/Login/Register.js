import { useState } from "react"

export default function Register() {
    const [newUserInfo, setNewUserInfo] = useState({});

    const handleChange = (event)=> {
        const name = event.target.name;
        const value = event.target.value;

        setNewUserInfo(values => ({...values, [name]: value}));
    }
    
    const handleSubmit = (event)=> {
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
                    <input type="text" class="form-control" aria-label="Sizing example input"
                        aria-describedby="inputGroup-sizing-default" onChange={handleChange} name="username" value={newUserInfo.username} />

                    <label>Email address:</label>
                    <input type="email" class="form-control" aria-label="Sizing example input"
                        aria-describedby="inputGroup-sizing-default" name="email" onChange={handleChange} value={newUserInfo.email} />

                    <label>Password:</label>
                    <input type="password" class="form-control" aria-label="Sizing example input"
                        aria-describedby="inputGroup-sizing-default" onChange={handleChange} value={newUserInfo.password} />

                    <label>Re-Enter Password:</label>
                    <input type="password" class="form-control" aria-label="Sizing example input"
                        aria-describedby="inputGroup-sizing-default" onChange={handleChange} value={newUserInfo.password} />

                    <label for="birthday">Birthday:</label>
                    <input type="date" id="birthday" name="birthday" class="form-control" aria-label="Sizing example input"
                        aria-describedby="inputGroup-sizing-default" onChange={handleChange} value={newUserInfo.birthday} />
                <button type="submit" className="btn btn-primary mt-3" onSubmit={handleSubmit}> Register</button>
                </div>

            </form>

        </div>
    </>
};