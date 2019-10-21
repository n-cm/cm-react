import { css } from 'styled-components'

export const fontCss = css`
  ${p => css`
    font-family: ${p.theme.fontFamily};

    font-size: ${p.theme.fontSizeM};
    ${p.XS && css`font-size: ${p.theme.fontSizeXS}`}
    ${p.S && css`font-size: ${p.theme.fontSizeS}`}
    ${p.L && css`font-size: ${p.theme.fontSizeL}`}
    ${p.XL && css`font-size: ${p.theme.fontSizeXL}`}

    ${p => p.letterSpaceXS && css`letter-spacing: ${p => p.theme.fontSizeXS}`}  
    ${p => p.letterSpaceS && css`letter-spacing: ${p => p.theme.fontSizeS}`}
    ${p => p.letterSpaceM && css`letter-spacing: ${p => p.theme.fontSizeM}`}
    ${p => p.letterSpaceL && css`letter-spacing: ${p => p.theme.fontSizeL}`}

    ${p.bold && css`font-weight: bold;`}
    ${p.underline && css`text-decoration: underline;`}
    ${p.underlineColor && css`text-decoration-color: ${p.underlineColor};`}

    ${p.inline && css`display: inline`};
    ${p.center && css`text-align: center`};
    ${p.right && css`text-align: right`};
    ${p.left && css`text-align: left`};

    white-space: pre-wrap;
    ${p.nowrap && css`white-space: nowrap;`}
  `}
`

export const generalCss = css`
  ${p => css`
    ${p.width && `width: ${p.width};`}
    ${p.height && `height: ${p.height};`}
    ${p.maxWidth && css`max-width: ${p.maxWidth};`}
    ${p.maxHeight && css`max-height: ${p.maxHeight};`} 
    ${p.fitWidth && css`min-width: fit-content;`}
    ${p.fitHeight && css`min-height: fit-content;`}
    ${p.borderRadius && `border-radius: ${p.borderRadius};`}
    ${p.opacity && `opacity: ${p.opacity};`}
    ${p.zIndex && css`z-index: ${p.zIndex};`}
    ${positionCss}
    ${colorCss}
    ${cursorCss}
    ${spacingCss}
  `}
`

export const positionCss = css`
  ${p => css`
    ${p.relative && `position: relative;`}
    ${p.absolute && `position: absolute;`}
    ${p.absTop && `top: ${p.absTop};`}
    ${p.absBottom && `bottom: ${p.absBottom};`}
    ${p.absLeft && `left: ${p.absLeft};`}
    ${p.absRight && `right: ${p.absRight};`}
    ${p => p.overflowHidden && css`overflow: hidden;`}
    ${p => p.overflowAuto && css`overflow: auto;`}  
  `}
`

export const colorCss = css`
  ${p => css`
    ${p.primary && `color: ${p.theme.colorPrimary}`}
    ${p.secondary && `color: ${p.theme.colorSecondary}`}
    ${p.white && `color: ${p.theme.white}`}
    ${p.black && `color: ${p.theme.black}`}
    ${p.error && `color: ${p.theme.errorColor}`}
    ${p.button && `color: ${p.theme.buttonColor}`}
    ${p.disabled && css`color: ${p.theme.disabledColor}; opacity: 1; -webkit-text-fill-color: ${p.theme.disabledColor};`}
    ${p.color && `color: ${p.color}`}

    ${p.bgPrimary && `background-color: ${p.theme.bgColorPrimary}`}
    ${p.bgSecondary && `background-color: ${p.theme.bgColorSecondary}`}
    ${p.bgWhite && `background-color: ${p.theme.white}`}
    ${p.bgBlack && `background-color: ${p.theme.black}`}
    ${p.bgColor && `background-color: ${p.bgColor}`}  
  `}
`

export const cursorCss = css`
  ${p => p.noSelect && 'user-select: none;'}
  ${p => p.onClick && 'cursor: pointer;'}
  ${p => p.disabled && 'cursor: not-allowed;'}
`

export const spacingCss = css`
  ${p => 
    [
      { key: 'XXS', value: 'XXS', cssKey: 'padding' },
      { key: 'XS', value: 'XS', cssKey: 'padding' },
      { key: 'S', value: 'S', cssKey: 'padding' },
      { key: 'M', value: 'M', cssKey: 'padding' },
      { key: 'L', value: 'L', cssKey: 'padding' },
      { key: 'XL', value: 'XL', cssKey: 'padding' },

      { key: 'XXS', value: 'XXS', cssKey: 'margin', prefix: 'Margin' },
      { key: 'XS', value: 'XS', cssKey: 'margin', prefix: 'Margin' },
      { key: 'S', value: 'S', cssKey: 'margin', prefix: 'Margin' },
      { key: 'M', value: 'M', cssKey: 'margin', prefix: 'Margin' },
      { key: 'L', value: 'L', cssKey: 'margin', prefix: 'Margin' },
      { key: 'XL', value: 'XL', cssKey: 'margin', prefix: 'Margin' },
    ].map( ({ key, value, cssKey, prefix = '' }) => css`
      ${p[prefix + 'All' + key] && `${cssKey}: ${p.theme['spacing' + value]};`}
      ${p[prefix + 'V' + key] && `${cssKey}-top: ${p.theme['spacing' + value]}; ${cssKey}-bottom: ${p.theme['spacing' + value]};`}
      ${p[prefix + 'H' + key] && `${cssKey}-left: ${p.theme['spacing' + value]}; ${cssKey}-right: ${p.theme['spacing' + value]};`}
      ${p[prefix + 'Left' + key] && `${cssKey}-left: ${p.theme['spacing' + value]};`}
      ${p[prefix + 'Right' + key] && `${cssKey}-right: ${p.theme['spacing' + value]};`}
      ${p[prefix + 'Bottom' + key] && `${cssKey}-bottom: ${p.theme['spacing' + value]};`}
      ${p[prefix + 'Top' + key] && `${cssKey}-top: ${p.theme['spacing' + value]};`}    
    `)
  }
`