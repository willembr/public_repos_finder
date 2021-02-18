import React,{Component} from 'react';
import Axios from '../../hoc/Axios';
import { setDate, setHour, setCapitalLetter } from '../../Functions/Output';
import Spinner from '../../Components/UI/Spinner/Spinner';
import Repositories from '../../Components/Repositories/Repositories';

class Repos extends Component{
    state = {
        repos : [],
        user: '',
        loading:false
    }

     componentDidMount(){ this.getReposHandler(this.props.match.params.user);}
     componentDidUpdate(){ if(this.newSearch()) this.getReposHandler(this.props.match.params.user);}

     newSearch(){ return this.state.user !== this.props.match.params.user;}
     
     getReposHandler = (user) => {
            const url = `users/${user}/repos`
            Axios.get(url)
                 .then( response => {
                    this.setState({ loading : true })
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
                         user: user,
                         loading:false
                     });
                 })
                 .catch( error => {
                     console.log(error);
                 })
     }

    render(){
         let content = "";
         if( this.newSearch() )
         {
            this.state.loading ? content = <Spinner/> : content = <Repositories repos={this.state.repos}/>
         }
        return(
            <>
            {content}
            </>
        );
    }
};

export default Repos;