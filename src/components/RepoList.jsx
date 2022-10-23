import PropTypes from 'prop-types';
import {RepoItem} from './RepoItem';

export const RepoList = (props) =>
{

    // Deconstruct the props
    const {repos} = props;

    return (
        <>

            {/* Hold the container for the RepoList component */}
            <div 
            className='rounded-lg shadow-lg card bg-base-100'
            >
               
               {/* Hold the card that is used to hold the RepoItems rendered */}
                <div 
                className='card-body'
                >
                    
                    {/* Hold the title of the results searched */}
                    <h2 
                    className='text-3xl my-4 font-bold card-title'
                    >
                        Latest Repositories
                    </h2>
                    
                    {/* Map the repositories passed in */}
                    {repos.map((repo) => (
                        
                        // Render a RepoItem component for each repo 
                        <RepoItem 
                        key={repo.id} 
                        repo={repo} 
                        />
                    ))}
                </div>
            </div>
        </>
    )
}

RepoList.propTypes = {
    repos: PropTypes.array.isRequired
}