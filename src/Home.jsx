import Nullstack from 'nullstack'
import './Home.scss'

class Home extends Nullstack {

  prepare({ project, page, greeting }) {
    page.title = `${project.name} - ${greeting}`
    page.description = `${project.name} was made with Nullstack`
  }

  updateBg({ event }) {
    document.querySelector('div').style.backgroundColor = event.target.value
  }

  render() {
    return (
      <div>
        <h1>{this.bgColor}</h1>
        <p>lorem ipsum dolor sit amet, consectetur adip non lorem ipsum dolor</p>
        <input type='color' onchange={this.updateBg} />
      </div>
    )
  }

}

export default Home
