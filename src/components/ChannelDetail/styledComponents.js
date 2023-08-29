import styled from 'styled-components'

export const ChannelDetailContainer = styled.div`
    background-color: #0f0f0f;
    width: 100%;
    height: 92vh;
    display: flex;
    align-items: center;

    @media screen and (max-width: 1000px) {
        height: 85vh;
    }
`

export const ChannelDetailBanner = styled.img`
    width: 100%;
    height: 27%;

    @media screen and (max-width: 480px) {
        height: 20%;
    }
`

export const ChannelDetailProfileContainer = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    padding: 25px 55px;
    border-bottom: solid 1px hsl(0, 0%, 18.82%);

    @media screen and (max-width: 480px) {
        flex-direction: column;
        padding: 15px 10px;
    }
`

export const ChannelDetailProfileImage = styled.img`
    border-radius: 50%;
    height: 125px;
    width: 125px;

    @media screen and (max-width: 480px) {
        height: 80px;
        width: 80px;
    }
`

export const ChannelDetailProfileRightContainer = styled.div`
    margin-left: 20px;

    @media screen and (max-width: 480px) {
        display: flex;
        flex-direction: column;
        align-items: center;
        margin-top: 7px;
        text-align: center;
    }
`

export const ChannelDetailTitleContainer = styled.div`
    display: flex;
    align-items: center;
    padding: 0px;
    margin: 0px;
    margin-bottom: 7px;
`

export const ChannelDetailTitle = styled.h1`
    font-family: sans-serif;
    color: #f1f5f9;
    font-weight: 500;
    font-size: 25px;
    margin: 0px;
    margin-right: 8px;

    @media screen and (max-width: 480px) {
        font-size: 22px;
        font-weight: 600;
    }
`

export const ChannelDetailProfilePara = styled.p`
    font-family: sans-serif;
    color: #bab6ab;
    margin: 0px;
    font-size: 14.8px;
    margin-right: 8px;
    margin-bottom: 8px;

    @media screen and (max-width: 480px) {
        font-size: 14px; 
    }
`

export const ChannelDetailScrollContainer = styled.div`
    width: ${props => props.width === "true" ? 'calc(100% - 243px)' : '100%'};
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    height: 100%;
    overflow-y: auto;

    @media screen and (min-width: 421px) and (max-width: 1190px) {
        width: ${props => props.width === "true" ? '100%' : 'calc(100% - 243px)'};
    }

    @media screen and (max-width: 480px) {
        width: 100%;

        &::-webkit-scrollbar{
            display: none;
        }

        -ms-overflow-style: none;
        scrollbar-width: none;
    }
`

export const ChanndelDetailVideoListContainer = styled.ul`
    padding: 15px 25px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: flex-start;
    width: 100%;

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
        margin-top: 10px;
    }
`