import React from 'react';
import Commit from './Commit/commit';
import styles from './commits.module.scss';

const Commits = (props) => {
    const headers = <div className={`${styles.CommitHeader} ${styles.Show} `}>
                        <Commit commit={Object.keys({...props.commits}[0])}/>
                    </div>;
    const commits = <div className={styles.CommitCollection}>
                        { props.commits.map( commit => <Commit commit={commit}/> )}
                    </div>;
    return(
        <section className={styles.Commits}>
            {headers}
            {commits}                    
        </section>
    );
};

export default Commits;