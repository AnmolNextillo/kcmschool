import { showMessage } from "react-native-flash-message";

//Api BaseUrl
export const ApiBaseUrl = 'https://api.kcmschool.co.in/v1/';

//Api Names
export const loginApi = 'student/login';
export const logout = 'student/logout';
export const profile = 'student/profile';
export const myClassMates = 'student/myClassMates';
export const changePassword = 'student/changePassword';
export const mySubjects = 'student/mySubjects';
export const timeTable = 'student/timeTable';
export const homeWork = 'student/homeWork';


export const handleShowMessage = (message,type) => {
    showMessage({
      message: "KCM School",
      description: message,
      type: type, // 'success', 'info', 'warning', 'danger'
    });
  };
