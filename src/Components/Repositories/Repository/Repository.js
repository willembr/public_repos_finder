import React from 'react';
import styles from './Repository.module.scss';

const Repository = (props) => {

    const title = <h1 className={styles.Title}>{props.title}</h1>;
    const description = props.description ? <p className={styles.Description}>{ props.description}</p> :
                                            <p className={styles.Description}><i>No description mentioned!</i></p>
    const creationDate = <p>Created on {props.creationDate} {props.creationHour}</p>

    return(
        <article className={styles.Repository} onClick={props.clicked}>
            {title}
            {description}
            <div className={styles.CreationDate}>
                {creationDate}
            </div>
        </article>
    )};

export default Repository;