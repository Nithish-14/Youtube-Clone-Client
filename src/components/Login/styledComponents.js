import styled from 'styled-components'

export const LoginPageContainer = styled.div`
    background-color: #0f0f0f;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
`

export const LoginContainer = styled.form`
    width: 400px;
    border: solid 1px #575859;
    border-radius: 7px;
    padding: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    @media screen and (max-width: 480px) {
        width: 93%;
    }
`

export const LoginPageHeaderPara = styled.p`
    color: #f1f5f9;
    font-family: sans-serif;
    font-size: 21px;
    margin-top: 10px;
    margin-bottom: 0px;
`

export const LoginPageHeaderSubpara = styled(LoginPageHeaderPara)`
    font-size: 16.3px;
    margin-top: 10px;
`

export const LoginInputElement = styled.input`
    width: 100%;
    cursor: pointer;
    outline: none;
    border: solid 1px #575859;
    padding: 15px 12px;
    border-radius: 6px;
    background-color: transparent;
    margin-top: 20px;
    color: #fafafa;
    font-weight: 500;
    font-family: sans-serif;
`

export const LoginPageButton = styled.button`
    font-family: sans-serif;
    border-width: 0px;
    cursor: pointer;
    outline: none;
    border-radius: 7px;
    background-color: red;
    color: #f1f5f9;
    padding: 9px 18px;
    margin-top: 20px;
    margin-bottom: 10px;
`

export const LoginPageErrorPara = styled.p`
    color: #ff0000;
    font-family: sans-serif;
    font-size: 14px;
    align-self: flex-start;
    margin-top: 3px;
    margin-bottom: 0px
`

export const LoginPageFinalPara = styled(LoginPageHeaderPara)`
    font-size: 15px;
    margin-top: 10px;
`