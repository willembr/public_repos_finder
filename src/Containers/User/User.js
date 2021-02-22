import React,{Component} from 'react';
import styles from './User.module.scss';
import {Redirect} from 'react-router-dom';

import UserSearch from '../../Components/UserSearch/UserSearch';
import { connect } from 'react-redux';
import * as actionCreators from '../../Store/Actions/Index';


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
        const updatedUserName = this.clearSearchField(this.state.userName);
        this.setState({ userName: updatedUserName });
        this.props.onGetUser(user);
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
         errorMessage = "GitHub username may only contain alphanumeric characters or single hyphens, and cannot begin or end with a hyphen!";

         if(this.props.error) errorMessage = "We couldn't found any Github user, please try again!"

         const redirect = this.props.user ? <Redirect to={`/${this.props.user.userName}`} /> : null;
         
        return(
            <section className={styles.User}> 
                <UserSearch
                    input = { this.state.userName }
                    changed = { this.inputChangedHandler }
                    search = { this.searchUserHandler }
                />
                <p className={styles.Error}>
                {errorMessage}
                {redirect}
                </p>
            </section>
        );
    }
};

const mapStateToProps = state => {
    return {
        user: state.userRed.user,
        lastUserName: state.userRed.lastUserName,
        error: state.userRed.error
    }
}

const mapActionsToProps = dispatch => {
    return{
        onGetUser: (user) => dispatch( actionCreators.getUser(user))
    }
}

export default connect(mapStateToProps, mapActionsToProps)(User);