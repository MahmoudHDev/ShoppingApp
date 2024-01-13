import { useState } from 'react';
import '../../App.css';

export default function Login() {

    const [userInfo, setuserInfo] = useState({});

    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setuserInfo(values => ({ ...values, [name]: value }))
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        alert(`The name you entered was: ${userInfo}`)
    }

    return <>
        <div className="container d-flex justify-content-start" style={{ marginTop: "10rem" }}>
            <h1>Welcome Back! 😀</h1>
            <hr></hr>
            <div className="container col-4 ">
                <form action="/login" method="post">
                    <div className="mb-3">

                        <label for="exampleInputEmail1" className="form-label">Email Address</label>
                        <input type="email"
                            className="form-control"
                            id="exampleInputEmail1"
                            aria-describedby="emailHelp"
                            onChange={handleChange}
                            name="email"
                            value={userInfo.email || ""}
                            placeholder='example@example.com' />

                        <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                    </div>
                    <div className="mb-3">
                        <label for="exampleInputPassword1" className="form-label">Password</label>
                        <input type="password"
                            onChange={handleChange}
                            className="form-control"
                            id="exampleInputPassword1"
                            name="password"
                            value={userInfo.password || ""} />
                    </div>
                    <div className="mb-3 form-check">
                        <input type="checkbox" className="form-check-input" id="exampleCheck1" ></input>
                        <label className="form-check-label" for="exampleCheck1">Remember me</label>
                    </div>
                    <button type="submit" onSubmit={handleSubmit} className="btn btn-primary">Submit</button>
                </form>
            </div>
        </div>
    </>
}