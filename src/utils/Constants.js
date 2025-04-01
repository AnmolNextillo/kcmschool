import { showMessage } from "react-native-flash-message";

//Api BaseUrl
export const ApiBaseUrl = 'https://api.kcmschool.co.in/v1/';

//Api Names
export const loginApi = 'student/login';
export const logout = 'student/logout';
export const profile = 'student/profile';                   
export const tests = 'student/tests';                   
export const myClassMates = 'student/myClassMates';
export const changePassword = 'student/changePassword';
export const mySubjects = 'student/mySubjects';
export const timeTable = 'student/timeTable';
export const homeWork = 'student/homeWork';
export const leaves = 'student/leaves';
export const announceMents = 'student/announceMents';
export const events = 'student/events';
export const annualCalender = 'student/annualCalender';
export const appointments = 'student/appointments';
export const testDetails = 'student/testDetails';
export const ackTest = 'student/ackTest';
export const myAttendanceApi = 'student/myAttendance';
export const getAppVersionsApi = 'student/getAppVersions';


export const handleShowMessage = (message,type) => {
    showMessage({
      message: "KCM School",
      description: message,
      type: type, // 'success', 'info', 'warning', 'danger'
      position:'top'
    });
  };

  export const formatDate = (isoString) => {
    const date = new Date(isoString);
    return date.toLocaleDateString("en-US", { month: "short", day: "2-digit", year: "numeric" });
  };