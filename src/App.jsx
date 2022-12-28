import { BsFillBucketFill } from "react-icons/bs"
import { useState } from "react";
import { TiDeleteOutline } from "react-icons/ti"
import { GrUserManager } from "react-icons/gr"
import "./App.css"
import products from "./database/products.json"
import Product from "./Product";
import { useLocation } from "wouter"
function App() {
  const [bucket, setBucket] = useState([])
  const [show, setShow] = useState(false)
  const [showInput, setShowInput] = useState(false)
  const [name, setName] = useState("")
  const [location, setLocation] = useLocation()


  const onHelp =() => {
    setLocation("/help")
  }

  const onClick = (product) => {
    console.log(product);
    setBucket(prev => [...prev, { ...product }]
    )
  }

  const toggleShowInput = () => {
    setShowInput(prev => !prev)
  }

  const toggleShow = () => {
    setShow(prev => !prev)
  }

  const deleteP = (productId) => {
    setBucket(prev => prev.filter(p => p.id !== productId))
  }

  return (<div>
    <div className="header">
      <h1>GORA</h1>
      <button className="avt" >
        {name}
        <div>
          {
            showInput ? <input value={name} onChange={e => setName(e.target.value)}></input>
              : null}
          <GrUserManager size={40} onClick={toggleShowInput} />
        </div>
      </button>
      <button className="buk" onClick={toggleShow}>

        <div>
          <BsFillBucketFill size={40} />
        </div>
      </button>
    </div>
    {show ? <div className="buc">{
      <div>

        <div>
          <h2>Корзина:</h2>
          {name ? bucket.length !== 0 ? bucket.map(prod => {
            return (<div className="fullbk">
              <div className="pr">{prod.model}---</div>
              <button onClick={() => deleteP(prod.id)}>
                <TiDeleteOutline size={20} />
              </button>
            </div>)
          }) : <div>
            <h2>Тут пусто</h2>
          </div> : <div><h1>Авторизуйтесь чтобы использовать корзину</h1></div>}
        </div>
      </div>
    }
    </div> : null}
    <div className="wrapper">
      {
        products.map(product => {

          return <Product
            price={product.price}
            model={product.model}
            disc={product.discount}
            product={product}
            onClick={() => onClick(product)} />
        })
      }


    </div>
    <div className="con"><h3><span className="th" onClick={onHelp} >Техподдержка:</span> Если вас обманули, взломали, купили товар от вашего имени НЕ звоните на этот номер - 0983214578</h3></div>
  </div>

  )
}

export default App
