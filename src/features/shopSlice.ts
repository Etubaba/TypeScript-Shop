import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from './store'
import { useSelector } from 'react-redux'


type IUser ={
    password: string,
    username: string,
    email: string
}

interface IInitialState {
    isLoggedIn: boolean;
    userData: IUser | null;
}

const initialState:IInitialState = {
    isLoggedIn:localStorage.getItem('login')?true : false,
    
    userData: null
}
export const shopSlice = createSlice({
    name:'shop',
    initialState,
    reducers:{
        handleLogin:(state,action:PayloadAction<boolean>)=>{
            state.isLoggedIn=action.payload
            localStorage.setItem('login','true')
        },
        user:(state,action:PayloadAction<IUser | null>)=>{
            state.userData=action.payload
            localStorage.setItem('user',JSON.stringify(state.userData))
        }
    }
})



export const { handleLogin,user}=shopSlice.actions


export default shopSlice.reducer



export const userDetails =useSelector((state:RootState)=>state.shop.userData)
export const loginState=useSelector((state:RootState)=>state.shop.isLoggedIn)
