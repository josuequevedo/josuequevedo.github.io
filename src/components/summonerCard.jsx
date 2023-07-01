import styles from '../components/summonerCard.module.css';
import Champions from '../assets/img/lol.png';

export const SummonerCard = ({ data, dataRanked, isLoading, error }) => {
	if (isLoading) {
		return <p>Is Loading....</p>;
	}

	if (error) {
		return <p>ups Looks like something error {error.message}</p>;
	}
	if (data.length === 0) {
		return (
			<div className={styles.containerLength}>
				<img src={Champions} alt='' />
			</div>
		);
	}

	return (
		<div className={styles.containerCard}>
			{data &&
				data.map((item) => {
					return (
						<div key={item.id} className={styles.containerCardUp}>
							<img
								src={`http://ddragon.leagueoflegends.com/cdn/13.12.1/img/profileicon/${item.profileIconId}.png`}
								alt=''
								className={styles.containerCardUpImg}
							/>
							<h2 className={styles.containerCardUpName}>{item.name}</h2>
							<p className={styles.containerCardUpLevel}>
								Level {item.summonerLevel} -
								{dataRanked &&
									dataRanked
										?.filter((item) => item.queueType === 'RANKED_SOLO_5x5')
										?.map((item) => {
											return `  ${item.tier.toLowerCase()} ${item.rank}`;
										})}
							</p>

							{dataRanked &&
								dataRanked
									?.filter((item) => item.queueType === 'RANKED_SOLO_5x5')
									?.map((item) => {
										return (
											<div
												key={item.leagueId}
												className={styles.containerCardUpTwo}
											>
												<img
													src={`src/assets/img/Emblem_${item.tier.toLowerCase()}.png`}
													alt=''
													className={styles.image}
												/>
											</div>
										);
									})}
						</div>
					);
				})}

			{dataRanked &&
				dataRanked
					?.filter((item) => item.queueType === 'RANKED_SOLO_5x5')
					?.map((item) => {
						return (
							<div key={item.leagueId} className={styles.containerCardDown}>
								<div>
									<p className={styles.containerDownWins}>
										Wins: <span>{item.wins}</span>
									</p>
									<p className={styles.containerDownLoses}>
										Loses: <span> {item.losses} </span>
									</p>
								</div>

								<div className={styles.containerWinrate}>
									<h4>
										{`${Math.round(
											(item.wins / (item.wins + item.losses)) * 100
										)}%`}
									</h4>
									<p>Win Rate</p>
								</div>
							</div>
						);
					})}
		</div>
	);
};
