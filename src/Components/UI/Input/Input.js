import React from 'react';
import styles from './Input.module.scss';

const Input = (props) => {
    let inputElement = null;

    switch(props.elementType){
        case('input'):
                    inputElement = <input 
                               className={styles.InputElement} 
                               {...props.config} 
                               value={props.value}
                               onChange = {props.changed}
                               />;
                    break;
        case('select'):
                     const options = props.options.map( option => {
                                        return <option key={option.value} value={option.value}>{option.displayValue}</option>;
                                    })
                      inputElement = <select 
                              className={styles.InputElement}  
                              value={props.value}
                              onChange = {props.changed}
                              >
                            {options}
                            </select>;
                    break;
        case('textarea'):
                        inputElement = <textarea 
                                className={styles.InputElement} 
                                {...props.config} 
                                value={props.value}
                                onChange = {props.changed}
                                />;
                    break;
        default:
                        inputElement = <input 
                                className={styles.InputElement} 
                                {...props.config} 
                                value={props.value}
                                onChange = {props.changed}
                                />;
                    break;
    }

    return(
        <div className={styles.Input}>
            <label>{props.label}</label>
            {inputElement}
        </div>
    );
};

export default Input;