import styled from 'styled-components'

const FooterContainer = styled.div`
    display: flex;
    justify-content: center; 
    position: absolute ;

    padding-top: 8px;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 40px;
    background-color: #1c1c20;

    h2{
    color: rgb(141, 141, 141);
    font-size: 1rem;
    }
    span{
    color: #A24C4E;
    font-size: 1.2rem;
    margin: -0.3rem 0 0 0.5rem;
    }
`;


export const Footer = () => {
    return (
        <FooterContainer>
                <h2>Developed and designed by </h2>
                <span> © Alan Brandan 2024</span>
        </FooterContainer>
    )
}
