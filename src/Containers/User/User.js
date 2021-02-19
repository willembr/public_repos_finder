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
            },
            error:false,
            loading:false
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
        // No component update when the user searches the same name
        if(this.props.location.pathname.replace('/','') === user) return;

        this.setState({ loading:true });

        const url = `users/${user}`;
        const updatedUserName = this.clearSearchField(this.state.userName);
        setTimeout(()=> {
            Axios.get(url)
             .then( response => {
                 this.setState({
                     userName:updatedUserName,
                     loading:false,
                     error:false
                 });
                 this.props.history.push(`/${response.data.login}`);
             })
             .catch( error => {
                 this.setState({
                     userName:updatedUserName,
                     loading:false,
                     error:true
                 });
                 this.props.history.push(`no_user`);
                 return error;
             });
        },1000);
        
    }

    clearSearchField(field){
        const updatedField = { ...field };
        updatedField.value = "";
        updatedField.valid = false;
        updatedField.touched = false;
        return updatedField;
    }

    render(){
        let errorMessage = "";

        if( this.state.userName.value !== '' && !this.state.userName.valid && this.state.userName.touched) 
        errorMessage = <p>GitHub username may only contain alphanumeric characters or single hyphens, and cannot begin or end with a hyphen!</p>

        if(this.state.error) 
        errorMessage = <p>We couldn't found any Github user, please try again!</p>

        return(
            <section className={styles.User}> 
                <UserSearch
                    input = { this.state.userName }
                    loading = { this.state.loading }
                    changed = { this.inputChangedHandler }
                    search = { this.searchUserHandler }
                />
                {errorMessage}
            </section>
        );
    }
};

export default User;