import styled from 'styled-components'

export const NavBarElement = styled.nav`
    background-color: #0f0f0f;
    padding: 0px 12px;
    height: 8vh;
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
`

export const LogoHeading = styled.h1`
    font-family: sans-serif;
    color: #ffffff;
    display: block;
    font-size: 17px;
    margin-left: 5px;
`

export const LogoContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`

export const LogoContainerMobile = styled(LogoContainer)`
    @media screen and (min-width: 768px) {
        display: none;
    }
`

export const LogoContainerLaptop = styled(LogoContainer)`
    display: none;
    width: 50%;

    @media screen and (min-width: 768px) {
        display: flex;
    }
`

export const ToggleButton = styled.button`
    cursor: pointer;
    outline: none;
    background-color: transparent;
    border: none;
    padding: 9px;
    display: flex;
    justify-content: center;
    border-radius: 50%;
    align-items: center;

    &:hover{
        background-color: #323435;
    }
`

export const SignInButton = styled.button`
    background-color: transparent;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #3495eb;
    font-size: 13px;
    padding: 5px 10px;
    font-family: sans-serif;
    font-weight: 600;
    border: solid 1px #575859;
    border-radius: 20px;
    margin-left: 10px;
    cursor: pointer;
    outline: none;

    &:hover{
        background-color: #263850;
    }
`

export const SearchContainer = styled.div` 
    padding: 0px;
    display: flex;
    align-items: center;
    width: 70%;

    @media screen and (min-width: 768px) {
        width: 100%;
    }
`

export const SearchInput = styled.input`
    background-color: hsl(0, 0%, 7%);
    width:80%;
    border: none;
    outline: none;
    padding: 18px;
    cursor: pointer;
    height: 35px;
    color :#f1f5f9;
    font-size: 16px;
    font-weight: 400;
    border-top-left-radius: 19px;
    border: solid 1px hsl(0, 0%, 18.82%);
    border-bottom-left-radius: 19px;
`

export const SearchButton = styled.button`
    background-color: hsla(0, 0%, 100%, 0.08);
    border: solid 1px hsl(0, 0%, 18.82%);
    cursor: pointer;
    border-top-right-radius: 19px;
    border-bottom-right-radius: 19px;
    outline: none;
    height: 35px;
    width: 20%;
    padding: 18px;
    display: flex;
    justify-content: center;
    align-items: center;
    max-width: 75px;
`

export const HamToggleButton = styled(ToggleButton)`
    @media screen and (max-width: 1000px) {
        display: none;
    }
`