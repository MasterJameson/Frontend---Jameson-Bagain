import { makeStyles } from '@mui/styles';

const useStyles = makeStyles((theme) => ({
  colDiv: {
    position: 'relative',
    width: 240,
    textAlign: 'left',
    marginBottom: 60,
    paddingLeft: 50,
  },
  colIcon: {
    position: 'absolute',
    top: -3,
    left: 0,
  },
  colTitle: {
    color: '#fff',
    fontSize: 18,
    marginBottom: 15,
  },
  colDesc: {
    color: '#fff',
    fontSize: 15,
    lineHeight: '24px',
  },
  signUpMainDiv: {
    display: 'flex',
    width: '100%',
    maxWidth: 860,
    margin: '180px auto 280px',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  signUpRight: {
    boxShadow: '0px 5px 25px rgba(0, 0, 0, 0.2)',
    width: 350,
    // height: 544,
    backgroundColor: '#fff',
    borderRadius: 3
  },
  colTitleRight: {
    width: '100%',
    margin: '30px auto 20px',
    fontSize: 24
  },
  listIcon: {
    display: 'flex',
    justifyContent: 'center',
    marginBottom: 31,
    '&>li': {
      paddingRight: 14,
    }
  },
  subTitleRight: {
    marginBottom: 20,
    fontSize: 18,
    color: '#9A9A9A',
  },
  inputDiv: {
    position: 'relative',
    width: 310,
    margin: '0 auto 20px',

  },
  inputIcon: {
    position: 'absolute',
    top: 10,
    left: 20,
  },
  inputStyle: {
    display: 'block',
    width: '100%',
    padding: '11px 0 10px 54px',
    border: '1px solid #E3E3E3',
    boxSizing: 'border-box',
    borderRadius: '18px',
    fontStyle: 'normal',
    fontWeight: 400,
    fontSize: '12px',
    lineHeight: '15px',
    '&::placeholder ': {
      color: 'rgba(44, 44, 44, 0.5)',
    }, 
    '&:focus-visible': {
      border: 'none',
      outline: 'none',
    }
  },
  btnStyle: {
    width: 177,
    marginTop: 58,
    padding: '17px 0 16px',
    backgroundColor: '#F96332',
    fontSize: 14,
    border: 'none',
    borderRadius: '24px',
    color: '#fff',
    cursor: 'pointer',
  },
  disablebBtnStyle: {
    width: 177,
    marginTop: 58,
    padding: '17px 0 16px',
    backgroundColor: 'gray',
    fontSize: 14,
    border: 'none',
    borderRadius: '24px',
    color: '#fff',
  },
  inputCheck: {
    border: '1px solid #E3E3E3',
    boxSizing: 'border-box',
    borderRadius: '3px',
    height: 26,
    width: 26,
  },

}))

export default useStyles