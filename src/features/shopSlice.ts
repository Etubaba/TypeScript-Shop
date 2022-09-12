import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from './store'
// import { useSelector } from 'react-redux'


type IUser ={
    _id: string,
    password: string,
    username: string,
    email: string
}

interface IInitialState {
    isLoggedIn: boolean;
    userData: IUser | null;
    productId: string;
}

const initialState:IInitialState = {
    isLoggedIn: false,
    
    userData: null,
    productId:''
}
export const shopSlice = createSlice({
    name:'shop',
    initialState,
    reducers:{
        handleLogin:(state,action:PayloadAction<boolean>)=>{
            state.isLoggedIn=action.payload
            localStorage.setItem('login','true')
        },
        userProps:(state,action:PayloadAction<IUser | null>)=>{
            state.userData=action.payload
            state.isLoggedIn=true
            localStorage.setItem('login','true')
            localStorage.setItem('user',JSON.stringify(state.userData))
        },
        productDetails: (state,action:PayloadAction<string>)=>{
            state.productId = action.payload
            localStorage.setItem('id',state.productId)
        }
    }
})



export const { handleLogin,userProps,productDetails}=shopSlice.actions


export default shopSlice.reducer



// export const userDetails =useSelector((state:RootState)=>state.shop.userData)
// export const loginState=useSelector((state:RootState)=>state.shop.isLoggedIn)
