import axios from 'axios';
import { useEffect, useState } from 'react';

const useChampions = () => {
	const [data, setData] = useState(null);
	const [isLoading, setIsLoading] = useState(false);
	const [error, setError] = useState(null);
	const allChampions = async () => {
		setIsLoading(true);
		try {
			const response = await axios.get(
				'http://ddragon.leagueoflegends.com/cdn/13.12.1/data/en_US/champion.json'
			);
			setData(response.data.data);
			setIsLoading(false);
		} catch (error) {
			setError(error);
		}
	};
	useEffect(() => {
		allChampions();
	}, []);
	return { data, isLoading, error };
};

export default useChampions;
