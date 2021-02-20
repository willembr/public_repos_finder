import React from 'react';
import styles from './Repositories.module.scss';
import Repository from './Repository/Repository';

const Repositories = (props) => {
    let repositories, errorMessage = "";
    if(!props.noReps && !props.noUser)
        repositories = props.repos.map( repository => {
                            return <Repository
                                        key = { repository.title }
                                        title = { repository.title }
                                        description = { repository.description }
                                        creationDate = { repository.creationDate }
                                        creationHour = { repository.creationHour }
                                        clicked = { () => props.clicked(repository.title) }
                                    />
                                    });

    if(props.noRepos) errorMessage = <p className={styles.ErrorMessage}>We were unable to find any repositories for this User</p>;

    return(
        <section className={styles.Repositories}>
            {repositories}
            {errorMessage}
        </section>
    );
};

export default Repositories;