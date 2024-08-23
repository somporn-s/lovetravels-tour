import React/*,{useState}*/ from 'react'
import axios from 'axios'
import {Form,Button,Row,Input} from 'antd'
import Header from './header'

const Booking = (props)=>{
    const layout = {
    labelCol: { xs: 24, sm: 5, md: 4, lg: 5, xl: 4, xxl: 3 },
    wrapperCol: { xs: 24, sm: 19, md: 20, lg: 19, xl: 20, xxl: 21 },
};
    //const [fileList, setFileList] = useState([]);
    const onFinish = values => {
        console.log(values.target.files)
         axios.post("/agent/upload",{ headers: { "Content-Type": "multipart/form-data" } },values).then(res => {
            console.log(res)
            }
        ).catch(
            err => {
                console.log(err)
            }
        );
    }
    const getFile = (e) => {
    console.log('Upload event:', e);

    if (Array.isArray(e)) {
        return e;
    }
    return e && e.fileList;
    };
    return (
    <div><Header/> 
    Booking 
    <Row justify="center">
        <Form
            className="App"
            {...layout}
            //fileList={fileList}
            onFinish={onFinish}
            style={{ width: "100%" }}
        >
                        
                            <Form.Item
                                name="payment"
                                label="QRcode Payment"
                                getValueFromEvent={getFile}
                                rules={[
                                    {
                                        required: true,
                                        message: 'Please upload img!',
                                    }
                                ]}
                            >
                                <Input type='file' name='payment_pic'/>
                            </Form.Item>
                            <Button className="Button button_style" htmlType="submit" size="large">Upload</Button>
        </Form>
    </Row>
    </div>
    )
}

export default Booking