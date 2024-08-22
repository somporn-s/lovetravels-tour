import React from 'react';
import Header from './header'

const booking = (props)=>{
    return (
    <div><Header/> 
    Booking 
    <form action="http://localhost:8080/agent/upload" method="post" enctype="multipart/form-data">
        <input type="file" name="images" multiple />
        <button type="submit">Upload Multiple</button>
    </form> 
    </div>
    )
}

export default booking