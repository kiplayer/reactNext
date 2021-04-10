import '../styles/globals.css'
//import 'bootstrap/dist/css/bootstrap.min.css';
import Top from '../src/component/Top';
import Bottom from '../src/component/Bottom';

function MyApp({ Component, pageProps }) {
	return (
		<>
			<div className="wrap">
				<Top />
				<div id="container">
					<div className="inner">
						<Component {...pageProps} />
					</div>
				</div>
				<Bottom />
			</div>
		</>
	);
}

export default MyApp
