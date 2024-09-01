import React from 'react'
import { Button, Flex, Row, Col, Divider, notification} from 'antd'
import Title from 'antd/lib/typography/Title';

import Header from './header'
function packageTour() {
  return (
    <div>
      <Header/>
      <Row justify="center">
        <Flex justify="left">
                        <Title level={2} className="Title">Package</Title>
                    </Flex>
            <Col className="card_bg" xs={23} sm={23} md={23} lg={14} xl={14} xxl={12}>
                <div className="Form">
                    
                    <Divider className="Divider" />
                  </div>
              </Col>
            </Row>
    </div>
  )
}

export default packageTour
