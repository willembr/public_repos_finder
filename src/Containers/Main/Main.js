import React,{Component} from 'react';
import styles from './Main.module.scss';
import { Route } from 'react-router';
import User from '../User/User';
import Repos from '../Repos/Repos';
import Commits from '../Commits/Commits';

class Main extends Component{
    render(){
        return(
            <section className={styles.Main}>
                <h1 className={styles.Title}>Public Repository Finder</h1>
               <Route path="/" component={ User }/>
               <Route path="/:user" exact component={ Repos } />
               <Route path="/:user/:repos/" exact component={ Commits } />
            </section>
        );
    }
};

export default Main;