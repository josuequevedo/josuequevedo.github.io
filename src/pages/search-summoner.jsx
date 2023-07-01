import { Summoner } from '../components/summoner';
import { useState } from 'react';
import useSummoner from '../hooks/use-summoners';
import { Link } from 'react-router-dom';

export const SearchSummoner = () => {
	const [summonerName, setSummonerName] = useState('');
	const { dataRanked, data, isLoading, error, searchSummoner } = useSummoner();

	const handlerFind = () => {
		searchSummoner(summonerName);
		setSummonerName('');
		<Link to={`summoner/${data[0]?.id}`}>Find Summoner</Link>;
	};

	const handleChange = (e) => {
		setSummonerName(e.target.value);
	};

	return (
		<>
			<Summoner
				summonerName={summonerName}
				handleChange={handleChange}
				handlerFind={handlerFind}
				data={data}
				dataRanked={dataRanked}
				isLoading={isLoading}
				error={error}
			/>
		</>
	);
};
