import React,{Component} from 'react';
import User from '../User/User';
import styles from './Main.module.scss';

class Main extends Component{
    render(){
        return(
            <section className={styles.Main}>
                <h1 className={styles.Title}>Public Repository Finder</h1>
                <User/>
            </section>
        );
    }
};

export default Main;