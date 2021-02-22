import React,{Component} from 'react';
import { connect } from 'react-redux';
import * as actionCreators from '../../Store/Actions/Index';
import Repositories from '../../Components/Repositories/Repositories';
import Spinner from '../../Components/UI/Spinner/Spinner';


class Repos extends Component{


    componentDidMount(){ this.getRepos() }
    componentDidUpdate(){ if(this.newSearch()) this.getRepos() }

    newSearch(){ 
        if(!this.props.user) return false;
        return this.props.user.userName !== this.props.match.params.user;
    }

    getRepos = () => {
            const userName = this.props.user ? this.props.user.userName : this.props.match.params.user;;
            this.props.onSetRepos(userName); 
    }


    repositoryClickHandler = (repository) => {
        this.props.history.push(`${this.props.match.url}/${repository}`);
    }

    render(){
        let content = <Spinner/>;
        if(this.props.repos && !this.props.loading)
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
        user: state.userRed.user ? state.userRed.user : null,
        repos: state.reposRed.repos,
        loading: state.reposRed.loading
    };
};

const mapActionsToProps = dispatch => {
    return{
        onSetRepos: (user) => dispatch(actionCreators.getRepos(user))
    }
}

export default connect(mapStateToProps, mapActionsToProps)(Repos);