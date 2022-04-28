import { makeStyles } from '@mui/styles';

const loginStyle = makeStyles((theme) => ({
  inputStyle: {
    display: 'block',
    width: 255,
    padding: '16px 0 16px 55px',
    background: 'rgba(255, 255, 255, 0.1)',
    borderRadius: '23px',
    borderStyle: 'none',
    // fontFamily: 'Montserrat',
    fontStyle: 'normal',
    fontWeight: 400,
    fontSize: '12px',
    lineHeight: '15px',
    color: '#fff',
    '&::placeholder ': {
      color: '#fff',
    },
    '&:focus-visible': {
      border: 'none',
      outline: 'none',
    }

  },
  inputDiv: {
    position: 'relative',
    width: 310,
    margin: '0 auto 10px',
  },
  inputIcon: {
    position: 'absolute',
    top: 15,
    left: 20,
  },
  formStyle: {
    display: 'block',
    marginTop: 328,
  },
  btnStyle: {
    width: 320,
    marginTop: 75,
    padding: '16px 0 16px',
    backgroundColor: '#F96332',
    border: 'none',
    borderRadius: '24px',
    color: '#fff',
    cursor: 'pointer',
  },
  anchor: {
    color: '#fff',
    fontSize: 12,
    margin: 0,
    cursor: 'pointer',
  },
  subLink: {
    display: 'flex',
    justifyContent: 'space-between',
    width: 320,
    margin: '12px auto 364px',
  }

}))

export default loginStyle