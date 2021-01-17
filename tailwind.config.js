module.exports = {
  purge: [
    './pages/**/*.js', './components/**/*.js',
    './pages/**/*.tsx', './components/**/*.tsx'
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      spacing: {
        sm: '8px',
        md: '16px',
        lg: '24px',
        xl: '48px',
       },
       textColor: theme => ({
         ...theme('colors'),
         'primary': '#666666',
         'secondary': '#93949D',
         'danger': '#e3342f',
         'title': "#333333",
         'colorPlayer': '#2BB954',
       }),
       backgroundColor: theme => ({
         ...theme('colors'),
         'primary': '#F5F5F5',
         'secondary': '#EDEDED',
         'danger': '#e3342f',
         'colorPlayer': '#2BB954',
       })
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
