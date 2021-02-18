import React,{Component} from 'react';
import User from '../User/User';
import styles from './Main.module.scss';
import { Route } from 'react-router-dom';

class Main extends Component{
    render(){
        return(
            <section className={styles.Main}>
                <h1 className={styles.Title}>Public Repository Finder</h1>
                <Route path="/" component={User}/>
            </section>
        );
    }
};

export default Main;