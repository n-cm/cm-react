// import React from 'react'
import styled, { css } from 'styled-components'
import { generalCss } from '../Theme'
const Flex = styled.div`
  display: flex;
  ${p => p.flexWrap && css`flex-wrap: wrap`}
  box-sizing: border-box;
  ${p => p.flex && css`flex: ${p.flex};`}
  
  ${generalCss}
`

const Row = styled(Flex)`
  ${p => css`
    ${p.left && css`justify-content: flex-start;`}
    ${p.right && css`justify-content: flex-end;`}
    ${p.center && css`justify-content: center;`}
    ${p.centerVertical && css`align-items: center;`}
    ${p.top && css`align-items: flex-start;`}
    ${p.bottom && css`align-items: flex-end;`}
    ${p.spaceBetween && css`justify-content: space-between;`}
    ${p.spaceAround && css`justify-content: space-around;`}
  `}
`
  
const Col = styled(Flex)`
  flex-direction: column;
  ${p => css`
    ${p.left && css`align-items: flex-start`};
    ${p.right && css`align-items: flex-end`};
    ${p.center && css`align-items: center`};
    ${p.centerVertical && css`justify-content: center`};
    ${p.bottom && css`justify-content: flex-end`};
    ${p.spaceBetween && css`justify-content: space-between`};
    ${p.spaceAround && css`justify-content: space-around`};
  `}
  `

export {
  Row, Col, Flex
}