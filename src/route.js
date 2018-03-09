import React from 'react';
import { Route } from 'react-router-dom'
import Home from './containers/Home'

const App = () => (
  <div>
    {/* <header>
      <Link to="/">Home</Link>
      <Link to="/login">Login</Link>
    </header> */}
    <main>
      <Route exact path="/" component={Home} />
    </main>
  </div>
)

export default App