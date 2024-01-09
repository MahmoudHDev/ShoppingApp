
export default function Footer() { 
    const year = new Date().getFullYear();
    return <>
        <div className="container text-center">
        <p className="text-center text-body-secondary">Nile Shopping © 2023 Company, Inc. All rights reserved. {year}</p>
        </div>
    </>
}