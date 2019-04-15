// Import all the components here
import SideBar from './components/MainAdmin/SideBar.vue'
import Dashboard from './components/MainAdmin/Dashboard.vue';
import AllUser from './components/User/AllUser.vue';
import AsignRole from './components/User/AsignRole.vue';
// student Master
import AllStudent from './components/Student/AllStudent.vue'
import CasteMaster from './components/Student/CasteMaster.vue'
import ClassMaster from './components/Student/ClassMaster.vue'
import HouseMaster from './components/Student/HouseMaster.vue'
import ReligionwiseReport from './components/Student/ReligionwiseReport.vue'
import SectionMaster from './components/Student/SectionMaster.vue'
import SessionMaster from './components/Student/SessionMaster.vue'
import StreamMaster from './components/Student/StreamMaster.vue'
import StudentDynamicReport from './components/Student/StudentDynamicReport.vue'
import StudentMaster from './components/Student/StudentMaster.vue'
import StudentWiseReport from './components/Student/StudentWiseReport.vue'
import StudentYearwiseReport from './components/Student/StudentYearwiseReport.vue'
import SubjectMaster from './components/Student/SubjectMaster.vue'
import UpdateAddress from './components/Student/UpdateAddress.vue'
import UpdateAdmissionDetails from './components/Student/UpdateAdmissionDetails.vue'
import UpdateFamilyDetails from './components/Student/UpdateFamilyDetails.vue'
import UpdateFeeDetails from './components/Student/UpdateFeeDetails.vue'
import UpdatePreviosSchoolInformtion from './components/Student/UpdatePreviosSchoolInforamtion.vue'
import UpdateScholarshipSection from './components/Student/UpdateScholarshipSection.vue'
import UpdateStudentDetails from './components/Student/UpdateStudentDetails.vue'
import ActivityLog from './components/Profile/ActivityLog.vue'
import UserProfile from './components/Profile/UserProfile.vue'
import Setting from './components/Profile/Setting.vue'


export const routes = [
  { path : '/' , component : Dashboard },
  { path : '/User' , component : AllUser },
  { path : '/AsignRole', component : AsignRole },
  { path : '/AllStudent', component : AllStudent },
  { path : '/CasteMaster', component : CasteMaster },
  { path : '/ClassMaster', component : ClassMaster },
  { path : '/HouseMaster', component : HouseMaster },
  { path : '/ReligionwiseReport', component : ReligionwiseReport },
  { path : '/SectionMaster', component : SectionMaster },
  { path : '/StreamMaster', component : StreamMaster },
  { path : '/SessionMaster', component : SessionMaster },
  { path : '/StudentDynamicReport', component : StudentDynamicReport },
  { path : '/StudentMaster', component : StudentMaster },
  { path : '/StudentWiseReport', component : StudentWiseReport },
  { path : '/StudentYearwiseReport', component : StudentYearwiseReport },
  { path : '/SubjectMaster', component : SubjectMaster },
  { path : '/UpdateAddress', component : UpdateAddress },
  { path : '/UpdateAdmissionDetails', component : UpdateAdmissionDetails },
  { path : '/UpdateFamilyDetails', component : UpdateFamilyDetails },
  { path : '/UpdateFeeDetails', component : UpdateFeeDetails },
  { path : '/UpdatePreviosSchoolInformtion', component : UpdatePreviosSchoolInformtion },
  { path : '/UpdateScholarshipSection', component : UpdateScholarshipSection },
  { path : '/UpdateStudentDetails', component : UpdateStudentDetails },
  { path : '/ActivityLog', component : ActivityLog },
  { path : '/UserProfile', component : UserProfile },
  { path : '/Setting', component : Setting }



  // Student Master



];
