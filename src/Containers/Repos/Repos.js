import React,{Component} from 'react';
import Axios from '../../hoc/Axios';

class Repos extends Component{
    state = {
        repos : []
    }

    componentDidMount(){
        if(this.props.match.params.user){
            const url = `users/${this.props.match.params.user}/repos`
            Axios.get(url)
                 .then( response => {
                    console.log(response.data);
                    const updatedRepositories = response.data.map( repository => {
                        return {
                            title: repository.name,
                            description: repository.description,
                            stars:repository.stargazers_count,
                            watchers:repository.watchers_count,
                            forks:repository.forks_count
                        }
                    });
                    this.setState({
                        repos:updatedRepositories
                    });
                 })
                 .catch( error => {
                     console.log(error);
                 })
        }
    }
    render(){
        console.log(this.state.repos);
        return(
            <div>

            </div>
        );
    }
};

export default Repos;