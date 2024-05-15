import axios from 'axios';

// import {userData} from '../components/LearnerComponent/Register';
import  { useState } from 'react';


const useOTPState = () => {
  const [verifyOtp, setVerifyOTP] = useState("");

  const setOTP = (otp) => {
    setVerifyOTP (otp);  
  };
  return [verifyOtp,setVerifyOTP]
};
export default useOTPState;



const BASE_URL = 'http://localhost:5199/lxp/learner/registration';

const registerUser = async (userData) => {
  try {
    console.log("user",userData);
    const response = await axios.post(`http://localhost:5199/lxp/learner/registration?Email=${userData.email}&Password=${userData.password}&Role=aDmin&CreatedBy=Admin&FirstName=${userData.firstName}&LastName=${userData.lastName}&Dob=${userData.dob}&Gender=male&ContactNumber=09025704994&Stream=c%23`);
    console.log("response",response.data)
  } catch (error) {
    throw error.response.data || error.message;
  }
};

const sendOTP = async (email, handleOTPSubmit) => {
  try {
    // console.log("email:",email);
    console.log("Sending OTP reques for email:",email)
    const response = await axios.post(`http://localhost:5163/api/Registration?email=${email}`);
    const otp = response.data.sOTP;
    console.log("otp:",otp);
    // console.log("Response:",response);
    if (otp){
      // const otp = response.data.sOTP;
      // setVerifyOTP(otp);
      handleOTPSubmit(otp);
      // window.alert('OTP sent successfuly');
       console.log("otp:",otp);
    } else{
      throw new Error('Invalid response from server');
    }

} catch (error) {
    console.error('Error:', error);
    window.alert('Failed to send OTP',error);
}
};

const verifyOTP = async (email, otp) => {
  try {
    const response = await axios.post(`${BASE_URL}/verifyOTP`, { email, otp });
    return response.data;
  } catch (error) {
    throw error.response.data || error.message;
  }
};

export { registerUser, sendOTP, verifyOTP,useOTPState };