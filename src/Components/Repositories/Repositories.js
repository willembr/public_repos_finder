import React from 'react';
import styles from './Repositories.module.scss';
import Repository from './Repository/Repository';

const Repositories = (props) => {

    const repositories = props.repos.map( repository => {
        return <Repository
                     title = { repository.title }
                     description = { repository.description }
                     creationDate = { repository.creationDate }
                     creationHour = { repository.creationHour }
                    />
    });
    
    return(
        <section className={styles.Repositories}>
            {repositories}
        </section>
    );
};

export default Repositories;