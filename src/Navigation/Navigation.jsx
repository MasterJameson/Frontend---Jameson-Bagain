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
    alignItems: 'center',
  },
  anchor: {
    display: 'block',
    padding: '0 36px 0 0',
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
  },
  dropDownSpan: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  dropDownContent: {
    position: 'absolute',
    top: '25px',
    left: '30px',
    width: 'fit-content',
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
    if (location.pathname !== '/login') {
      getApp().classList.remove('login-bg')
    }
  })


  return (
    <div className={classes.navContainer}>
      <p className={classes.title}><span style={{ paddingRight: 10 }}><img src={linesGroup} alt="" /></span>NOW UI KIT PRO</p>
      <ul className={classes.navUl}>

        <li>
          <div className={classes.dropDownDiv} onClick={() => setShowComponents(showComponents ? false : true)}>

            <span className={classes.dropDownSpan}><img src={componentsIcon} alt="" /></span>
            <p className={classes.dropDownStlye}>COMPONENTS</p>

            <span className={classes.dropDownSpan}><img src={dropDownIcon} alt="" /></span>
            {showComponents &&
              <div className={classes.dropDownContent}>
                <span style={{ marginBottom: 10, display: 'block', }}>
                  <Link to={'about'} className={classes.anchor}>About</Link>
                </span>
                <span>
                  <Link to={'blog-post'} className={classes.anchor}>Blog Post</Link>
                </span>
              </div>
            }
          </div>
        </li>
        <li>
          <div className={classes.dropDownDiv} onClick={() => setShowSection(showSection ? false : true)}>

            <span className={classes.dropDownSpan}><img src={sectionIcon} alt="" /></span>
            <p className={classes.dropDownStlye}>SECTIONS</p>

            <span className={classes.dropDownSpan}><img src={dropDownIcon} alt="" /></span>
            {showSection &&
              <div className={classes.dropDownContent}>
                <span style={{ marginBottom: 10, display: 'block', }}>
                  <Link to={'about'} className={classes.anchor}>About</Link>
                </span>
                <span>
                  <Link to={'blog-post'} className={classes.anchor}>Blog Post</Link>
                </span>
              </div>
            }
          </div>
        </li>
        <li>
          <div className={classes.dropDownDiv} onClick={() => setShowSample(showSample ? false : true)}>
            <span className={classes.dropDownSpan}><img src={sampleIcon} alt="" /></span>
            <p className={classes.dropDownStlye}>EXAMPLES</p>
            <span className={classes.dropDownSpan}><img src={dropDownIcon} alt="" /></span>
            {showSample &&
              <div className={classes.dropDownContent}>
                <span style={{ marginBottom: 10, display: 'block', }}>
                  <Link to={'about'} className={classes.anchor}>About</Link>
                </span>
                <span>
                  <Link to={'blog-post'} className={classes.anchor}>Blog Post</Link>
                </span>
              </div>
            }
          </div>
        </li>
        <li>
          <button type="button" className={classes.buyBtn} onClick={() => navigate('')}>Buy Now</button>
        </li>

      </ul >
    </div>

  )
}

export default Navigation;