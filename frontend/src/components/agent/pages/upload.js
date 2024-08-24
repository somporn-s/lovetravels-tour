import React, { useState } from 'react';
import { PlusOutlined } from '@ant-design/icons';
import { Form,Image, Upload } from 'antd';
const getBase64 = (file) =>
  new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result);
    reader.onerror = (error) => reject(error);
  });
const UploadImg = (props) => {
  const [previewOpen, setPreviewOpen] = useState(false);
  const [previewImage, setPreviewImage] = useState('');
  const [fileList, setFileList] = useState([]);
  let arrImg = []
  const handlePreview = async (file) => {
    if (!file.url && !file.preview) {
      file.preview = await getBase64(file.originFileObj);
    }
    setPreviewImage(file.url || file.preview);
    setPreviewOpen(true);
  };
  //const handleChange = ({ fileList: newFileList }) => {setFileList(newFileList); props.setFileListFromRegis(newFileList[0])} ;
  const uploadButton = (
    <button
      style={{
        border: 0,
        background: 'none',
      }}
      type="button"
    >
      <PlusOutlined />
      <div
        style={{
          marginTop: 8,
        }}
      >
        Upload
      </div>
    </button>
  );
  const handleChange = (e) => {
        arrImg = fileList
        arrImg.push(e)
        setFileList(e)
        props.setFileListFromRegis(arrImg)
    }
  return (
    <>
    <Form.Item
                            //name="payment"
                            //label="QRcode Payment"
                            {...props.inputUpload.formItem}
                            rules={[
                                {
                                    required: true,
                                    message: 'Please upload img!',
                                }
                            ]}
                        >
      <Upload
        //action="https://660d2bd96ddfa2943b33731c.mockapi.io/api/upload"
        //fileList={fileList}
        beforeUpload={() => false}
        listType="picture-card"
        onPreview={handlePreview}
        onChange={(e) => {handleChange(e.file)}}
        {...props.inputUpload.maxCount}
        //maxCount={2}
      >
        {fileList.length >= 8 ? null : uploadButton}
      </Upload>
      </Form.Item>
      {previewImage && (
        <Image
          wrapperStyle={{
            display: 'none',
          }}
          preview={{
            visible: previewOpen,
            onVisibleChange: (visible) => setPreviewOpen(visible),
            afterOpenChange: (visible) => !visible && setPreviewImage(''),
          }}
          src={previewImage}
        />
      )}
    </>
  );
};
export default UploadImg;