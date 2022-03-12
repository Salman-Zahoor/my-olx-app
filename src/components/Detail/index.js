
export default function Detail(props) {


    return (
        <>
                            <div>
                        <h2>Name:{props.proname}</h2>
                    </div>

                    {/* Options */}



                            <div>
                                <h3>Category:{props.category}</h3>
                            </div>

                        <div style={{display:"-ms-flexbox"}}>
                            <h3>Description:</h3><p>{props.description}</p>
                            </div>
                            <button style={{"backgroundColor":"#2f92f5", width:150,height:40,"borderRadius":"50px","borderRightColor":"#2f92f5"}}>
                                Buy Now
                            </button>
                        </>
    )
}