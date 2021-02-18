import React,{Component} from 'react';
import Axios from '../../hoc/Axios';
import { setDate, setHour } from '../../Functions/Output';

class Repos extends Component{
    state = {
        repos : []
    }

    componentDidMount(){
        if(this.props.match.params.user){
            const url = `users/${this.props.match.params.user}/repos`
            Axios.get(url)
                 .then( response => {
                    const updatedRepositories = response.data.map( repository => {
                        const created = repository.created_at;
                        return {
                            title: repository.name,
                            description: repository.description,
                            stars:repository.stargazers_count,
                            watchers:repository.watchers_count,
                            forks:repository.forks_count,
                            creationDate: setDate(created),
                            creationHour: setHour(created)
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