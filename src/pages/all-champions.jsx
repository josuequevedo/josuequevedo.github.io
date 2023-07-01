import { useEffect, useState } from 'react';
import { Champions } from '../components/champions';
import useChampions from '../hooks/use-champions';
import styles from './allchampions.module.css';

export const AllChampions = () => {
	const { data } = useChampions();
	const [visibleChampions, setVisibleChampions] = useState(10);
	const championsPerPage = 10;

	useEffect(() => {
		function handleScroll() {
			if (
				window.innerHeight + document.documentElement.scrollTop ===
				document.documentElement.offsetHeight
			) {
				setVisibleChampions(
					(prevVisibleChampions) => prevVisibleChampions + championsPerPage
				);
			}
		}

		window.addEventListener('scroll', handleScroll);
		return () => window.removeEventListener('scroll', handleScroll);
	}, []);

	return (
		<div className={styles.grid}>
			{data &&
				Object.keys(data)
					?.slice(0, visibleChampions)
					.map((prop) => {
						return (
							<Champions
								key={data[prop].id}
								title={data[prop].title}
								name={data[prop].name}
								img={data[prop].id + '_0.jpg'}
								blurb={data[prop].blurb}
								id={data[prop].id}
							/>
						);
					})}
		</div>
	);
};
