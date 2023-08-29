import styled from 'styled-components'

export const FooterContainer = styled.div`
    width: 100%;
    background-color: #0f0f0f;
    display: none;
    height: 7vh;
    justify-content: space-between;
    align-items: center;
    padding: 0px 10px;

    @media screen and (max-width: 1000px) {
        display: flex;
    }
`

export const FooterSubContainer = styled.div`
   display: flex;
   flex-direction: column;
   align-items: center;
   align-items: center;
   padding: 0px;
   margin: 0px;
`

export const FooterPara = styled.p`
   color: #f1f5f9;
   font-family: sans-serif;
   font-weight: 400;
   font-size: 14px;
   margin: 0px;
   margin-top: 2px;
`