import styled from 'styled-components';

const Logo = styled.div`
    //   font-family: "Philosopher", sans-serif;

    color: ${(props) => props.theme.fontColorPrimary};
    &:hover {
        color: ${(props) => props.theme.socialIconColor};
    }

    span:nth-child(1) {
        font-weight: bold;
        // font-size: 2rem;
        font-size: 24px;
    }
    span:nth-child(2) {
        font-family: 'Agustina Regular';
        font-weight: bold;
        font-variant-ligatures: no-common-ligatures;
        -webkit-font-variant-ligatures: no-common-ligatures;
        padding: 0 10px;
        // font-size: 1.2rem;
        font-size: 24px;
        cursor: pointer;
        color: ${(props) => props.theme.fontColorPrimary};
        letter-spacing: 0.2em;
    }
    span:nth-child(3) {
        font-weight: bold;
        // font-size: 2rem;
        font-size: 24px;
    }
    line-height: 1.5em;

    @media (max-width: 768px) {
        span:nth-child(1) {
            font-size: 24px;
        }
        span:nth-child(2) {
            font-size: 24px;
        }
        span:nth-child(3) {
            font-size: 24px;
        }
        line-height: 1.5em;
    }
    @media (max-width: 640px) {
        span:nth-child(1) {
            font-size: 20px;
        }
        span:nth-child(2) {
            font-size: 20px;
        }
        span:nth-child(3) {
            font-size: 20px;
        }
        line-height: 1.2em;
    }

    @media (max-width: 445px) {
        span:nth-child(1) {
            font-size: 16px;
        }
        span:nth-child(2) {
            font-size: 16px;
        }
        span:nth-child(3) {
            font-size: 16px;
        }
        line-height: 1.1em;
    }
`;

const NavBarDiv = styled.div`
    background: ${(props) => props.theme.backgroundColor};
    position: fixed;
    width: 100%;
    top: 0px;
    box-shadow: 0 5px 20px rgba(0, 0, 0, 0.1);
    padding-left: 50px;
    padding-right: 50px;
    justify-content: space-evenly;
    align-items: center;
    display: flex;
    height: 68px;

    @media (max-width: 768px) {
        padding-left: 20px;
        padding-right: 20px;
    }

    @media (max-width: 640px) {
        /* padding-left: 10px;
        padding-right: 10px; */

        // width: 100%;
        display: flex;
        // left: -25px;
        flex-direction: column;
        padding-top: 10px;
        gap: 10px;

        padding-left: 0px;
        padding-right: 0px;

        & > div:nth-child(3) {
            position: absolute;
            z-index: 1;
            top: 10px;
            right: 10px;
        }

    }

    @media (max-width: 445px) {
        display: flex;
        // left: -25px;
        flex-direction: column;
        padding-top: 10px;
        gap: 10px;

        padding-left: 0px;
        padding-right: 0px;

        & > div:nth-child(3) {
            position: absolute;
            z-index: 1;
            top: 10px;
            right: 10px;
        }
    }
`;

export const NavBarDiv2 = styled.div`
    background: ${(props) => props.theme.backgroundColor};
    position: fixed;
    width: 100%;
    top: 0px;
    box-shadow: 0 5px 20px rgba(0, 0, 0, 0.1);
    /* padding-left: 50px; */
    /* padding-right: 50px; */
    /* display: flex; */
    height: 68px;
    /* align-items: center; */
    /* justify-content: space-between; */
    @media (max-width: 460px) {
        /* margin-left: -35px; */
        width: 90%;

        /* padding : 0px; */
    }
`;

const NavItems = styled.ul`
    display: flex;
`;

const NavItem = styled.li`
    cursor: pointer;
    color: ${(props) => props.theme.fontColorPrimary};
    font-weight: 500;
    font-size: 18px;
    padding: 0 15px;
    display: block;
    &:hover {
        color: ${(props) => props.theme.socialIconColor};
    }
    @media (max-width: 640px) {
        font-size: 16px;
        padding: 0 5px;
    }

    @media (max-width: 445px) {
        font-size: 14px;
        padding: 0 5px;
    }
`;

export { NavBarDiv, NavItems, NavItem, Logo };
