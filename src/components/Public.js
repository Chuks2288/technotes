import { Link } from 'react-router-dom'

const Public = () => {
    const content = (
        <section className="public">
            <header>
                <h1>Welcome to <span className="nowrap">Chuks D. Repairs!</span></h1>
            </header>
            <main className="public__main">
                <p>Located in Benin City Edo State, Chuks D. Repairs  provides a trained staff ready to meet your tech repair needs.</p>
                <address className="public__addr">
                    Chuks D. Repairs<br />
                    5 Benin City<br />
                    Edo State<br />
                    <a href="tel:+2347064923498">+234 706 492 3498</a>
                </address>
                <br />
                <p>Owner: Dumbiri Chuks</p>
            </main>
            <footer className='footer'>
                <footer className='footer__login'>
                    <Link to="/login">Employee Login</Link>
                </footer>
            </footer>
        </section>

    )
    return content
}
export default Public