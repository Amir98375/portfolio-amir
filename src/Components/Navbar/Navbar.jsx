import React from 'react';
import { Toggle } from './Toggle';
import { NavBarDiv, NavItems, NavItem, Logo } from './Styles';
import { Link } from 'react-scroll';
import { animateScroll as scroll } from 'react-scroll';

// import useMediaQuery from "react-use-media-query-hook";
// import { slide as Menu } from 'react-burger-menu'
// import './Navbar.module.css'
// import { red } from "@material-ui/core/colors";

const menus = [
    { id: 0, name: 'Home', css: 'home' },
    { id: 1, name: 'About', css: 'about' },
    { id: 2, name: 'Skills', css: 'skills' },
    { id: 3, name: 'Projects', css: 'projects' },
    { id: 4, name: 'Contact', css: 'contact' },
];
// var styles = {
//   bmBurgerButton: {
//     position: 'fixed',
//     width: '36px',
//     height: '30px',
//     right: '36px',
//     top: '36px'
//   },
//   bmBurgerBars: {
//     background: '#373a47'
//   },
//   bmBurgerBarsHover: {
//     background: '#a90000'
//   },
//   bmCrossButton: {
//     height: '24px',
//     width: '24px'
//   },
//   bmCross: {
//     background: '#bdc3c7'
//   },
//   bmMenuWrap: {
//     position: 'fixed',
//     height: '100%',
//     right:"0%"
//   },
//   bmMenu: {
//     background: '#373a47',
//     padding: '2.5em 1.5em 0',
//     fontSize: '1.15em'
//   },
//   bmMorphShape: {
//     fill: '#373a47'
//   },
//   bmItemList: {
//     color: '#b8b7ad',
//     padding: '0.8em'
//   },
//   bmItem: {
//     display: 'inline-block'
//   },
//   bmOverlay: {
//     background: 'rgba(0, 0, 0, 0.3)'
//   }
// }

function Navbar({ themeToggler }) {
    // const isMobile = useMediaQuery("(max-width: 400px)");
    // const isTablet = useMediaQuery("(min-width: 401px) and (max-width: 875px)");
    // const isDesktop = useMediaQuery("(min-width: 876px) and (max-width: 1024px)");
    // const isLargeDesktop = useMediaQuery("(min-width: 1025px)");
    // const [open, setOpen] = useState(false);
    // useEffect(() => {
    //   if ((isDesktop || isLargeDesktop) && open) {
    //     setOpen(false, isDesktop);
    //   }
    //   // eslint-disable-next-line
    // }, [isLargeDesktop, isDesktop]);
    // const [opened,setOpened] = useState(false);
    // const isOpened = ()=>{
    //   setOpened(!opened)
    //   console.log(opened)
    // }
    return (
        <NavBarDiv>
            <Logo onClick={() => scroll.scrollToTop()}>
                <span class='grey-color'> &lt;</span>
                <span class='logo-name'>Ashwini Nagargoje</span>
                <span class='grey-color'>/&gt;</span>
            </Logo>

            <NavItems>
                {menus.map((item) => (
                    <Link
                        key={item.id}
                        activeClass='active'
                        to={item.css}
                        spy={true}
                        smooth={true}
                        duration={500}
                    >
                        <NavItem key={item.id}>{item.name}</NavItem>
                    </Link>
                ))}
            </NavItems>
            <Toggle themeToggler={themeToggler} />
        </NavBarDiv>
    );
}

export default Navbar;
