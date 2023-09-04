import './Header.css'
const nav_links = [
    {
        path: '#home',
        display: 'Home'
    },
    {
        path: '#About',
        display: 'About'
    },
    {
        path: '#service',
        display: 'Service'
    },
    {
        path: '#projects',
        display: 'Projects'
    },
    {
        path: '#blog',
        display: 'Blog'
    },
]

function Header() {
    return ( <>
    <header className="header">
        <div className="container">
            <div className="nav_wrapper">
                <div className="logo">
                    <h2>Digency</h2>
                </div>

{/* ============ navigation ===============*/}

                <div className="navigation">
                    <ul className="menu">
                        {
                            nav_links.map((item, index)=> (
                                <li className="menu_item"><a href={item.path} className="menu_link">{item.display}</a></li>
                            ))
                        }
                    </ul>
                </div>

                {/* ============ light mode ===============*/}

                <div className="light_mode">
                    <span>
                        <i className="ri-sun-line"></i> Light Mode
                    </span>
                </div>
            </div>
        </div>
    </header>
    </> );
}

export default Header;