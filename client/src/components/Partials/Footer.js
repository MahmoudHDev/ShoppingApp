
export default function Footer() {
    const year = new Date().getFullYear();
    return <footer className="footer-sec">
        <p className="text-center text-body-secondary">Mahmoud Hashim</p>
        <p className="text-center text-body-secondary">Nile Shopping ©  {year} Company, Inc. All rights reserved.</p>
    </footer>
}