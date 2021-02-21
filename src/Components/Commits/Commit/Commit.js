import React from 'react';
import styles from './commit.module.scss';
import CommitItem from './commitItem/commitItem';
import { setCapitalLetter } from '../../../Functions/Output';

const Commit = (props) => {
    let commit_item;
     
    if(Array.isArray(props.commit)){
        commit_item = props.commit.map( item => <CommitItem>{setCapitalLetter(item)}</CommitItem> );     
    } else { 
        commit_item = <div className={styles.Commit}>
                {Object.keys(props.commit).map( item => <CommitItem attributes={{'data-header':setCapitalLetter(item)}}>{props.commit[item]}</CommitItem> )}
        </div>
         
    }

    return(
        <>
            {commit_item}
        </>
    );
};

export default Commit;