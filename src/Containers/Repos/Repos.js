import React,{Component} from 'react';
import Axios from '../../hoc/Axios';
import { setDate, setHour, setCapitalLetter } from '../../Functions/Output';
import Spinner from '../../Components/UI/Spinner/Spinner';
import Repositories from '../../Components/Repositories/Repositories';


class Repos extends Component{

    state = {
        repos : [],
        user: '',
        loading:false,
        error:false
    }

    componentDidMount(){ this.getRepos(this.props.match.params.user) }
    componentDidUpdate(){ if(this.newSearch()) this.getRepos(this.props.match.params.user) }

    newSearch(){ 
        if(this.state.user === '') return false;
        return this.state.user !== this.props.match.params.user;
        }

    getRepos = async(user) => {
        const url = `users/${user}/repos`;
        let response = '';
        
            try{
                response = await Axios.get(url);
            } catch (error) {
                this.setState({error:true})
            }
            const updatedRepositories = await response.data.map( 
                repository => {
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
                    loading:false,
                    user:user,
                    error:false
             })

   
    }

    render(){
        let content,errorMessage = "";
        if(this.state.repos.length > 0 && (this.state.user === this.props.match.params.user)) content = <Repositories repos = {this.state.repos}/>
        if(this.state.error || this.state.repos.length === 0 ) errorMessage = <p>We couldn't find any Repos</p>;
        return(
            <p>
            {content}
            {errorMessage}
            </p>
        );
    }
};

export default Repos;