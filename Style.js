// theme.js or theme.ts
import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 641,    // Tailwind's sm
      md: 769,    // Tailwind's md
      lg: 1025,   // Tailwind's lg
      xl: 1281,   // Tailwind's xl
      '2xl': 1537
    },
  },
});

export default theme;


export const IconButtonColors={
    border: 1,
    borderColor: '#edf0f0',
    borderRadius: '8px',
    padding: '12px',
    '&:hover': {
      backgroundColor: '#e0e0e0',
    },
}

export const grayBg={ bgcolor: '#F8FAFC', p: 2, borderRadius: 2,mt:1 }


export const SearchQuickFilter={
  '& .MuiInputBase-root': {

    paddingLeft: '8px',
    paddingRight: '8px',
    height: '40px',
  },
  '& .MuiOutlinedInput-notchedOutline': {
    borderColor: '#', // default border
  },
  '& .Mui-focused .MuiOutlinedInput-notchedOutline': {
    borderColor: 'none', // focus border color
    border:"none"
  },
  '& input': {
    fontSize: '14px',
  },
}

export const ExportButtonStyle={
                  border:1,
                  borderColor: '#edf0f0',
                  borderRadius: '8px',
                  backgroundColor: '#F9FAFB',
                  color: "gray",
                  px: '8px',
                  py: '3px',
                  minWidth: 'unset',
                  minHeight: 'unset',
                }

export const buttonstyle1={
  bgcolor:"#4318D1",
  color:'white',
  py:1,
  px:2,
  borderRadius: '8px',
}
export const buttonstyle2={
  bgcolor:"#BB3E00",
  color:'white',
  py:1,
  px:2,
  borderRadius: '8px',
}


export const dropdownstyle1={
  minWidth: 150,
  '& .MuiOutlinedInput-root': {
  borderRadius: 2,
  backgroundColor: '#f9f9f9',
  '& fieldset': { borderColor: '#ccc' },
  '&:hover fieldset': { borderColor: '#888' },
  '&.Mui-focused fieldset': { borderColor: '#E2E8F0' },
  },
}