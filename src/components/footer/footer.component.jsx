import './footer.styles.scss';
import { ReactComponent as GithubLogo } from '../../assets/icons8-github.svg';
export const Footer = () => {
	return (
		<footer>
			<div className="footer-wrap">
				<span>This web app created by 
					<span> Denis Korablev </span>
				</span>
				<a href="https://github.com/denistort" target="_blank" rel="noopener noreferrer">
					<GithubLogo />
				</a>
			</div>

		</footer>
	);
}