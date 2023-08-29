import styled from 'styled-components'

export const VideoListElement = styled.li`
    list-style-type: none;
    padding: 0px;
    width: ${props => props.sidebar === "true" ? props.width + 45 : props.width + 10}px;
    margin-bottom: 23px;

    @media screen and (min-width: 421px) and (max-width: 1150px) {
        width: ${props => props.sidebar === "true" ? props.width + 20 : props.width + 5}px;
    }

    @media screen and (max-width: 480px) {
        width: 100%;
    }
`

export const VideoThumbnail = styled.img`
    width: 100%;
    height: ${props => props.sidebar === "true" ? props.height + 18 : props.height + 8}px;
    border-radius: 13px;

    &:hover{
        border-radius: 0px;
        transition: all 0.4s;
    }

    @media screen and (max-width: 1150px) {
        height: ${props => props.sidebar === "true" ? props.height + 14 : props.height + 8}px;
    }

    @media screen and (max-width: 480px) {
        height: ${props => props.height + 30}px;
    }
`

export const VideoContentContainer = styled.div`
    width: 100%;
    padding: 5px;
    margin-top: 0px;
`

export const VideoTitlePara = styled.p`
    font-family: sans-serif;
    color: #ffffff;
    font-weight: 500;
    font-size: 15px;
    line-height: 1.5;
    margin-top: 0px;
    margin-bottom: 0px;
`

export const VideoChannelTitle = styled.p`
    font-family: sans-serif;
    color: #bab6ab;
    font-weight: 500;
    font-size: 14.5px;
    margin-right: 4px;
`

export const ChannelTitleContainer = styled.div`
   display: flex;
   align-items: center;
   margin-top: -5px;
   margin-bottom: 0px;
`

export const VideoPublishPara = styled(VideoChannelTitle)`
    font-size: 14px;
    margin-top: -10px;
`