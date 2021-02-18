import React,{Component} from 'react';
import Axios from '../../hoc/Axios';
import { setDate, setHour, setCapitalLetter } from '../../Functions/Output';

class Repos extends Component{
    state = {
        repos : [],
        user: ''
    }

     componentDidMount(){ this.getReposHandler(this.props.match.params.user);}
     componentDidUpdate(){ if(this.newSearch()) this.getReposHandler(this.props.match.params.user);}
     
     getReposHandler = (user) => {
            const url = `users/${user}/repos`
            Axios.get(url)
                 .then( response => {
                    const updatedRepositories = response.data.map( repository => {
                        const created = repository.created_at;
                        return {
                            title: setCapitalLetter(repository.name),
                            description: setCapitalLetter(repository.description),
                            stars:repository.stargazers_count,
                            watchers:repository.watchers_count,
                            forks:repository.forks_count,
                            creationDate: setDate(created),
                            creationHour: setHour(created)
                        }
                    });
                     this.setState({
                         repos:updatedRepositories,
                         user: user
                     });
                 })
                 .catch( error => {
                     console.log(error);
                 })
        }
      newSearch(){ 
           return this.state.user !== this.props.match.params.user;
        }

    render(){
         if( this.newSearch() )
         {
            console.log('new post');
         }
        return(
            <div>

            </div>
        );
    }
};

export default Repos;