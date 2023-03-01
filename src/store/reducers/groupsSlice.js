// rejoindre un groupe, créer un groupe, quitter un groupe, modifier le groupe. Dans un 1er temps on se concentre sur création d'un groupe et rejoindre le groupe.

import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from "axios";
// import axiosInstance from "../../api/axiosInstance";
const axiosInstance = axios.create({
  baseURL: "https://travelsquadb.up.railway.app/",
  withCredentials: true,
})

export const fetchGroups = createAsyncThunk('groups/fetchGroups', 
async () => {
  try {
    const response = await axiosInstance.get("/countries");
    return [...response.data];
  } catch(err){
    return err.message
  }
}) 


// ----- chat gpt

import { createAsyncThunk } from '@reduxjs/toolkit';
import axiosInstance from '../axiosInstance';
import { fetchDataSuccess, fetchDataFailure, startLoading } from './slice';

export const fetchAsyncData = createAsyncThunk(
  'example/fetchData',
  async () => {
    const response = await axiosInstance.get('/your-api-endpoint');
    return response.data;
  }
);

export const fetchThunkData = () => async (dispatch) => {
  try {
    dispatch(startLoading());
    const response = await axiosInstance.get('/your-api-endpoint');
    dispatch(fetchDataSuccess(response.data));
  } catch (err) {
    dispatch(fetchDataFailure(err.message));
  }
};

// ------



export const groupsSlice = createSlice({
  
  name:"groups",
  initialState:[],
  reducers: {
    createGroup: (state, action) => {},
    joinGroup: (state, action) => {},
    // leaveGroup: (state, action) => {},
    // deleteGroup: (state, action) => {}
    
  
    
  }
  
})