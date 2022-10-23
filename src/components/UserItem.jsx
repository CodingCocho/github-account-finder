import {Link} from 'react-router-dom';
import PropTypes from 'prop-types';

export const UserItem = (props) =>
{

    // Deconstruct the props 
    const {user: {login, avatar_url}} = props;

    return (
        <>

            {/* Hold the container for the UserItem Component */}
            <div 
            className="card shadow-md compact side bg-base-100"
            >

                {/* Hold the flexbox for the user's card*/}
                <div 
                className="flex-row items-center space-x-4 card-body"
                >

                    {/* Hold the Daisy UI avatar component */}
                    <div 
                    className="avatar">
                        <div 
                        className="rounded-full shadow w-14 h-14"
                        >
                            <img 
                            alt="profile-avatar" 
                            src={avatar_url} 
                            />
                        </div>
                    </div>

                    {/* Hold the flex container for the card information */}
                    <div>

                        {/* Hold the card title */}
                        <h2 
                        className="card-title"
                        >
                            {login}
                        </h2>

                        {/* Hold the Link component to go to the user's profile Route */}
                        <Link
                        className="text-base-content text-opacity-40"
                        to={`/user/${login}`}
                        >
                            Visit Profile
                        </Link>
                    </div>
                </div>
            </div>
        </>
    )
}

UserItem.propTypes =
{
    user: PropTypes.object.isRequired
}

