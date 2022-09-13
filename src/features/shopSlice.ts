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
    isLoggedIn: boolean|null;
    userData: IUser | null;
    productId: string|null;
}

const initialState:IInitialState = {
    isLoggedIn: localStorage.getItem('tslogin')?JSON.parse(localStorage.getItem('tslogin')|| ''):false,
    
    userData: localStorage.getItem('tsuser')?JSON.parse(localStorage.getItem('tsuser') || ''):null,
    productId:localStorage.getItem('tsproduct')?localStorage.getItem('tsproduct'):''
}
export const shopSlice = createSlice({
    name:'shop',
    initialState,
    reducers:{
        handleLogin:(state,action:PayloadAction<boolean>)=>{
            state.isLoggedIn=action.payload
            localStorage.setItem('tslogin','true')
        },
        userProps:(state,action:PayloadAction<IUser | null>)=>{
            state.userData=action.payload
            state.isLoggedIn=true
            //@ts-ignore
            localStorage.setItem('tslogin',true)
            localStorage.setItem('tsuser',JSON.stringify(state.userData))
        },
        productDetails: (state,action:PayloadAction<string>)=>{
            state.productId = action.payload
            localStorage.setItem('tsproduct',state.productId)
        }
    }
})



export const { handleLogin,userProps,productDetails}=shopSlice.actions


export default shopSlice.reducer



// export const userDetails =useSelector((state:RootState)=>state.shop.userData)
// export const loginState=useSelector((state:RootState)=>state.shop.isLoggedIn)
