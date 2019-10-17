import React from 'react'
import ReactDOM from 'react-dom'

import { ThemeProvider, Text } from './lib'

const Main = () => 
  <ThemeProvider>
    <Text error>123</Text>
  </ThemeProvider>

ReactDOM.render(<Main />, document.getElementById('root'));
