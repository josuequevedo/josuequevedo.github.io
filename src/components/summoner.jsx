import Styles from './summoner.module.css';
import { SummonerCard } from './summonerCard.jsx';

export const Summoner = ({
	handleChange,
	handlerFind,
	summonerName,
	data,
	dataRanked,
	isLoading,
	error,
}) => {
	return (
		<div className={Styles.container}>
			<div className={Styles.containerTitle}>
				<div className={Styles.containerImg}>
					<img className={Styles.img} src='src/assets/img/logo.png' alt='' />
				</div>
				<div className={Styles.containerH1}>
					<h1 className={Styles.h1}>
						LOL <span>STATS</span>
					</h1>
				</div>
			</div>
			<div className={Styles.containerSearch}>
				<h1>Search by summoner name</h1>
				<div className={Styles.containerInputs}>
					<input
						onChange={handleChange}
						type='text'
						id='name'
						placeholder='summoner name'
						value={summonerName}
					/>
					<button
						disabled={summonerName.length > 0 ? false : true}
						onClick={handlerFind}
					>
						Search
					</button>
				</div>
			</div>

			<div>
				<SummonerCard
					data={data}
					dataRanked={dataRanked}
					isLoading={isLoading}
					error={error}
				/>
			</div>
		</div>
	);
};
