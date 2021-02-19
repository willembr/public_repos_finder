import React,{Component} from 'react';
import Axios from '../../Hoc/Axios';
import { setDate, setHour, setCapitalLetter } from '../../Functions/Output';
import Repositories from '../../Components/Repositories/Repositories';


class Repos extends Component{

    state = {
        repos : [],
        user: '',
        noUser:false,
        noRepos:false
    }

    componentDidMount(){ this.getRepos(this.props.match.params.user) }
    componentDidUpdate(){ if(this.newSearch()) this.getRepos(this.props.match.params.user) }

    newSearch(){ 
        if(this.state.user === '') return false;
        return this.state.user !== this.props.match.params.user;
        }

    getRepos = async(user) => {
        // When there isn't a match on user
        if( user === "no_user") return this.setState({noUser : true, user:user});

        const url = `users/${user}/repos`;
        let response = '';
        
            try{
                response = await Axios.get(url);
            } catch (error) {
                this.setState({noRepos:true})
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
                    user:user,
                    noUser:false,
                    noRepos: updatedRepositories.length <= 0
             })

   
    }

    repositoryClickHandler = (repository) => {
        this.props.history.push(`${this.props.match.url}/${repository}`);
    }

    render(){
        let content = "";
        if(this.state.user === this.props.match.params.user) 
        content = <Repositories 
                        repos = { this.state.repos } 
                        noUser = { this.state.noUser } 
                        noRepos = { this.state.noRepos } 
                        clicked = { this.repositoryClickHandler }
                        />
        return(
            <>
            {content}
            </>
        );
    }
};

export default Repos;