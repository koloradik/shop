const Product = (props) => {

    return <div className="prod">
        <div className="img"></div>
        <div>
            <div className="mod">{props.model},</div>
            <div className="pris">
                {
                    props.disc > 0 ? <div className="full">
                        <div className="skidka">{props.price}₴</div>
                        <div className="star">{props.price - props.price * props.disc}₴</div>
                    </div>
                        : <div>{props.price}₴</div>
                }
            </div>
            <button onClick={() => props.onClick(props.product)} className="btn">Buy</button>
        </div>
    </div>
}

export default Product;