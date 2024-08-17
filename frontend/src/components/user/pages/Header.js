import React,{useState,useEffect} from 'react';
import { Drawer,Menu } from 'antd';
// import Title from 'antd/lib/typography/Title';
// import axios from '../../../routers/axios';
import LocalStorages from '../../../services/localStorages'
import { useNavigate } from 'react-router-dom';
import {MenuOutlined} from '@ant-design/icons';
import {useDispatch} from 'react-redux'
import { updateRole } from '../../../services/store/Reducer'

function Header(props) {
    const dispatch = useDispatch(); 
    const [role , setRole] = useState(LocalStorages.getRole())
    const [openMenu,setOpenMenu] = useState(false);
    useEffect(() => {
        //AppMenu(openMenu)
        dispatch(updateRole(LocalStorages.getRole()))
    })
    return (
        <div>
            <div style={{
                
            }}>
                <MenuOutlined style={{color:'white'}} onClick={() =>{setOpenMenu(true)}}/>
            </div>
            <AppMenu setRole={props.setRole}/>
            <Drawer 
            style={{backgroundColor:"#7BBCB0",color:"white"}}
            placement='left'
            open={openMenu}
            onClose={()=>{
                setOpenMenu(false)
            }} 
            closable={false} >
                <AppMenu isInline />
            </Drawer>
        </div>
        )
}
function AppMenu(props,{isInline=false}){
    const navigate = useNavigate();
    const Logout = () => {
        LocalStorages.removeToken('all');
        navigate("/user/login");
    };
    return (
        <div>
            <Menu
                style={{backgroundColor:"#7BBCB0"}}
                mode={isInline ? "inline" : "horizontal"}
                items={[
                    {
                        label:"Search",
                        key: "search",
                        style: {color:"white"}
                    },{
                        label:"Booking",
                        key: "booking",
                        style: {color:"white"}
                    },{
                        label:"logout",
                        key: "logout",
                        style: {color:"white"}
                        // onClick: Logout()
                    }
                ]}
                onClick={(e) => {
                    if(e.key === 'logout'){
                        Logout()
                    }else{
                        navigate("/user/"+e.key);
                    }
                }}
            >
            </Menu>
        </div>
    );
}
export default Header