//tailwind border color plugin powered by
//https://github.com/tailwindcss/tailwindcss/pull/560#issuecomment-503222143
var _ = require('lodash')
var flattenColorPalette = require('tailwindcss/lib/util/flattenColorPalette').default


module.exports = {
  purge: ["./src/**/*.html", "./src/**/*.vue", "./src/**/*.jsx"],
  theme: {
    borderWidth: {
      default: '1px',
      '0': '0',
      '2': '2px',
      '3': '3px',
      '4': '4px',
      '6': '6px',
      '8': '8px'
    },
    stroke: theme => ({
      'current': 'currentColor',
      'white': theme('colors.white'),
      'red': theme('colors.red.500'),
      'green': theme('colors.green.500'),
      'blue': theme('colors.blue.500')
    }),
    flex: {
      '1': '1 1 0%',
      auto: '1 1 auto',
      initial: '0 1 auto',
      none: 'none',
      'post': '1 1 300px',
    },
    zIndex: {
      '-10': '-10',
    },
    container : {
      'xl' : 1024
    },
    extend: {}
  },
  variants: {},
  corePlugins: {
    container: false
  },
  plugins: [
    function ({
      addUtilities,
      e,
      theme,
      variants
    }) {
      const colors = flattenColorPalette(theme('borderColor'))

      const utilities = _.flatMap(_.omit(colors, 'default'), (value, modifier) => ({
        
        [`.${e(`border-t-${modifier}`)}`]: {
          borderTopColor: `${value}`
        },
        [`.${e(`border-r-${modifier}`)}`]: {
          borderRightColor: `${value}`
        },
        [`.${e(`border-b-${modifier}`)}`]: {
          borderBottomColor: `${value}`
        },
        [`.${e(`border-l-${modifier}`)}`]: {
          borderLeftColor: `${value}`
        },
      }))

      addUtilities(utilities, variants('borderColor'))
    },
    function ({
      addComponents
    }) {
      addComponents({
        '.container': {
          maxWidth: '100%',
          '@screen sm': {
            maxWidth: '640px',
          },
          '@screen md': {
            maxWidth: '768px',
          },
          '@screen lg': {
            maxWidth: '1024px',
          },
          '@screen xl': {
            maxWidth: '1024px',
          },
        }
      })
    },
    function ({
      addBase,
      config
    }) {

      addBase({
        'h1': {
          fontSize: config('theme.fontSize.5xl'),
          fontWeight: config('theme.fontWeight.bold'),
          fontFamily: config('theme.fontFamily.sans').join(', '),
          marginTop: config('theme.margin.4'),
          marginBottom: config('theme.margin.4')
        },
        'h2': {
          fontSize: config('theme.fontSize.4xl'),
          fontWeight: config('theme.fontWeight.bold'),
          fontFamily: config('theme.fontFamily.sans').join(', '),
          marginTop: config('theme.margin.4'),
          marginBottom: config('theme.margin.4')
        },
        'h3': {
          fontSize: config('theme.fontSize.3xl'),
          fontWeight: config('theme.fontWeight.bold'),
          fontFamily: config('theme.fontFamily.sans').join(', '),
          marginTop: config('theme.margin.4'),
          marginBottom: config('theme.margin.4')
        },
        'h4': {
          fontSize: config('theme.fontSize.2xl'),
          fontWeight: config('theme.fontWeight.bold'),
          fontFamily: config('theme.fontFamily.sans').join(', '),
          marginTop: config('theme.margin.4'),
          marginBottom: config('theme.margin.4')
        },
        'h5': {
          fontSize: config('theme.fontSize.xl'),
          fontWeight: config('theme.fontWeight.bold'),
          fontFamily: config('theme.fontFamily.sans').join(', '),
          marginTop: config('theme.margin.4'),
          marginBottom: config('theme.margin.4')
        },
        'h6': {
          fontSize: config('theme.fontSize.lg'),
          fontWeight: config('theme.fontWeight.bold'),
          fontFamily: config('theme.fontFamily.sans').join(', '),
          marginTop: config('theme.margin.4'),
          marginBottom: config('theme.margin.4')
        },
      })
    },
    require('tailwindcss-tables')()
  ]
}
