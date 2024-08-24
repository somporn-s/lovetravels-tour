import React/*,{useState}*/ from 'react'
import axios from 'axios'
import {Row,Button,Form} from 'antd'
import Header from './header'

const Booking = (props)=>{
//     const layout = {
//     labelCol: { xs: 24, sm: 5, md: 4, lg: 5, xl: 4, xxl: 3 },
//     wrapperCol: { xs: 24, sm: 19, md: 20, lg: 19, xl: 20, xxl: 21 },
// };
    //const [fileList, setFileList] = useState([]);
    const onFinish = values => {
        console.log(values)
         axios.post("/agent/upload"/*,{ headers: { "enctype": "multipart/form-data" } }*/,values).then(res => {
            console.log(res)
            }
        ).catch(
            err => {
                console.log(err)
            }
        );
    }
    // const getFile = (e) => {
    // console.log('Upload event:', e);

    // if (Array.isArray(e)) {
    //     return e;
    // }
    // return e && e.fileList;
    // };
    return (
    <div><Header/> 
    Booking 
    <Row justify="center">
        <Form 
        onFinish={onFinish}>
            <input type="file" name="payment" />
            <Button className="Button" type="primary" size="large" htmlType="submit">upload</Button>
        </Form>
    </Row>
    </div>
    )
}

export default Booking