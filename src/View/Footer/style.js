import { makeStyles } from '@mui/styles';

const footerStyle = makeStyles((theme) => ({
  navUl: {
    listStyleType: 'none',
    margin: '0',
    padding: 0,
    backgroundColor: 'transparent',
    display: 'flex',
    fontSize: 10,
    fontStyle: 'normal',
    fontWeight: 400,
  },

  anchor: {
    display: 'block',
    paddingRight: 20,
    textDecoration: 'none',
    transition: '0.5s',
    // color: '#fff',
    fontSize: 12,
    [theme.breakpoints.down('sm')]: {
      textAlign: 'center',
    }
  },
  copyRight: {
    color: '#fff',
    fontSize: 12,
  },
  copyRightSpan: {
    color: '#F96332',
  },
  copyRight1: {
    color: '#2C2C2C',
    fontSize: 12,
  },

  footerContainer: {
    paddingTop: 32,
    paddingBottom: 32,
  },
  footContent: {
    maxWidth: 1100,
    width: '100%',
    margin: '0 auto',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
  },

}))

export default footerStyle