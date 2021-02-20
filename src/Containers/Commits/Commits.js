import React,{Component} from 'react';
import { connect } from 'react-redux';
import * as actionCreators from '../../Store/Actions/Index';

class Commits extends Component{
    componentDidMount(){
        const params = this.props.match.params;
        this.props.onSetCommits(params.user,params.repos);
    }
    render(){
        console.log(this.props.commits);
        return(
            <>
                
            </>
        );
    }
};

const mapStateToProps = state => {
    return{
        userName : state.userRed.user.userName,
        commits : state.commitsRed.commits
    }
}

const mapActionsToProps = dispatch => {
    return {
        onSetCommits: (user,repos) => dispatch(actionCreators.getCommits(user,repos))
    }
}

export default connect(mapStateToProps,mapActionsToProps)(Commits);