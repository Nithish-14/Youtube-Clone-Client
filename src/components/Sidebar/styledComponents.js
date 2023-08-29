import styled from 'styled-components'

export const SidebarContainer = styled.div`
    padding: 0px;
    background-color: #0f0f0f;
    padding-left: 4px;
    height: 92vh;
    width: ${props => props.width === "true" ? "243px" : 0};
    margin: 0px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    overflow: hidden;
    transition: width 0.2s;

    @media screen and (max-width: 1190px) {
        width: ${props => props.width === "true" ? 0 : "243px"};
    }

    &:hover{
        overflow-y: scroll;
    }
    
    @media screen and (max-width: 1000px) {
        height: 85vh;
    }

    @media screen and (max-width: 480px) {
        display: none;
    }
`

export const SidebarListContainer = styled.ul`
    padding: 12px;
    padding-bottom: 16px;
    margin: 0px;
    width: 235px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border-bottom: solid 1px rgba(255,255,255,0.2);
`


export const SidebarHeading = styled.h2`
    color: #f1f5f9;
    font-family: sans-serif;
    font-size: 17px;
    font-weight: 500;
    margin-top: 5px;
    align-self: flex-start;
    padding-left: 13px;
`

export const SidebarBottomPara = styled.p`
    font-family: sans-serif;
    font-size: 13px;
    padding-left: 14px;
    font-weight: 600;
    align-self: flex-start;
    color: #a89f9e;
    margin-top: 5px;
    flex-shrink: 0;
    transition: width 0.2s;
    line-height: 1.4;
`

export const CopyRightPara = styled(SidebarBottomPara)`
   color: #757272;
   font-weight: 500;
   font-size: 13px;
`

export const SpanElement = styled.span`
    margin-right: 3px;
`