import {FaEye,FaInfo,FaLink,FaStar,FaUtensils} from 'react-icons/fa';
import PropTypes from 'prop-types';

export const RepoItem = (props) =>
{

    // Deconstruct the props
    const {repo} = props;
    
    // Deconstruct the repo object
    const {
        name,
        description,
        html_url,
        forks,
        open_issues,
        watchers_count,
        stargazers_count,
    } = repo;

    return (
        <>

            {/* Hold the container for the RepoItem component */}
            <div 
            className='mb-2 rounded-md card bg-base-200 hover:bg-base-300'
            >
                
                {/* Hold the card body of the RepoItem component */}
                <div 
                className='card-body'
                >
                    
                    {/* Hold text for the Github repository link */}
                    <h3 
                    className='mb-2 text-xl font-semibold'
                    >
                        
                        {/* Hold the link for the Github repository */}
                        <a 
                        href={html_url}
                        >
                            
                            {/* Hold the link icon for link to the Github repository */}
                            <FaLink 
                            className='inline mr-1' /> 
                            {name}
                        </a>
                    </h3>
                    
                    {/* Hold the repository's information*/}
                    <p 
                    className='mb-3'
                    >
                        {description}
                    </p>

                    {/* Hold the container for the badges */}
                    <div>
                    
                        {/* Hold the container for the badge */}
                        <div 
                        className='mr-2 badge badge-info badge-lg'
                        >

                            {/* Hold the icon for this badge */}
                            <FaEye 
                            className='mr-2' 
                            /> 
                            {watchers_count}
                        </div>
                        <div 
                        className='mr-2 badge badge-success badge-lg'
                        >
                            <FaStar 
                            className='mr-2' 
                            /> 
                            {stargazers_count}
                        </div>
                        <div 
                        className='mr-2 badge badge-error badge-lg'
                        >
                            <FaInfo 
                            className='mr-2' 
                            /> 
                            {open_issues}
                        </div>
                        <div 
                        className='mr-2 badge badge-warning badge-lg'
                        >
                            <FaUtensils 
                            className='mr-2' 
                            /> 
                            {forks}
                        </div>
                    </div>
                </div>
            </div>
        </>
    )   
}

RepoItem.propTypes = {
    repo: PropTypes.object.isRequired,
}