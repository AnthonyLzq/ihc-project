import axios from 'axios';
import { BASE_URL } from '../keys';

const baseURL = BASE_URL;

const axiosInstance = (headers: any) => {
  const instance = axios.create({
    baseURL,
    headers,
  });

  return instance;
};

const Get = async (route: string, params = {}, headers = {}) => {
  try {
    const { data } = await axiosInstance(headers).get(route, {
      params,
    });
    
    return data;
  } catch (error) {
    throw error;
  }
};

const Post = async (route: string, json = {}, headers = {}) => {
  try {
    const { data } = await axiosInstance(headers).post(route, json);

    return data;
  } catch (error) {
    throw error;
  }
};

const Patch = async (route: string, json = {}, headers = {}) => {
  try {
    const { data } = await axiosInstance(headers).patch(route, json);

    return data;
  } catch (error) {
    throw error;
  }
};

const Delete = async (route: string, json = {}, headers = {}) => {
  try {
    const { data } = await axiosInstance(headers).delete(route, {
      data: json
    });

    return data;
  } catch (error) {
    throw error;
  }
};

export { Get, Post, Patch, Delete };
