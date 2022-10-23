import {FaCodepen,FaStore,FaUserFriends,FaUsers} from 'react-icons/fa'
import {useContext, useEffect} from 'react';
import {Link, useParams} from 'react-router-dom';
import {RepoList} from '../components/RepoList';
import {Spinner} from '../components/Spinner';
import GithubContext from '../context/GithubContext';

export const User = () =>
{

    // Deconstruct the GithubProvider using the React Context API
    const {getUser, getUserRepos, loading, repos, user} = useContext(GithubContext);

    // Hold the useParams hook 
    const params = useParams();
    
    // Deconstruct the user object
    const {
        name,
        type,
        avatar_url,
        location,
        bio,
        blog,
        twitter_username,
        login,
        html_url,
        followers,
        following,
        public_repos,
        public_gists,
        hireable,
      } = user;


    // Fetch and hold the data by rendering the component again using the useEffect hook
    useEffect(() =>
    {

        // Call the GithubContext functions to load the state
        getUser(params.login);
        getUserRepos(params.login);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])


    // Render our Spinner component to show the first lifecycle of the component when
    // the state has no data of the current user
    if(loading)
    {
        return <Spinner />
    }

    // Hold the users website URL
    const websiteUrl = blog?.startsWith('http') ? blog : 'https://' + blog;
    
    return (
        <>

                {/* Hold the container for User page */}
                <div 
                className='w-full mx-auto lg:w-10/12'
                >
                    
                    {/*  Hold the container for the Link component*/}
                    <div 
                    className='mb-4'
                    >
                        
                        {/* Hold the Link component to go back to the Home route */}
                        <Link 
                        className='btn btn-ghost'
                        to='/' 
                        >
                        Back To Search
                        </Link>
                    </div>

                {/* Hold grid container for the user profile information */}
                <div 
                className='grid grid-cols-1 xl:grid-cols-3 lg:grid-cols-3 md:grid-cols-3 mb-8 md:gap-8'
                >

                    {/* Hold the card for the image */}
                    <div 
                    className='custom-card-image mb-6 md:mb-0'
                    >

                        {/* Hold container for the profile image */}
                        <div 
                        className='rounded-lg shadow-xl card image-full
                        '>

                            {/* Hold the shape of the image container */}
                            <figure>
                                
                                {/* Hold the image of the user */}
                                <img 
                                alt='avatar' 
                                src={avatar_url} 
                                />
                            </figure>
                            
                            {/* Hold the container for the text displayed on the image*/}
                            <div 
                            className='card-body justify-end'
                            >
                                
                                {/* Hold the user's name */}
                                <h2 
                                className='card-title mb-0'
                                >
                                    {name}
                                </h2>
                                
                                {/* Hold the user's login name */}
                                <p 
                                className='flex-grow-0'
                                >
                                    {login}
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Hold the columns for the profile information */}
                    <div 
                    className='col-span-2'
                    >
                        
                        {/* Hold the container for the profile information text */}
                        <div 
                        className='mb-6'
                        >
                            
                            {/* Hold the name of the user */}
                            <h1 
                            className='text-3xl card-title'
                            >
                                {name}
                                
                                {/* Hold the user's badges */}
                                <div 
                                className='ml-2 mr-1 badge badge-success'
                                >
                                    {type}
                                </div>
                                
                                {/* Render the hireable badge if the user is hireable */}
                                {hireable && (
                                    
                                    // Hold the badge 
                                    <div 
                                    className='mx-1 badge badge-info'
                                    >
                                        Hireable
                                    </div>
                                )}
                            </h1>
                            
                            {/* Hold the biography text of the user*/}
                            <p>
                                {bio}
                            </p>
                            
                            {/* Hold the container for the button to go the user's Github profile */}
                            <div 
                            className='mt-4 card-actions'
                            >

                                {/*  Hold the link to the user's Github profile */}
                                <a
                                href={html_url}
                                target='_blank'
                                rel='noreferrer'
                                className='btn btn-outline'
                                >
                                    Visit Github Profile
                                </a>
                            </div>
                        </div>

                        {/* Hold the container for the demographics of the user */}
                        <div 
                        className='w-full rounded-lg shadow-md bg-base-100 stats'
                        >
                            
                            {/* Render if the user has a location field */}
                            {location && (
                            
                            // Hold the container for the stat
                            <div 
                            className='stat'
                            >
                                
                                {/* Hold the label of the stat */}
                                <div 
                                className='stat-title text-md'
                                >
                                    Location
                                </div>
                                
                                {/* Hold the information of the stat */}
                                <div 
                                className='text-lg stat-value'
                                >
                                    {location}
                                </div>
                            </div>
                            )}
                            
                            {/* Render if the user has blog field */}
                            {blog && (
                            <div 
                            className='stat'
                            >
                                <div 
                                className='stat-title text-md'
                                >
                                    Website
                                </div>
                                <div 
                                className='text-lg stat-value'
                                >
                                    
                                    {/* Hold the link for the user's website */}
                                    <a 
                                    href={websiteUrl} 
                                    rel='noreferrer'
                                    target='_blank' 
                                    >
                                        {websiteUrl}
                                    </a>
                                </div>
                            </div>
                            )}
                            
                            {/* Render if the user has a twitter field */}
                            {twitter_username && (
                            <div 
                            className='stat'
                            >
                                <div 
                                className='stat-title text-md'
                                >
                                    Twitter
                                </div>
                                <div 
                                className='text-lg stat-value'
                                >
                                    <a
                                    href={`https://twitter.com/${twitter_username}`}
                                    target='_blank'
                                    rel='noreferrer'
                                    >
                                        {twitter_username}
                                    </a>
                                </div>
                            </div>
                            )}
                        </div>
                    </div>
                </div>

                {/* Hold more stats of the user */}
                <div 
                className='w-full py-5 mb-6 rounded-lg shadow-md bg-base-100 stats'
                >
                    
                    {/* Hold the container for the stat */}
                    <div 
                    className='stat'
                    >
                        
                        {/* Hold the container for the icon*/}
                        <div 
                        className='stat-figure text-secondary'
                        >

                            {/* Hold the icon for the stat */}
                            <FaUsers 
                            className='text-3xl md:text-5xl' 
                            />
                        </div>
                        
                        {/* Hold the stat name */}
                        <div 
                        className='stat-title pr-5'
                        >
                            Followers
                        </div>
                        
                        {/* Hold the data for the stat */}
                        <div 
                        className='stat-value pr-5 text-3xl md:text-4xl'
                        >
                            {followers}
                        </div>
                    </div>
                    <div 
                    className='stat'
                    >
                        <div 
                        className='stat-figure text-secondary'
                        >
                            <FaUserFriends 
                            className='text-3xl md:text-5xl' 
                            />
                        </div>
                        <div 
                        className='stat-title pr-5'
                        >
                            Following
                        </div>
                        <div 
                        className='stat-value pr-5 text-3xl md:text-4xl'
                        >
                            {following}
                        </div>
                    </div>
                    <div 
                    className='stat'
                    >
                        <div 
                        className='stat-figure text-secondary'
                        >
                            <FaCodepen 
                            className='text-3xl md:text-5xl' 
                            />
                        </div>
                        <div 
                        className='stat-title pr-5'
                        >
                            Public Repos
                        </div>
                        <div 
                        className='stat-value pr-5 text-3xl md:text-4xl'
                        >
                            {public_repos}
                        </div>
                    </div>
                    <div 
                    className='stat'
                    >
                        <div 
                        className='stat-figure text-secondary'
                        >
                            <FaStore 
                            className='text-3xl md:text-5xl' 
                            />
                        </div>  
                        <div 
                        className='stat-title pr-5'
                        >
                            Public Gists
                        </div>
                        <div 
                        className='stat-value pr-5 text-3xl md:text-4xl'
                        >
                            {public_gists}
                        </div>
                    </div>
                </div>

                {/* Hold the RepoList component which renders RepoItem component of
                the 10 latest repos of the user */}
                <RepoList 
                repos={repos} 
                />
    </div>
        </>
    )
}