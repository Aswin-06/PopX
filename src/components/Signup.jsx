import { useContext, useState } from "react"
import { useNavigate } from "react-router-dom";
import { DataContext } from "./Context";
import style from "./Signup.module.css"

function Signup()
{
    const {data,changedata}=useContext(DataContext);
    const navigate=useNavigate();
    const alterchange=(e)=>
    {
        const {name,value}=e.target;
        changedata({...data,[name]:value});
    }
    return(
        <>
            <h2 className={style.head}>Create your <br/> PopX account</h2>
            <p className={style.name}>Name</p>
            <input className={style.input} type="text" name="name" value={data.name} placeholder="Enter your name" onChange={alterchange} />
            <p className={style.name}>Phone number</p>
            <input className={style.input} type="text" name="phone" value={data.phone} placeholder="Enter your phone number" onChange={alterchange} />
            <p className={style.name}>Email Address</p>
            <input className={style.input} type="text" name="email" value={data.email} placeholder="Enter your email address" onChange={alterchange} />
            <p className={style.name}>Password</p>
            <input className={style.input} type="text" name="password" value={data.password} placeholder="Enter your password" onChange={alterchange} />
            <p className={style.name}>Company name</p>
            <input className={style.input} type="text" name="comp" value={data.comp} placeholder="Enter your company name" onChange={alterchange} />
            <p className={style.ag}>Are you an agency?</p>
            <label><input type="radio" name="agency"/>Yes</label>
            <label><input type="radio" name="agency" />No</label>
            <button className={style.button} onClick={()=>{
                changedata(data);
                navigate("/profile");}}>Create Account</button>
        </>
    )
}

export default Signup