import Card from './card.js'

function Tours(props){
    console.log(props.tours);
    const data = props.tours;
    return(
        <div className='container'>
            <div>
                <h2 className='heading'>Plan With Love</h2>
            </div>
            <div className='cards'>
                {
                    data.map((tour) => {
                        return( 
                            <Card tour1={tour} removeTour={props.removeTour} ></Card>
                        );
                    })
                }
            </div>
        </div>
    )
}
export default Tours;