import React from 'react';
import Input from '../UI/Input/Input';
import Spinner from '../UI/Spinner/Spinner';
import Commit from './Commit/commit';
import styles from './commits.module.scss';

const Commits = (props) => {
    const title = <div className={styles.CommitTitle}>
                        <h1 className="SectionTitle">Commits</h1>
                        <Input 
                            elementType = { props.input.repositories.elementType }
                            value = { props.value }
                            options = { props.repos}
                            changed = { props.changed }
                        />
                    </div>
    let content = <Spinner/>;
    if(!props.loading){
        content = <>
                        <div className={styles.CommitHeader} >
                                <Commit commit={Object.keys({...props.commits}[0])}/>
                        </div>
                        <div className={styles.CommitCollection}>
                                 { props.commits.map( commit => <Commit commit={commit}/> )}
                        </div>
                    </>;
    } 
    
    return(
        <section className={styles.Commits}>
            {title}
            {content}                    
        </section>
    );
};

export default Commits;