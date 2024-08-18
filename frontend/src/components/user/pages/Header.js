import React,{useState,useEffect} from 'react';
import { Drawer,Menu,notification } from 'antd';
// import Title from 'antd/lib/typography/Title';
// import axios from '../../../routers/axios';
import LocalStorages from '../../../services/localStorages'
import { useNavigate } from 'react-router-dom';
import {MenuOutlined} from '@ant-design/icons';
import {useDispatch} from 'react-redux'
import { updateRole } from '../../../services/store/Reducer'
import allStyle from './allStyle.css';

function Header(props) {
    const dispatch = useDispatch(); 
    const [openMenu,setOpenMenu] = useState(false);
    useEffect(() => {
        //AppMenu(openMenu)
        dispatch(updateRole(LocalStorages.getRole()))
    })
    return (
        <div>
            <div style={{backgroundColor:'orange',height:'40px',justifyContent:'right'}}>
                <MenuOutlined style={{color:'black',fontSize:'20px',padding:'10px 0 0 10px'}} onClick={() =>{setOpenMenu(true)}}/>
            </div>
            <AppMenu />
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
        <div>
            <Menu
                style={{backgroundColor:"#7BBCB0"}}
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