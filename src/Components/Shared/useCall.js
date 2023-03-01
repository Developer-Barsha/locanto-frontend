import { useEffect, useState } from 'react';

const useCall = (path) => {
    const [data, setData] = useState([]);
    
    useEffect(()=>{
        fetch('http://localhost:5000/'+path)
        .then(res=>res.json())
        .then(result=>setData(result))
    },[]);

    return {data, setData};
};

export default useCall;