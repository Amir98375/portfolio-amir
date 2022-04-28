import styled from 'styled-components';

export const HeaderContent = styled.div`
    display: flex;
    align-items: center;
    height: 80vh;
    width: 70%;
    text-align: center;
    margin: auto;
    color: ${(props) => props.theme.fontColorSecondary};
    margin-top: 3em;

    @media (max-width: 768px) {
        padding-top: 150px;
    }

    @media (max-width: 640px) {
        padding-top: 280px;
    }

    @media (max-width: 600px) {
        padding-top: 180px;
    }

    @media (max-width: 460px) {
        padding-top: 250px;
    }

    @media (max-width: 445px) {
        padding-top: 300px;
    }
`;

export const H1 = styled.h1`
    font-size: 57px;
    margin-bottom: 20px;
    color: ${(props) => props.theme.fontColorHeader};
    animation-name: fadeInUp;
    animation: 1s cubic-bezier(0.215, 0.61, 0.355, 1) both;
`;

export const TypeWriterH1 = styled.h1`
    height: 90px;
    font-size: 35px;
    margin-bottom: 20px;
    color: ${(props) => props.theme.fontColorHeader};
    animation-name: fadeInUp;
    animation: 1s cubic-bezier(0.215, 0.61, 0.355, 1) both;
`;

export const HeaderButtons = styled.div`
    object-fit: cover;
    justify-content: space-between;
`;

export const P = styled.p`
    font-size: 26px;
    font-weight: 300;
    line-height: 40px;
    margin-bottom: 50px;
`;

export const A = styled.a`
    outline: none;
    border: none;
    color: #fff;
    text-decoration: none;
    border: 1px solid rgb(211, 220, 230);
    background-color: ${(props) => props.theme.fontColorPrimary};
    color: ${(props) => props.theme.cardColor};
    border-radius: 5px 5px 5px 5px;
    padding: 13px 40px;
    &:hover {
        color: #fff;
        background-color: #0556f3;
        border: 1px solid rgb(211, 220, 230);
    }
`;
