import axios from 'axios';
import { useEffect, useState } from 'react';

const useSummoner = () => {
	const [isLoading, setIsLoading] = useState(false);
	const [error, setError] = useState(null);
	const [data, setData] = useState([]);
	const [dataRanked, setDataRanked] = useState(null);
	const api_key = 'RGAPI-dba3cf0d-22c9-44c4-9934-518f68d252bd';
	const summonerById =
		'https://la1.api.riotgames.com/lol/league/v4/entries/by-summoner';

	const searchSummoner = async (summName) => {
		setIsLoading(true);
		try {
			const response = await axios.get(
				`https://la1.api.riotgames.com/lol/summoner/v4/summoners/by-name/${summName}`,
				{
					params: { api_key },
				}
			);
			setData([response.data]);
			setIsLoading(false);
		} catch (error) {
			setError(error);
			setIsLoading(false);
		}
	};

	useEffect(() => {
		const fetchData = async () => {
			if (data[0]?.id) {
				try {
					const response = await axios.get(summonerById + `/${data[0].id}`, {
						params: { api_key },
					});

					setDataRanked(response.data);
				} catch (error) {
					console.log(error);
				}
			}
		};

		fetchData();
	}, [data]);

	return {
		searchSummoner,
		data,
		error,
		isLoading,
		dataRanked,
	};
};

export default useSummoner;
