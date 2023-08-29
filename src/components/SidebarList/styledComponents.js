import styled from 'styled-components'

export const SidebarListElement = styled.li`
    list-style-type: none;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    padding: 0px 13px;
    width: 100%;
    border-radius: 10px;
    height: 42px;

    background-color: ${props => props.active === "true" ? 'rgba(255,255,255,0.1)' : ""};

    &:hover{
        background-color: ${props => props.active === "true" ? 'rgba(255,255,255,0.2)' : 'rgba(255,255,255,0.1)'};
    }
`

export const SidebarPara = styled.p`
    color: #f1f5f9;
    font-family: sans-serif;
    font-size: 15px;
    font-weight: 500;
    margin-left: 21px;
`