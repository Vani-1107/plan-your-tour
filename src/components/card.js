import { useState } from "react";


function Card(props){
    const data = props.tour1;
    const information = data.info;
    const desc = `${information.substring(0,200)}.... `;
    const [readMore,setReadMore] = useState(false);
    const [description,setDescription] = useState(desc);
    function readMoreHandler(){
        if(readMore === true)
        {
            setReadMore(false);
            setDescription(desc);
        }
        else
        {
            setReadMore(true);
            setDescription(data.info);
        }
    }
    console.log(data.id);
    return(
        <div className="card">
            <img src={data.image} className="image" alt="{data.name}"></img>
            <div className="tour-info"> 
                <div className="tour-details">
                    <h4 className="tour-price">₹ {data.price}</h4>
                    <h4 className="tour-name">{data.name}</h4>
                </div>
                <div className="tour-desc">
                    {description}
                    <span className="read-more" onClick={readMoreHandler}>
                        {readMore ? `Show Less` : `Read More`}
                    </span>
                </div>
            </div>
            <button onClick={() => props.removeTour(data.id)} className="tour-button">Not Interested</button>
        </div>
    );
}
export default Card;