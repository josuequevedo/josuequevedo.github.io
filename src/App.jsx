import { Route, Routes } from 'react-router-dom';
import { Home } from './pages/home';
import { Layout } from './layout/layout';
import { ErrorPage } from './pages/error-page';
import { SearchSummoner } from './pages/search-summoner';
import { AllChampions } from './pages/all-champions';
import { SummonerCard } from './components/summonerCard';

export const App = () => {
	return (
		<>
			<Layout>
				<Routes>
					<Route path='/' element={<Home />} />
					<Route path='/search-summoner' element={<SearchSummoner />} />
					<Route path='/all-champions' element={<AllChampions />} />
					<Route path='/summoner/:id' element={<SummonerCard />} />
					<Route path='*' element={<ErrorPage />} />
				</Routes>
			</Layout>
		</>
	);
};
