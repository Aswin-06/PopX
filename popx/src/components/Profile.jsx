import { useContext, useEffect, useState } from "react";
import { DataContext } from "./Context";
import image from "./img/man.jpg"
import style from "./Profile.module.css"

function Profile()
{
    const {data,setdata}=useContext(DataContext);
    return(
        <>
            <h2 className={style.head}>Account Settings</h2>
            <img src={image} alt="man" />
            <p className={style.name}>{data.name}</p>
            <p className={style.email}>{data.email}</p>
            <p className={style.content}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto ipsa ad perspiciatis fugiat culpa cum voluptatibus neque dolorem omnis beatae!</p>
        </>
    )
}

export default Profile;