import styled from 'styled-components'

export const HomeContainer = styled.div`
    height: 92vh;
    background-color: #0f0f0f;
    width: 100%;
    display: flex;
    align-items: center;

    @media screen and (max-width: 1000px) {
        height: 85vh;
    }
`

export const HomeVideoListContainer = styled.ul`
    padding: 15px 25px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: flex-start;
    height: 93%;
    width: 100%;
    overflow-y: auto;

    @media screen and (max-width: 1190px) {
        padding: 15px;
    }

    @media screen and (max-width: 480px) {
        padding: 0px;
        margin: 0px;
        flex-wrap: nowrap;
        flex-direction: column;
        justify-content: flex-start;
        align-items: center;

        &::-webkit-scrollbar{
            display: none;
        }

        -ms-overflow-style: none;
        scrollbar-width: none;
    }
`

export const LoaderContainer = styled.div`
    min-height: 93%;
    width: 100%;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
`

export const HorizontalScrollContainer = styled.div`
    width: ${props => props.width === "true" ? 'calc(100% - 243px)' : '100%'};
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    height: 100%;

    @media screen and (min-width: 421px) and (max-width: 1190px) {
        width: ${props => props.width === "true" ? '100%' : 'calc(100% - 243px)'};
    }

    @media screen and (max-width: 480px) {
        width: 100%;
    }
`

export const RouteHeading = styled.h1`
    font-family: sans-serif;
    color: #f1f5f9;
    font-weight: 600;
    font-size: 28px;
    background-image: linear-gradient(90deg, rgba(245,5,5,1) 0%, rgba(204,41,70,1) 49%, rgba(245,5,5,1) 100%);
    -webkit-background-clip: text;
    color: transparent;

    @media screen and (max-width: 480px) {
        font-size: 24px;
    }
`

export const RouteHeadingContainer = styled.div`
    width: 100%;
    height: 7%;
    display: flex;
    margin: 0px;
    padding: 0px 25px;
    align-items: center;
    background-color: transparent;
`

export const FailureViewImage = styled.img`
    width: 350px;

    @media screen and (max-width: 480px) {
        width:80%;
    }
`

export const FailureViewHeading = styled.h1`
    font-family: sans-serif;
    color: #f1f5f9;
    font-weight: 500;
    font-size: 28px;
    margin-bottom: 0px;

    @media screen and (max-width: 480px) {
        font-size: 25px;
    }
`

export const FailureViewPara = styled.p`
    font-family: sans-serif;
    color: #bab6ab;
    margin-top: 7px;
    font-size: 15px;
`

export const FailureViewButton = styled.button`
    cursor: pointer;
    outline: none;
    border-width: 0px;
    background-color: red;
    padding: 10px;
    border-radius: 7px;
    font-family: sans-serif;
    color: #f1f5f9;
    font-weight: 500;
    width: 75px;
`