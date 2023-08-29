import styled from 'styled-components'

export const RelatedVideoChildContainer = styled.li`
    display: flex;
    list-stlye-type: none;
    width: 100%;
    height: 110px;
    margin-bottom: 6px;
`

export const RelatedVideoImage = styled.img`
    width: 40%;
    border-radius: 8px;
    height: 100%;
`

export const RelatedVideoContentContainer  = styled.div`
    width: 60%;
    margin-left: 8px;
`

export const RelatedVideoTitle = styled.p`
    font-family: sans-serif;
    color: #f1f5f9;
    font-weight: 600;
    font-size: 14px;
    margin-top: 5px;
    margin-bottom: 7px;
    line-height: 1.4;
`

export const RelatedVideoChannelTitleContainer = styled.div`
    display: flex;
    align-items: center;
    margin: 0px;
    padding: 0px;
`

export const RelatedVideoChannelTitle = styled.p`
    font-family: sans-serif;
    color: #bab6ab;
    font-weight: 500;
    font-size: 13px;
    margin: 0px;
    margin-right: 4px;
`

export const RelatedVideoPublishPara = styled(RelatedVideoChannelTitle)`
    font-size: 13px;
    margin-top: 4px;
`