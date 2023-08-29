import styled from 'styled-components'

export const VideoDetailContainer = styled.div`
height: 92vh;
background-color: #0f0f0f;
width: 100%;
display: flex;
overflow-y: auto;

@media screen and (min-width: 421px) and (max-width: 1000px) {
    height: 85vh;
}

@media screen and (max-width: 480px) {
    flex-direction: column;
    min-height: 85vh;
    max-height: 85vh;

    &::-webkit-scrollbar{
        display: none;
    }

    -ms-overflow-style: none;
    scrollbar-width: none;
}
`

export const VideoDetailLeftContainer = styled.div`
    height: 100%;
    display: flex;
    flex-direction: column;
    width: 69%;
    padding: 6px 23px;

    @media screen and (max-width: 480px) {
        width: 100%;
        padding: 0px;
    }
`

export const VideoDetailRightContainer = styled.div`
    height: 100%;
    display: flex;
    flex-direction: column;
    padding: 6px 0px;
    margin-right: 23px;
    width: 31%;
    

    @media screen and (max-width: 480px) {
        display: none;
    }
`

export const VideoPlayerContainer = styled.div`
   padding: 0px;
   margin: 0px;
   height: 540px;
   width: 100%;
   margin-top: 5px;
   flex-shrink: 0;

   @media screen and (max-width: 480px) {
       margin: 0px;
       height: 250px;    
   }
`

export const VideoDetailTitle = styled.h1`
   font-family: sans-serif;
   color: #f1f5f9;
   font-weight: 600;
   font-size: 19px;
   line-height: 1.4;

   @media screen and (max-width: 480px) {
      font-size: 16.8px;
   }
`

export const VideoDetailChannelContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    margin: 0px;

    @media screen and (max-width: 480px) {
        flex-direction: column;
        justify-content: flex-start;
        align-items: flex-start;
    }
`

export const VideoDetailChannelNameContainer = styled.div`
    display: flex;
    flex-direction: column;
    padding: 0px;
    margin: 0px;
`

export const VideoDetailBottomContainer = styled.div`
    width: 100%;
    
    @media screen and (max-width: 480px) {
        padding-right: 8px;
        padding-left: 8px;
     }
`

export const ChannelNamePara = styled.p`
    font-size: 15.5px;
    color: #f1f5f9;
    font-family: sans-serif;
    font-weight: 600;
    margin: 0px;
`

export const SubscribersPara = styled(ChannelNamePara)`
    font-size: 12.5px;
    color: #bab6ab;
    font-weight: 500;
    margin: 0px;
    margin-top: 5px;
`

export const ViewsPara = styled(SubscribersPara)`
    font-size: 13px;
    color: #f1f5f9;
    margin-top: 15px;
`

export const VideoDetailChannelRightContainer = styled.div`
   display: flex;
   align-items: center;
   padding: 0px;
   margin: 0px;

   @media screen and (max-width: 480px) {
    margin-top: 9px;
   }
`

export const IconButton = styled.button`
    cursor: pointer;
    outline: none;
    background-color: rgba(255,255,255,0.1);
    display: flex;
    align-items: center;
    border-radius: 15px;
    border-width: 0px;
    color: #f1f5f9;
    padding: 0px 8px;
    font-family: sans-serif;
    font-weight:500;
    margin-right: 13px;
    height: 33px;
    font-size: 15.2px;
    justify-content: space-between;

    @media screen and (max-width: 480px) {
        font-size: 14px;
    }

    &:hover{
        background-color: #323435;
    }
`

export const LikeButton = styled(IconButton)`
    color: ${props => props.liked === "true" ? "#24a0ed" : "#f1f5f9"};

    &:hover{
        background-color: #323435;
    }
`

export const VideoDetailDescriptionContainer = styled.div`
    width: 100%;
    background-color: rgba(255,255,255,0.1);
    padding: 13px;
    border-radius: 6px;
    margin-top: 2px;
    cursor: pointer;
    margin-bottom: 10px;
    overflow-x: hidden;

    &:hover{
        background-color: #323435;
    }
`

export const VideoDescriptionPara = styled.p`
   font-family: sans-serif;
   color: #f1f5f9;
   margin: 0px;
   font-size: 15px;
   line-height: 1.4;

   @media screen and (max-width: 480px) {
        font-size: 14.5x;
   }
`

export const RelatedVideoContainer = styled.ul`
    height: 93%;
    width: 100%;
    padding-left: 0px;
    margin: 0px;
`
