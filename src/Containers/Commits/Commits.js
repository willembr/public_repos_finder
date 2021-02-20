import React,{Component} from 'react';
import { connect } from 'react-redux';
import * as actionCreators from '../../Store/Actions/Index';

class Commits extends Component{
    componentDidMount(){
        this.props.onSetCommits();
    }
    render(){
        return(
            <div>
                <p>commits</p>
            </div>
        );
    }
};

const mapStateToProps = state => {
    return{
        commits : state.commitsRed.commits
    }
}

const mapActionsToProps = dispatch => {
    return {
        onSetCommits: () => dispatch(actionCreators.getCommits('willembr','Mywebsite'))
    }
}

export default connect(mapStateToProps,mapActionsToProps)(Commits);