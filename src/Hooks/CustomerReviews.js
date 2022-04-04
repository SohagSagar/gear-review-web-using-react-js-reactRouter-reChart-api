import { useEffect, useState } from "react"

const CustomerReviews=()=>{
    const [reviews,setReviews]=useState([]);
    useEffect(()=>{
        fetch('https://testimonialapi.toolcarton.com/api')
        .then(res => res.json())
        .then(data => setReviews(data));
    },[]);

    return [reviews,setReviews];
}
export default CustomerReviews;