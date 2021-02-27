import styles from '../styles/components/Profile.module.css';


export function Profile(){
    return(
       
       <div className={styles.profileContainer}>
        <img src="https://github.com/letFlavinho.png" alt="Flávio Bulhões"/>
        <div>
            <strong>Flávio Bulhões</strong>
            <p>
            <img src="icons/level.svg" alt="level"/>
            Level 1
            </p>
        </div>
        </div>    
        
            
        
);
}