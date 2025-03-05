import {configureStore} from '@reduxjs/toolkit';
import loginReducer from './LoginSlice';
import logoutReducer from './LogoutSlice';
import getProfileReducer from './GetProfileSlice';
import myClassMateReducer from './MyClassMateSlice';
import changePasswordReducer from './ChangePasswordSlice';  
import getSubjectReducer from './GetSubjectSlice';
import timeTableReducer from './TimeTableSlice';
import homeWorkReducer from './HomeWorkSlice';

const store = configureStore({
  reducer: {
    loginReducer: loginReducer,
    logoutReducer: logoutReducer,
    getProfileReducer: getProfileReducer,
    myClassMateReducer: myClassMateReducer,
    changePasswordReducer: changePasswordReducer,
    getSubjectReducer: getSubjectReducer,
    timeTableReducer: timeTableReducer,
    homeWorkReducer: homeWorkReducer,
  },
});

export default store;
