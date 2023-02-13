import { useState } from "react"
import { Button, Input } from "react-daisyui"
import styles from "./ProfilePage.module.css"

const ProfilePage = (props) => {
    //const [balans, setBalans] = useState(0)
    const [balansShow, setBalansShow] = useState(false)
    const [balansP, setBalansP] = useState("")

    const toggleBalansShow = () => {
        setBalansShow(prev => !prev)
    }
    const popoln = () => {
        const p = Number(balansP)

        if (!isNaN(p)) {
            props.setBalans(props.balans + p)
        }


    }

    return <div>{props.name ? <div>

        <hr />
        <div className={styles.wrapper}>
            <img src="/User.png" alt="" className={styles.userimg} />
            <div className={styles.name}>Имя: {props.name}</div>

        </div>
        <hr />
        <div className={styles.tekb}>Текущий баланс: {props.balans}₴</div>
        <Button className="bg-blue-700 hover:bg-blue-500 ml-49" onClick={toggleBalansShow}>Пополнить баланс</Button>
        {balansShow === true ? <div>
            <Input
                placeholder="Введите сумму пополнения"
                className="bg-black"
                type="text" value={balansP}
                onChange={(event) => setBalansP(event.target.value)}
            />
             <Button className="bg-green-700 hover:bg-green-500" onClick={popoln}>Пополнить</Button>
        </div> : null}
        <hr />
    </div> : <div className={styles.neavt}>Вы не авторизованы(</div>}


    </div>
}

export default ProfilePage