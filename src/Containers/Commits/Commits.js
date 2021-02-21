import React,{Component} from 'react';
import { connect } from 'react-redux';
import * as actionCreators from '../../Store/Actions/Index';
import CommitsComp from '../../Components/Commits/commits';


class Commits extends Component{
    state= {
        changeCommits : {
                        repositories : {
                            elementType:'select',
                            elementConfig:{},
                            validation:{},
                            value:"",
                            valid:true,
                            }
                        },
        changed:false
        }

    componentDidMount(){ this.getCommits() }

    componentDidUpdate(){ 
        if((this.state.changeCommits.repositories.value !== "") && (this.state.changed)) this.getCommits(); 
    }

    getCommits = () => {
        this.setState({ changed : false });
        const params = this.props.match.params;
        this.props.onSetCommits(params.user,params.repos); 
    }


    onChangeRepositoryHandler(event){

        const updatedChangeCommits = {...this.state.changeCommits}
        const updatedElement = {...updatedChangeCommits["repositories"]};

        updatedElement.value = event.target.value;

        updatedChangeCommits["repositories"] = updatedElement;

        this.setState({
            changeCommits:updatedChangeCommits,
            changed:true
        });

        this.props.history.replace(`${event.target.value}`);
    }

    render(){
        let commits = "";
        if(this.props.commits){
               commits = <CommitsComp 
                                commits = { this.props.commits }
                                changed = { (event) => this.onChangeRepositoryHandler(event) }
                                input = { this.state.changeCommits }
                                value = {this.props.match.params.repos}
                                repos = { this.props.repos.map( repo => ({ value : repo.title, displayValue : repo.title}))}
                                loading = { this.props.loading}
                        /> 
        }                                                
        return(
            <>
                {commits}
            </>
        );
    }
};

const mapStateToProps = state => {
    return{
        commits : state.commitsRed.commits,
        loading: state.commitsRed.loading,
        repos: state.reposRed.repos      
    }
}

const mapActionsToProps = dispatch => {
    return {
        onSetCommits: (user,repos) => dispatch(actionCreators.getCommits(user,repos))
    }
}

export default connect(mapStateToProps,mapActionsToProps)(Commits);