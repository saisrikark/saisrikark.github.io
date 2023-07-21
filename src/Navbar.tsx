import './Navbar.css'

const Navbar = () => {
    return (
        <div className='Navbar'>
            <nav>
                <ul>
                    <li><a href='/'>🏠</a></li>
                    <li><a href='/about'>About</a></li>
                </ul>
            </nav>
        </div>
    );
};

export default Navbar;