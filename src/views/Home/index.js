import Header from "../../components/Header"
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
// import { getAds } from '../../config/firebase'
import { useSelector,useDispatch } from "react-redux"
import { addAds } from "../../store/actions"


const Home =()=>{
    // const [ads, setAds] = useState([])
    const navigate = useNavigate()
    const dispatch=useDispatch()
    
    const user=useSelector(state=>state.user)
    const ads=useSelector(state=>state.ads)

    console.log(user,'User from home component');


    useEffect(async () => {
      // const tempAds = await getAds()
      // setAds(tempAds)
      dispatch(addAds())
    }, [])
  
    // console.log('ads --->', ads)
    
  
    return (
      <>
        
            <Header />
          <h1> Dashboard </h1>
          <h1>{user.name}</h1>
          <div style={{display:"inline-grid"}}>
          <div style={{display:"flex"}}>   
    
          {ads.map(item => {
            const { urls, proname, price, id,category } = item
            // console.log(urls[0],"IMGESSSSSSSSSSSSSSSSSSSSSSSS--------");
            //template literals
            return <div
              // onClick={() => {navigate('/detail/' + id)}}
              onClick={() => { navigate(`/productdetails/${id}`) }}
              style={{width: 250, margin: 30,"borderWidth":"1px", 'borderColor':"black", 'borderStyle':'solid','borderRadius':"10px"}}>
              <img src={urls}width="200" style={{marginTop:30}}/>
              <h4>Name:{proname}</h4>
              <p>Price:{price}</p>
              <p>Category:{category}</p>
            </div>
          })}
        </div>
        </div>
        </>
      )
     
    
}

export default Home