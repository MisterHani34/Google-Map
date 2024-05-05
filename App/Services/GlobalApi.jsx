import axios from "axios"


const BEST_URL="https://maps.googleapis.com/maps/api/place"
const API_KEY="AIzaSyBCAOGByMxUq5WW3UEGfLVavT2QNwR1pxU"

const nearByPlace=()=>axios.get(BEST_URL+"/nearbysearch/json?"+
"&location=-33.8670522%2C151.1957362&radius=1500&type=restaurant"
+"&key="+API_KEY)


export default{

nearByPlace


}