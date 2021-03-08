import React, {useEffect, useState} from 'react'

function ShowVolunteer() {
    const [data, setData] = useState([{
    name:'',
    email:'',
    pan:'',
    aadhar:'',
    mobile:'',
    occupation:''
    }])
    
    useEffect(()=>{
        fetch("/show-volunteers").then(res => {
            if(res.ok){
                return res.json
            }
        }).then(jsonRes => setData(jsonRes));
    })
    
    return (
        <div>
            <h1>Volunteer Page</h1>
            {data.map(data => 
                <div>
                    <h1>{data.name}</h1>
                    <h1>{data.email}</h1>
                    <h1>{data.pan}</h1>
                    <h1>{data.aadhar}</h1>
                    <h1>{data.mobile}</h1>
                    <h1>{data.occupation}</h1>
                    </div>
                )}
        </div>
    )
}


export default ShowVolunteer
