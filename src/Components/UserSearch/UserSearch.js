import React from 'react';
import Input from '../UI/Input/Input';
import styles from './UserSearch.module.scss';

const UserSearch = (props) => {
    const input = <Input
                    elementType = { props.input.elementType }
                    config = { props.input.elementConfig }
                    label = { props.input.label }
                    value = { props.input.value }
                    changed = { props.changed }
                    />;
    const submit = <button 
                        disabled={ !props.input.valid }
                        onClick = { props.Search }
                        >Search</button>;
    return(
        <div className={styles.UserSearch}>
             <div className={styles.Search}>
             {input}
             {submit}
             </div>
        </div>
    );
};

export default UserSearch;