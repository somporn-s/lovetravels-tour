import React from 'react'
import { Button, Flex, Row, Col, Divider, notification} from 'antd'
import Title from 'antd/lib/typography/Title';
import { useNavigate } from 'react-router-dom';

import Header from './header'
function PackageTour() {
  const navigate = useNavigate();
  const toAddPackage = () => {
    navigate("/agent/add_package_tour")
  }
  return (
    <div>
      <Header/>
      <Row justify="space-around">
        <Col align="left">
          <Title level={2} className="Title">Package</Title>
        </Col>
        <Col align="rigth">
          <Button onClick={toAddPackage} className="Button button_style " type="primary" size="large" htmlType="button" style={{margin : "25px 0 0 0"}}><span style={{fontSize:"25px",padding:"0 0 5px 0"}}>+</span></Button>
        </Col>
      </Row>
      <Row justify="center">
          <Col className="card_bg" xs={23} sm={23} md={23} lg={14} xl={14} xxl={12}>
            <div className="Form">
              <Divider className="Divider" />
            </div>
          </Col>
      </Row>
    </div>
  )
}

export default PackageTour
