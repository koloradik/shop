import { useState } from "react"
import { Button, Checkbox, Input, Modal, Steps, Tooltip } from "react-daisyui"
import styles from "./ProfilePage.module.css"

const ProfilePage = (props) => {
    const [balansShow, setBalansShow] = useState(false)
    const [balansP, setBalansP] = useState("")
    const [dkShow, setDkShow] = useState(false)

    const toggleDkShow = () => {
        setDkShow(prev => !prev)
    }

    const toggleBalansShow = () => {
        setBalansShow(prev => !prev)
    }

    const popoln = () => {
        const p = Number(balansP)

        if (!isNaN(p)) {
            props.setBalans(props.balans + p)
        }

        localStorage.setItem("balans", props.balans + p)

    }

    return <div>{props.name ? <div>
        <hr />
        <div className={styles.wrapper}>
            <img src="/User.png" alt="" className={styles.userimg} />

            <div className="ml-16 text-3xl">
                <div className="mt-6">Имя: {props.name}</div>
                <div className="mt-4">Статус: {props.status}</div>
            </div>

        </div>
        <hr />
        <div className={styles.tekb}>Текущий баланс: {props.balans}₴</div>
        <Button className="bg-blue-700 hover:bg-blue-500 ml-49" onClick={toggleBalansShow}>Пополнить баланс</Button>
        {balansShow === true ? <div>
            <Modal
                open={balansShow}
                onClickBackdrop={toggleBalansShow}
                className="bg-neutral-100"
            >
                <Modal.Header>
                    <Steps className="text-black flex justify-center">
                        <Steps.Step color="info"></Steps.Step>
                        <Steps.Step></Steps.Step>
                        <Steps.Step></Steps.Step>
                    </Steps>
                </Modal.Header>
                <Modal.Body>
                    {/* <Input
                        placeholder="Введите сумму пополнения"
                        className="bg-black w-60"
                        type="text" value={balansP}
                        onChange={(event) => setBalansP(event.target.value)}
                    />
                    <Button
                        className="
                    bg-green-700 
                    hover:bg-green-500"
                        onClick={popoln}>Пополнить</Button> */}
                    <div className="flex w-14 items-center">
                        <Checkbox className="border border-black" />
                        <Tooltip message="Visa" color="info">
                            <div className="w-20">
                                <img src="/../popolnenie/visa.png" alt="Visa" />
                            </div>
                        </Tooltip>
                    </div>
                    <div className="flex w-14 items-center">
                        <Checkbox className="border border-black" />
                        <Tooltip message="Mastercard" color="info">
                            <div className="w-20">
                                <img src="/../popolnenie/mast.png" alt="Mastercard" />
                            </div>
                        </Tooltip>
                    </div>
                    <div className="flex w-14 items-center">
                        <Checkbox className="border border-black" />
                        <Tooltip message="Qiwi" color="info">
                            <div className="w-14">
                                <img className="ml-2" src="/../popolnenie/qiwi.png" alt="Qiwi" />
                            </div>
                        </Tooltip>
                    </div>
                </Modal.Body>
                <Modal.Actions>
                    <Button
                        className="bg-blue-500 hover:bg-blue-500"
                        onClick={() => {
                            toggleBalansShow(false)
                            toggleDkShow(true)
                        }}
                    >
                        Далее
                    </Button>
                </Modal.Actions>
            </Modal>
            <Modal
                open={dkShow}
                onClickBackdrop={toggleDkShow}
            >
                <Modal.Header>

                </Modal.Header>
                <Modal.Body>

                </Modal.Body>
                <Modal.Actions>

                </Modal.Actions>
            </Modal>

        </div> : null}
        <hr />
    </div> : <div className={styles.neavt}>Вы не авторизованы(</div>}


    </div>
}

export default ProfilePage