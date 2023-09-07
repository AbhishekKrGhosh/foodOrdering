import React from "react";

function Card(props){
    return (
        <div className="card">
            <div className="pic"><img className="img" src={props.img} alt="img"/></div>
            <div className="info">
                <h1>{props.title}</h1>
                <h3>Starter: {props.starter}</h3>
                <h3>Desert: {props.desert}</h3>
                <div className="down">
                    <div className="drink">
                    <img className="img2" src="https://image.similarpng.com/very-thumbnail/2020/08/Summer-cold-drink-clipart-PNG.png" alt="drink1"/>
                    <img className="img2" src="https://www.pngkit.com/png/detail/256-2567910_drinks-free-drink-and-beverage-clipart-clip-art.png" alt="drink2"/>
                    <img className="img2" src="https://i.pinimg.com/736x/1c/07/98/1c0798ae81e4a654cbfc3e6dafc751b1.jpg" alt="drink3"/>
                    </div>
                    <div className="price">
                        <h2>{props.price} €</h2>
                        <button className="button-6">Select</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Card