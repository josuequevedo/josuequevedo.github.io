import styles from './home.module.css';
import Garen from '../assets/img/Champion_garen.png';
export const Home = () => {
	return (
		<div className={styles.containerHome}>
			<h1>Welcome to the Summoner Page</h1>
			<img src={Garen} alt='' />
		</div>
	);
};
