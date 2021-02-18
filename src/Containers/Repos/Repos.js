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
                 })
                 .catch( error => {
                     console.log(error);
                 })
        }
    }

    render(){
        return(
            <div>

            </div>
        );
    }
};

export default Repos;