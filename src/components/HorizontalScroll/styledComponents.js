import styled from 'styled-components'

export const SliderItemButton = styled.button`
   color: ${props => props.active === "true" ? "black" : "#f1f5f9"};
   background-color: ${props => props.active === "true" ? "#f1f5f9" : 'rgba(255,255,255,0.1)'};
   border-width: 0px;
   padding: 7px 12px;
   border-radius: 8px;
   font-family: sans-serif;
   font-size: 15px;
   margin-right: 8px;
   cursor: pointer;
   outline: none;

   &:hover{
    background-color: ${props => props.active === "true" ? '#f1f5f9' : '#444647'};
}
`