import React from 'react';
import styles from './commitItem.module.scss';

const commitItem = (props) => {

    return(
        <div className={styles.CommitItem} {...props.attributes}>
            <p className={styles.CommitItem_Txt}>{props.children}</p>
        </div> 
    );
};

export default commitItem;