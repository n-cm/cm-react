import React from 'react'
import ReactDOM from 'react-dom'

import { ThemeProvider, Text, Col, Row } from './lib'

const Main = () => 
  <ThemeProvider>
    <Col bgPrimary>
      <Text error>error</Text>
      <Text primary>primary</Text>
      <Row bgSecondary>
        <Col flex={1} primary>1</Col>
        <Col flex={1} secondary>2</Col>
      </Row>
    </Col>
  </ThemeProvider>

ReactDOM.render(<Main />, document.getElementById('root'));
