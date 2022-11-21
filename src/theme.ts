import { createTheme } from '@mui/material'

export const theme = createTheme({
  components: {
    MuiCssBaseline: {
      styleOverrides: `
            ::-webkit-scrollbar{
                width: 5px;
            },
            ::-webkit-scrollbar-thumb {
                background-color: #252F3D;
                border-radius: 10px;
            }
            `,
    },
  },
  palette: {
    primary: {
      main: '#252F3D',
      contrastText: '#fff',
    },
    secondary: {
      main: '#FA9900',
      contrastText: '#fff',
    },
    text: {
      primary: '#6F7073',
    },
  },
})
