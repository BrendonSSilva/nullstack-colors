import Nullstack from 'nullstack'

import './Application.css'
import Home from './Home'

class Application extends Nullstack {

  prepare({ page }) {
    page.locale = 'en-US'
  }

  render() {
    return (
      <body>
        <Home route="/"/>
      </body>
    )
  }

}

export default Application
