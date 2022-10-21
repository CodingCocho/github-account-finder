import  {FaHome} from 'react-icons/fa';
import {Link} from 'react-router-dom';


export const NotFound = () =>
{
    return (
        <>
            <div 
            className="hero flex flex-col"
            >
                <h1 className="text-8xl font-bold mb-8 mx-auto">
                    Oops!
                </h1>
                <p className="text-5x mb-8 mx-auto">
                    404 - Page not found!
                </p>
                <Link 
                className="btn btn-primary btn-lg mx-auto"
                to="/"
                >
                    <FaHome 
                    className='mr-2'
                    />
                    Back To home
                </Link>
            </div>
        </>
    )
}