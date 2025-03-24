import { useNavigate } from "react-router-dom";
import style from "./LandingScreen.module.css"

function LandingScreen()
{
    const navigate=useNavigate();

    return(
        <>
            <h2 className={style.head}>Welcome to PopX</h2>
            <p className={style.body}>Lorem ipsum dolor sit, amet <br/>consectetur adipisicing elit.</p>
            <button className={style.login} onClick={()=>{navigate("/signup")}}>Create Account</button>
            <button className={style.reg} onClick={()=>{navigate("/login")}}>Already Registered/Login</button>
        </>
    )
}

export default LandingScreen;