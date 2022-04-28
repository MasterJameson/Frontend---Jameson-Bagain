import React, { useEffect } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { makeStyles } from '@mui/styles';
import getApp from '../View/getElement';
import sampleIcon from '../images/icon/sampleIcon.png'
import dropDownIcon from '../images/icon/dropDownIcon.png'
import sectionIcon from '../images/icon/sectionIcon.png'
import componentsIcon from '../images/icon/componentsIcon.png'
import linesGroup from '../images/icon/linesGroup.png'


const useStyles = makeStyles((theme) => ({
  navUl: {
    listStyleType: 'none',
    margin: 0,
    backgroundColor: 'transparent',
    display: 'flex',
    fontSize: 10,
    fontStyle: 'normal',
    fontWeight: 400,
    justifyContent: 'center',
    alignItems: 'baseline',
  },
  anchor: {
    display: 'block',
    padding: '0 36px 10px 0',
    textDecoration: 'none',
    transition: '0.5s',
    color: '#fff',
    fontSize: 12,

    [theme.breakpoints.down('sm')]: {
      textAlign: 'center',
    }
  },
  dropDownStlye: {
    paddingLeft: 15,
    paddingRight: 5,
    color: '#fff',
    fontSize: 12,

  },
  dropDownDiv: {
    position: 'relative',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    cursor: 'pointer',
    marginRight: 36,
    marginBottom: 10,
  },
  dropDownSpan: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  dropDownContent: {
    position: 'absolute',
    minWidth: 160,
    zIndex: 1,
  },
  buyBtn: {
    width: 98,
    backgroundColor: '#F96332',
    border: 'none',
    borderRadius: 4,
    cursor: 'pointer',
    color: '#fff',
    padding: ' 16px 0',
  },
  title: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: 12,
    color: '#fff',
    cursor: 'pointer',
  },
  navContainer: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingTop: 33,
  },
}))

const Navigation = () => {
  const classes = useStyles()
  const location = useLocation();
  const navigate = useNavigate();

  const [showSample, setShowSample] = React.useState(false);
  const [showSection, setShowSection] = React.useState(false);
  const [showComponents, setShowComponents] = React.useState(false);

  useEffect(() => {
    if (getApp() !== null) {
      if (location.pathname !== '/login' && location.pathname !== '/register') {
        getApp().classList.remove('login-bg')
        getApp().classList.add('landing-bg')
      } else {
        getApp().classList.remove('landing-bg')
      }
    } else {
      getApp()
    }
  })


  return (
    <div className={classes.navContainer}>
      <p className={classes.title} onClick={() => navigate('')}><span style={{ paddingRight: 10 }}><img src={linesGroup} alt="" /></span>NOW UI KIT PRO</p>
      <ul className={classes.navUl}>
        <li>
          <div className={classes.dropDownDiv} onClick={() => setShowComponents(showComponents ? false : true)}>

            <span className={classes.dropDownSpan}><img src={componentsIcon} alt="" /></span>
            <p className={classes.dropDownStlye}>COMPONENTS</p>

            <span className={classes.dropDownSpan}><img src={dropDownIcon} alt="" /></span>
          </div>
          {showComponents &&
            <div className={classes.dropDownContent} onMouseLeave={() => setShowComponents(false)}>
              <span style={{ display: 'block', }}>
                <Link to={'login'} className={classes.anchor}>Login</Link>
              </span>
              <span>
                <Link to={'register'} className={classes.anchor}>Signup</Link>
              </span>
            </div>
          }
        </li>
        <li>
          <div className={classes.dropDownDiv} onClick={() => setShowSection(showSection ? false : true)}>

            <span className={classes.dropDownSpan}><img src={sectionIcon} alt="" /></span>
            <p className={classes.dropDownStlye}>SECTIONS</p>

            <span className={classes.dropDownSpan}><img src={dropDownIcon} alt="" /></span>
          </div>
          {showSection &&
            <div className={classes.dropDownContent} onMouseLeave={() => setShowSection(false)}>
              <span style={{ display: 'block', }}>
                <Link to={'contact'} className={classes.anchor}>Contact</Link>
              </span>
              <span>
                <Link to={'blog-post'} className={classes.anchor}>Blog Post</Link>
              </span>
            </div>
          }
        </li>
        <li>
          <div className={classes.dropDownDiv} onClick={() => setShowSample(showSample ? false : true)}>
            <span className={classes.dropDownSpan}><img src={sampleIcon} alt="" /></span>
            <p className={classes.dropDownStlye}>EXAMPLES</p>
            <span className={classes.dropDownSpan}><img src={dropDownIcon} alt="" /></span>
          </div>
          {showSample &&
            <div className={classes.dropDownContent} onMouseLeave={() => setShowSample(false)} >
              <span style={{ display: 'block', }}>
                <Link to={'about'} className={classes.anchor}>About</Link>
              </span>
              <span>
                <Link to={'blog-post'} className={classes.anchor}>Blog Post</Link>
              </span>
            </div>
          }
        </li>
        <li>
          <button type="button" className={classes.buyBtn} onClick={() => navigate('')}>Buy Now</button>
        </li>

      </ul >
    </div>

  )
}

export default Navigation;