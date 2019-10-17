import React from 'react'
import defaultTheme from './defaultTheme'
import { ThemeProvider as Provider } from 'styled-components'

export default ({theme, children}) => {
  return (
    <Provider theme={{...defaultTheme, ...theme}}>
      {children}
    </Provider>
  )
}