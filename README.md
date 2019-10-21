# Overview
This is a component lib for building react app. This lib is under development. Any component could be changed without announcement.  

# List of Component
- [ ] Avatar
- [ ] Button
- [ ] DropToUpload 
- [ ] Expand
- [ ] FixComponent
- [ ] Footer
- [ ] Graph
- [ ] Header
- [ ] Hr
- [ ] Icon
- [ ] Image
- [ ] Input
- [ ] Layout
- [ ] Loader
- [ ] Panel 
- [ ] ProgressBar
- [ ] ScrollLoader
- [ ] Tab 
- [ ] Table 
- [ ] Text 
- [ ] Theme
- [ ] Uploader

# Usage
```
import React from 'react'
import { ThemeProvider, Text } from 'cm-react'

const Example = () => 
  <ThemeProvider>
    <Text primary>Hello World</Text>
  </ThemeProvider>
```

## General
Many common components include the below props:
- width, height, maxWidth, maxHeight, fitWidth, fitHeight
- borderRadius, opacity, zIndex
- relative, absolute, absTop, absBottom, absLeft, absRight, overflowHidden, overflowAuto
- primary, secondary, white, black, error, disabled, color<any color code>
- bgPrimary, bgSecondary, bgWhite, bgBlack, bgColor<any color code>
- noSelect, onClick, disabled

## Text
Props includes 
- XS, S, M, L, XL
- bold, underline, underlineColor
- center, right, left
- nowrap, inline

## 