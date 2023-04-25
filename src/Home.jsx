import Nullstack from 'nullstack'
import './Home.scss'

class Home extends Nullstack {

	updateBg({ event }) {
		document.querySelector('div').style.backgroundColor = event.target.value
	}

	render() {
		return (
			<div>
				<h3>Change the background color</h3>
				<a href='https://nullstack.app'>Nullstack</a>
				<input type='color' onchange={this.updateBg} />
			</div>
		)
	}

}

export default Home
