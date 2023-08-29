import {React, useState} from 'react'
import {useNavigate, Navigate, Link} from 'react-router-dom'
import Cookies from 'js-cookie'
import {TbBrandYoutubeKids} from 'react-icons/tb'

import { LoginPageContainer, LoginContainer, LoginPageHeaderPara, LoginPageHeaderSubpara, LoginPageFinalPara, LoginInputElement, LoginPageButton, LoginPageErrorPara } from './styledComponents'

const Login = () => {
    const [name, changeName] = useState("")
    const [password, changePassword] = useState("")
    const [errorMsg, changeErrorMsg] = useState("")

    const navigate = useNavigate();

    if (Cookies.get("jwt_token") !== undefined) {
        return <Navigate to="/" replace/>
    }

    const onChangeName = (event) => {
        changeName(event.target.value)
        document.getElementById("nameError").textContent = ""
    }

    const onChangePassword = (event) => {
        changePassword(event.target.value);
        document.getElementById("passwordError").textContent = ""
    }

    const submitForm = async (event) => {
        event.preventDefault();
        
        if (name === "") {
            document.getElementById("nameError").textContent = "*required"
        }
        if (password === "") {
            document.getElementById("passwordError").textContent = "*required"
        }

        if (name !== "" && password !== "") {
            const userDetails = {name, password};
            const options = {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(userDetails)
            }

            const response = await fetch("https://youtube-clone-server-lqs9.vercel.app/login/", options)
            
            if (response.ok) {
               const data = await response.json();
               Cookies.set('jwt_token', data.jwtToken, {expires: 30});
               navigate("/", {replace: true});

            } else {
               const data = await response.json();
               changeErrorMsg(data.errorMsg);
            }
        }
    }

    return (
        <LoginPageContainer>
            <LoginContainer onSubmit={submitForm}>
                    <TbBrandYoutubeKids color="red" size={45} />
                    <LoginPageHeaderPara>Sign in</LoginPageHeaderPara>
                    <LoginPageHeaderSubpara>to continue to N tube</LoginPageHeaderSubpara>
                    <LoginInputElement type="text" value={name} onChange={onChangeName} placeholder="Name" />
                    <LoginPageErrorPara id="nameError"></LoginPageErrorPara>
                    <LoginInputElement type="password" value={password} onChange={onChangePassword} placeholder="Password" />
                    <LoginPageErrorPara id="passwordError"></LoginPageErrorPara>
                    <LoginPageButton type="submit">Sign in</LoginPageButton>
                    <LoginPageErrorPara>{errorMsg}</LoginPageErrorPara>
                    <LoginPageFinalPara>don't have an account? <Link to="/Register"><span style={{color: '#3495eb', textDecoration: 'underline'}}>sign up</span></Link></LoginPageFinalPara>
            </LoginContainer>
        </LoginPageContainer>
    )
}

export default Login