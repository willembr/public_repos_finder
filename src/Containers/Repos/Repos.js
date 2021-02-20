import React,{Component} from 'react';
import { connect } from 'react-redux';
import * as actionCreators from '../../Store/Actions/Index';
import Repositories from '../../Components/Repositories/Repositories';


class Repos extends Component{


    componentDidMount(){ this.getRepos() }
    componentDidUpdate(){ if(this.newSearch()) this.getRepos() }

    newSearch(){ 
        if(this.props.user.userName === '') return false;
        return this.props.user.userName !== this.props.match.params.user;
        }

    getRepos = () => {
            this.props.onSetRepos(this.props.user.userName); 
    }


    repositoryClickHandler = (repository) => {
        this.props.history.push(`${this.props.match.url}/${repository}`);
    }

    render(){
        let content = "";
        if(this.props.user.userName === this.props.match.params.user && this.props.repos)
        content = <Repositories 
                             repos={ this.props.repos } 
                             noRepos = { this.props.repos.length <= 0 }
                             clicked = { this.repositoryClickHandler } 
                             />;
        
        return(
            <>
            {content}
            </>
        );
    }
};

const mapStateToProps = state => {
    return{
        user: state.userRed.user,
        repos: state.reposRed.repos
    };
};

const mapActionsToProps = dispatch => {
    return{
        onSetRepos: (user) => dispatch(actionCreators.getRepos(user))
    }
}

export default connect(mapStateToProps, mapActionsToProps)(Repos);