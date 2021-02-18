import React,{Component} from 'react';
import styles from './User.module.scss';

import UserSearch from '../../Components/UserSearch/UserSearch';
import Axios from '../../hoc/Axios';

class User extends Component{
    state={
            userName: {
                elementType:'input',
                elementConfig: {
                    type:'text',
                    placeholder:'GitHub username...'
                },
                value:'',
                validation:{
                    required:true,
                    regex:(/^[a-z\d](?:[a-z\d]|-(?=[a-z\d])){0,38}$/i)
                },
                valid:false,
                touched:false
            }
        } 

    checkValidation(value,rules){
            let isValid = true;

            if(!rules)
            {
                return true;
            }

            if(rules.required)
            {
                isValid = value !== '' && isValid;
            };

            if(rules.regex)
            {
                // Check if the input has the correct chars for the field
                 isValid =  rules.regex.test(value) && isValid;
            }

            return isValid;
    }    

    inputChangedHandler = (e) => {
        const updatedUserName = { ...this.state.userName };

        updatedUserName.value = e.target.value;
        updatedUserName.valid = this.checkValidation(updatedUserName.value, updatedUserName.validation);
        updatedUserName.touched = true;

        this.setState({
            userName:updatedUserName
        });
    }

    searchUserHandler = ( user ) => {

        const url = `users/${user}`;

        Axios.get(url)
             .then( response => {
                 console.log(response.data);
             })
             .catch( error => {
                 console.log(error);
             });
    }

    render(){
        return(
            <section className={styles.User}> 
            <UserSearch
                input = { this.state.userName }
                changed = { this.inputChangedHandler }
                search = { this.searchUserHandler }
                />
            </section>
        );
    }
};

export default User;