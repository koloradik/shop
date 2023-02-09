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

        if (!isNaN(p)) {
            setBalans(balans + p)
        }


    }

    return <div>{props.name ? <div>

        <hr />
        <div className={styles.wrapper}>
            <img src="/User.png" alt="" className={styles.userimg} />
            <div className={styles.name}>Имя: {props.name}</div>

        </div>
        <hr />
        <div className={styles.tekb}>Текущий баланс: {balans}₴</div>
        <button className={styles.popolnb} onClick={toggleBalansShow}>Пополнить баланс</button>
        {balansShow === true ? <div>
            <input  
            placeholder="Введите сумму пополнения"
            className={styles.inp} 
            type="text" value={balansP}
            onChange={(event) => setBalansP(event.target.value)} 
            />
            <button className={styles.pop} onClick={popoln}>Пополнить</button>
        </div> : null}
        <hr />
    </div> : <div className={styles.neavt}>Вы не авторизованы(</div>}

   
    </div>
}

export default ProfilePage