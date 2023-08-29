import {React, useState} from 'react'
import {useNavigate, Link} from 'react-router-dom'
import {TbBrandYoutubeKids} from 'react-icons/tb'

import { LoginPageContainer, LoginContainer, LoginPageHeaderPara, LoginPageFinalPara, LoginInputElement, LoginPageButton, LoginPageErrorPara } from '../Login/styledComponents'

const Register = () => {
    const [name, changeName] = useState("")
    const [password, changePassword] = useState("")
    const [errorMsg, changeErrorMsg] = useState("")

    const navigate = useNavigate();

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

            const response = await fetch("https://youtube-clone-ten-iota-delta.vercel.app//register/", options)
            
            if (response.ok) {
               const data = await response.json();
               alert(data.message)
               navigate("/Login", {replace: true})

            } else {
               const data = await response.json()
               changeErrorMsg(data.errorMsg)
            }
        }
    }

    return (
        <LoginPageContainer>
            <LoginContainer onSubmit={submitForm}>
                    <TbBrandYoutubeKids color="red" size={45} />
                    <LoginPageHeaderPara>Create an Account</LoginPageHeaderPara>
                    <LoginInputElement type="text" value={name} onChange={onChangeName} placeholder="Name" />
                    <LoginPageErrorPara id="nameError"></LoginPageErrorPara>
                    <LoginInputElement type="password" value={password} onChange={onChangePassword} placeholder="Password" />
                    <LoginPageErrorPara id="passwordError"></LoginPageErrorPara>
                    <LoginPageButton type="submit">create</LoginPageButton>
                    <LoginPageErrorPara>{errorMsg}</LoginPageErrorPara>
                    <LoginPageFinalPara>already have an account? <Link to="/Login"><span style={{color: '#3495eb', textDecoration: 'underline'}}>sign in</span></Link></LoginPageFinalPara>
            </LoginContainer>
        </LoginPageContainer>
    )
}

export default Register