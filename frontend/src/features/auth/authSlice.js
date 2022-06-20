import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import authService from './authService';

// Get user from localStorage
const user = JSON.parse(localStorage.getItem('user'))

const initialState = {
    user: user ? user : null,
    isError: false,
    isSuccess: false,
    isLoading: false,
    message: ''
}

// Register user
export const register = createAsyncThunk('auth/register', async (user, thunkApi) => {
    try {
        return await authService.register(user)
    } catch (error) {
        const message = (error.responce && error.response.data && error.response.data.message) || error.message || error.toString()
        return thunkApi.rejectWithValue(message)
    }
})

export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        reset: (state) => {
           state.isLoading = false
           state.isSuccess = false
           state.isError = false
           state.message = '' 
        }
    },
    extraReducers: () => {}
})

export const {reset} = authSlice.actions
export default authSlice.reducer