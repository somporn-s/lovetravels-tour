import React,{useState,useEffect} from 'react';
import { Drawer,Menu,Flex,notification } from 'antd';
// import Title from 'antd/lib/typography/Title';
// import axios from '../../../routers/axios';
import LocalStorages from '../../../services/localStorages'
import { useNavigate } from 'react-router-dom';
import {MenuOutlined} from '@ant-design/icons';
import {useDispatch} from 'react-redux'
import { updateRole } from '../../../services/store/Reducer'
import './allStyle.css';

function Header(props) {
    const dispatch = useDispatch(); 
    const [openMenu,setOpenMenu] = useState(false);
    useEffect(() => {
        dispatch(updateRole(LocalStorages.getRole()))
    })
    return (
        <div>
            <Flex gap="middle" justify="space-between" horizontal style={{backgroundColor:'#7BBCB0',height:'45px'}}  className="iconMenu">
                <div className='bg_color' style={{fontSize:'20px',padding:'5px 0 0 10px'}}>LoveTravels</div>
                <div><MenuOutlined style={{color:'white',fontSize:'20px',padding:'10px 10px 0 0'}} onClick={() =>{setOpenMenu(true)}}/></div>
            </Flex>
            <span className="headerMenu">
                <AppMenu />
            </span>
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
function AppMenu({isInline=false}){
    const navigate = useNavigate();
    const dispatch = useDispatch(); 
    const Logout = () => {
        LocalStorages.removeToken('all');
        dispatch(updateRole(LocalStorages.getRole()))
        notification.error({
                    message: `Logout successfully !!`
                });
        navigate("/user/login");
    };
    let items = [];
    if(LocalStorages.getRole() === 'member'){
        items = [
                    {
                        label:"Search",
                        key: "search",
                        style: {color:"white"}
                    },{
                        label:"Booking",
                        key: "booking",
                        style: {color:"white"}
                    },{
                        label:"Profile",
                        key: "profile",
                        style: {color:"white"}
                    },{
                        label:"logout",
                        key: "logout",
                        style: {color:"white"}
                    }
                ]
    }else{
        items = [
                    {
                        label:"Search",
                        key: "search",
                        style: {color:"white"}
                    },{
                        label:"login",
                        key: "login",
                        style: {color:"white"}
                    }
                ]
    }
    return (
        <div style={{backgroundColor:"#7BBCB0",overflow: 'auto'}}>
            <div className='bg_color' style={{fontSize:'20px',padding:'8px 0 0 10px',float:'left'}}>LoveTravels</div>
            <Menu
                style={isInline ? {backgroundColor:"#7BBCB0",float: 'left'}:{backgroundColor:"#7BBCB0",float: 'right',width:'380px'}}
                mode={isInline ? "inline" : "horizontal"}
                items={items}
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