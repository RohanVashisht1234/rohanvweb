import mylogo from '../../assets/logo.svg';
import './style.css';

export function Home() {
	return (
		<div class="home">
			<a href="https://preactjs.com" target="_blank">
				<img src={mylogo} alt="Preact logo" height="160" width="160" />
			</a>
			<h1>Hey, Its me! Rohan Vashisht </h1>
			<section>
				<Resource
					title="Know about me"
					description="Know about me"
					href="https://github.com/rohanvashisht1234"
				/>
				<Resource
					title="Website under construction"
					description="Website under construction"
					href="/"
				/>
				<Resource
					title="Website under construction"
					description="Website under construction"
					href="/"
				/>
			</section>
		</div>
	);
}

function Resource(props) {
	return (
		<a href={props.href} target="_blank" class="resource">
			<h2>{props.title}</h2>
			<p>{props.description}</p>
		</a>
	);
}
