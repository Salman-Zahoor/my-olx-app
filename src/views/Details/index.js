import Detail from "../../components/Detail"
import { useNavigate } from "react-router-dom";
import { getaAdd } from "../../config/firebase";
import { useParams } from "react-router-dom"
import { useEffect, useState } from "react"
import Header from "../../components/Header"


const Productdetail = () => {
    const [paramDetailTemp, setParamDetailTemp] = useState([])

    const params = useParams()
    // setParamState(params)
    console.log(params.adId, "ADDDDDDDDDDDDDDDDDDD");

    useEffect(() => {
        getAdddetails()
    }, [])

    const getAdddetails = async () => {
        const paramDetail = await getaAdd(params.adId)
        const temp = []
        temp.push(paramDetail)
        setParamDetailTemp(temp)

    }
    console.log(paramDetailTemp, "Detail>>>>>>>>>>>>>>>>>>>>>>>>");

    return (
        <>
        <Header/>
        <div>
                        <h1>Product Information</h1>
                    </div>

        <div>
            {paramDetailTemp.map((item) => {
                return <div>
                    <img src={item.urls} width={800} height={500} style={{marginTop:30}}/>
                    <Detail proname={item.proname}  
                    price={item.price}
                    category={item.category}
                    description={item.discription} />
                    </div>
            })}
        </div>

        </>
    )
}

export default Productdetail