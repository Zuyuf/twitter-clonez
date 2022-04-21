module.exports = {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        ChripExtendedHeavy: ['ChripExtendedHeavy', 'sans-serif'],
        ChripBold: ['ChripBold', 'sans-serif'],
        ChripRegular: ['ChripRegular', 'sans-serif'],
      },
      fontSize: {
        xxxs: '.5rem',
        xxs: '.7rem',
        xbase: '.9rem',
      },
      colors: {
        //   t_blue: '#1DA1F2',
        //   t_black: '#14171A',
        //   t_dk_grey: '#657786',
        //   t_lt_grey: '#AAB8C2',
        //   t_xlt_grey: '#E1E8ED',
        //   t_xxlt_grey: '#F5F8FA',
        td_blue: '#1d9bf0',
        td_dark_blue: '#0D84D3',
        td_black: '#000000',
        td_seprator: '#2f3336',
        td_white: '#ffffff',
        td_dk_grey: '#71767b',
        td_dk_grey2: '#536471',
        td_lt_grey: '#d6d9db',
        td_xlt_grey: '#e7e7e6',
      },
    },
  },
  plugins: [],
};
