import { useState } from "react"
import styles from "./ProfilePage.module.css"

const ProfilePage = (props) => {
    const [balans, setBalans] = useState(0)
    const [balansShow, setBalansShow] = useState(false)
    const [balansP, setBalansP] = useState("")

    const toggleBalansShow = () => {
        setBalansShow(prev => !prev)    
    }
    const popoln = () => {
        const p = Number(balansP)

       if (!isNaN(p)){
        setBalans (balans+p)
       }

        
    }

    return <div>

        <hr />
        <div className={styles.wrapper}>
            <img src="/User.png" alt="" className={styles.userimg} />
            <div className={styles.name}>{props.name}</div>

        </div>
        <hr />
        <div>Текущий баланс: {balans}₴</div>
        <button className={styles.popolnb} onClick={toggleBalansShow}>Пополнить баланс</button>
         {balansShow === true ?<div>
            <input type="text" value={balansP} onChange={(event) => setBalansP(event.target.value)}/>
            <button onClick={popoln}>Пополнить</button>
        </div>: null}
        <hr />
    </div>
}

export default ProfilePage