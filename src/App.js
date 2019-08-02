import React from 'react'
import { BrowserRouter as Router, Link, Route } from 'react-router-dom'
import Home from './pages/Home'
import City from './pages/City'
import Map from './pages/Map'
class App extends React.Component {
  render() {
    return (
      <Router>
        <div>
          <ul>
            <li>
              <Link to="/home">首页</Link>
            </li>
            <li>
              <Link to="/city">城市</Link>
            </li>
            <li>
              <Link to="/map">地图</Link>
            </li>
          </ul>
          <hr />
          <Route path="/home" component={Home} />
          <Route path="/city" component={City} />
          <Route path="/map" component={Map} />
        </div>
      </Router>
    )
  }
}

export default App
