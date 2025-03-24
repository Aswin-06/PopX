import { useNavigate } from "react-router-dom";
import style from "./Login.module.css"

function Login()
{
    const navigate=useNavigate();
    return(
        <>
            <h2 className={style.head} >Signin to your <br /> PopX account</h2>
            <p className={style.content}>Lorem ipsum dolor sit amet,<br /> consectetur adipisicing elit.</p>
            <p className={style.name}>Email Address</p>
            <input className={style.input} type="text" placeholder="Enter email address"/>
            <p className={style.name}>Password</p>
            <input className={style.input} type="text" placeholder="Enter password" />
            <button className={style.button} onClick={()=>{navigate("/profile")}}>Login</button>
        </>
    )
}

export default Login;