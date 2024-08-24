import React,{useState} from 'react'
import axios from 'axios'
import {Row,Button,Form,Upload,Input} from 'antd'
import Header from './header'

const Booking = ()=>{
//     const layout = {
//     labelCol: { xs: 24, sm: 5, md: 4, lg: 5, xl: 4, xxl: 3 },
//     wrapperCol: { xs: 24, sm: 19, md: 20, lg: 19, xl: 20, xxl: 21 },
// };
    const [fileList, setFileList] = useState([]);
    let arrImg = []
    const onFinish = values => {
        console.log(fileList)
        const formData = new FormData()
        for(let i=0;i < fileList.length;i++){
           formData.append('payment',fileList[i])
        }
        //console.log({file : fileList})
        //formData.append('payment',fileList)
        formData.append('user',values.user)
         axios.post("/agent/upload",formData,{headers: {
        "Content-Type": "multipart/form-data",
      },}).then(res => {
            console.log(res)
            }
        ).catch(
            err => {
                console.log(err)
            }
        );
    }
    const getImg = (e) => {
        arrImg = fileList
        arrImg.push(e)
        //console.log(arrImg)
        setFileList(arrImg)
    }
    return (
    <div><Header/> 
    Booking 
    <Row justify="center">
        <Form 
        onFinish={onFinish}
        getValueFromEvent
        >
            <Form.Item
                            name="user"
                            label="Username"
                            rules={[
                                {
                                    required: true,
                                    message: 'Please input your user !',
                                },
                            ]}
                        >
                        <Input />
                        </Form.Item>
                        <Form.Item
                            name="payment"
                            label="Payment"
                            type="file"
                            rules={[
                                {
                                    required: true,
                                    message: 'Please input your images !',
                                },
                            ]}
                        >
                        <Upload 
                        beforeUpload={() => false}
                        onChange={(e) => {getImg(e.file)}}
                        maxCount={2}
                        multiple={true}
                        ><Button type='info' className='Button'>Upload</Button></Upload>
                        </Form.Item>
            <Button className="Button" type="primary" size="large" htmlType="submit">upload</Button>
        </Form>
    </Row>
    </div>
    )
}

export default Booking