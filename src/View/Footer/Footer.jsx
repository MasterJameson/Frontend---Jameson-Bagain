import React from 'react'
import { Link } from 'react-router-dom';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles((theme) => ({
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
    color: '#fff',
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
  footerContaner: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingBottom: 32,
  }

}))
const Footer = () => {
  const classes = useStyles()

  return (
    <div className={classes.footerContaner}>
      <ul className={classes.navUl}>
        <li>
          <Link to={''} className={classes.anchor}>CREATIVE TIM</Link>
        </li>
        <li>
          <Link to={'about'} className={classes.anchor}>ABOUT US</Link>
        </li>
        <li>
          <Link to={'blog-post'} className={classes.anchor}>BLOG</Link>
        </li>
      </ul>
      <p className={classes.copyRight}>© 2019, Designed by <span className={classes.copyRightSpan}>Invision</span>. Coded by <span className={classes.copyRightSpan}>Creative Tim</span>.</p>
    </div>
  )
}

export default Footer