import { Link } from 'react-router-dom';
import Styles from './layout.module.css';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

const handleToGit = () => {
	window.open('https://github.com/josuequevedo', '_blank');
};
const handleToLinkedin = () => {
	window.open('https://www.linkedin.com/in/josue-quevedo-9b696b1b8/', '_blank');
};
const handleToWs = () => {
	window.open(
		'https://api.whatsapp.com/send/?phone=584246025565&text&type=phone_number&app_absent=0',
		'_blank'
	);
};
export const Layout = ({ children }) => {
	return (
		<>
			<header className={Styles.headerContainer}>
				<ul className={Styles.headerMenu}>
					<li className={Styles.headerMenuItem}>
						<Link to={'/'}>Home</Link>
					</li>
					<li className={Styles.headerMenuItem}>
						<Link to={'/search-summoner'}>Search Summoner</Link>
					</li>
					<li className={Styles.headerMenuItem}>
						<Link to={'/all-champions'}>All champions</Link>
					</li>
				</ul>
			</header>
			<main className={Styles.main}>{children}</main>
			<footer className={Styles.footerContainer}>
				<p className={Styles.footerContactText}> Contact me:</p>
				<div onClick={handleToWs} className={Styles.footerIcons}>
					<WhatsAppIcon color='success' fontSize='large' />
				</div>
				<div onClick={handleToLinkedin} className={Styles.footerIcons}>
					<LinkedInIcon color='primary' fontSize='large' />
				</div>
				<div onClick={handleToGit} className={Styles.footerIcons}>
					<GitHubIcon fontSize='large' sx={{ color: '#fff' }} />
				</div>
			</footer>
		</>
	);
};
