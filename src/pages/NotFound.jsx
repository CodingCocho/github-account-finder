import  {FaHome} from 'react-icons/fa';
import {Link} from 'react-router-dom';

export const NotFound = () =>
{
    return (
        <>

            {/* Hold the 404 content  */}
            <div 
            className="hero flex flex-col"
            >\

                {/* Display appropriate 404 text*/}
                <h1 className="text-8xl font-bold mb-8 mx-auto">
                    Oops!
                </h1>
                <p className="text-5x mb-8 mx-auto">
                    404 - Page not found!
                </p>

                {/* Hold the link to go back the Home route */}
                <Link 
                className="btn btn-primary btn-lg mx-auto"
                to="/"
                >

                    {/* Hold the icon to signify that this is the Home route */}
                    <FaHome 
                    className='mr-2'
                    />
                    Back To home
                </Link>
            </div>
        </>
    )
}