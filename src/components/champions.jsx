import Styles from './champions.module.css';
export const Champions = ({ name, img }) => {
	return (
		<>
			<article className={Styles.containerArticle}>
				<main className={Styles.articleMain}>
					<img
						src={`https://ddragon.leagueoflegends.com/cdn/img/champion/loading/${img}`}
						alt=''
					/>
				</main>
				<footer className={Styles.articleFooter}>
					<h3>{name}</h3>
				</footer>
			</article>
		</>
	);
};
