import {FaGithub} from 'react-icons/fa';
import {Link} from 'react-router-dom';
import PropTypes from 'prop-types';

export const Navbar = ({title}) =>
{

    return(
        <>
            
            {/* Hold the container for the Navbar component */}
            <nav
            className='navbar mb-12 shadow-lg bg-neutral text-neutral-content'
            >

                {/* Hold the container for the sections of the Navbar component */}
                <div 
                className="container mx-auto"
                >

                    {/* Hold a flexbox for the application's logo and links*/}
                    <div 
                    className="flex-none px-2 mx-2"
                    >

                        {/* Hold the logo for the Home route */}
                        <FaGithub
                        className="inline pr-2 text-3xl"
                        />

                        {/* Hold the Link component for the Home route */}
                        <Link
                        className="text-lg font-bold align-middle"
                        to="/"
                        >
                            {title}
                        </Link>
                    </div>

                    {/* Hold a flexbox for the Home and About routes */}
                    <div 
                    className="flex-1 px-2 mx-2"
                    >

                        {/* Hold a flexbox that is aligned to the end of the parent flexbox*/}
                        <div 
                        className="flex justify-end"
                        >

                            {/* Hold the Link component for the Home route */}
                            <Link 
                            className="btn btn-ghost btn-sm rounded-btn"
                            to="/"
                            >
                                Home
                            </Link>

                            {/* Hold the Link component for the About route */}
                            <Link 
                            className="btn btn-ghost btn-sm rounded-btn"
                            to="/about"
                            >
                                About
                            </Link>
                        </div>
                    </div>
                </div>
            </nav>
        </>
    )
}

Navbar.defaultProps =
{
    title: 'Github Finder'
}

Navbar.propTypes =
{
    title: PropTypes.string
}