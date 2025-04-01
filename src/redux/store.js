import {configureStore} from '@reduxjs/toolkit';
import loginReducer from './LoginSlice';
import logoutReducer from './LogoutSlice';
import getProfileReducer from './GetProfileSlice';
import myClassMateReducer from './MyClassMateSlice';
import changePasswordReducer from './ChangePasswordSlice';  
import getSubjectReducer from './GetSubjectSlice';
import timeTableReducer from './TimeTableSlice';
import homeWorkReducer from './HomeWorkSlice';
import getLeaveReducer from './GetLeaveSlice';
import applyLeaveReducer from './ApplyLeaveSlice';
import announcementsReducer from './AnnouncementsSlice';
import getEventReducer from './GetEventSlice';
import annualCalenderReducer from './GetAnnualCalender';
import bookAppointmentReducer from './BookAppointmentSlice';
import getAppointmentsReducer from './GetAppointmentsSlice';
import getTestsReducer from './GetTestsSlice';
import getTestDetailReducer from './GetTestDetailSlice';
import ackTestReducer from './AcknowladgeTestSlice';
import myAttendanceReducer from './MyAttendanceSlice';

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
    getLeaveReducer: getLeaveReducer,
    applyLeaveReducer: applyLeaveReducer,
    announcementsReducer: announcementsReducer,
    getEventReducer: getEventReducer,
    annualCalenderReducer: annualCalenderReducer,
    bookAppointmentReducer: bookAppointmentReducer,
    getAppointmentsReducer: getAppointmentsReducer,
    getTestsReducer: getTestsReducer,
    getTestDetailReducer: getTestDetailReducer,
    ackTestReducer: ackTestReducer,
    myAttendanceReducer: myAttendanceReducer,
  },
});

export default store;
