<template lang="html">
  <div class="">
    <div id="sidebar" class="sidebar py-3">
        <div class="text-gray-400 text-uppercase px-3 px-lg-4 py-4 font-weight-bold small headings-font-family">MAIN</div>
        <ul class="sidebar-menu list-unstyled">
           <router-link to="/" tag="li" active-class="active" exact> <a class="sidebar-link text-muted "> <img src="/src/img/icon/house.png" class="mr-3"></img> Home </a> </router-link>
        <!--  <router-link to="/TestTag" tag="li" active-class="active" class="sidebar-list-item" exact><a class="sidebar-link text-muted"> <i class="fas fa-graduation-cap mr-3 text-gray"></i> All Students</a></router-link>
          <router-link to="/TestTag" tag="li" active-class="active" class="sidebar-list-item" exact><a class="sidebar-link text-muted"> <i class="fas fa-chalkboard-teacher mr-3 text-gray"></i> All Checkers</a></router-link>
          <router-link to="/TestTag" tag="li" active-class="active" class="sidebar-list-item" exact><a class="sidebar-link text-muted"> <i class="far fa-file-alt mr-4 text-gray"></i> All Test</a></router-link>
          <router-link to="/TestTag" tag="li" active-class="active" class="sidebar-list-item" exact><a class="sidebar-link text-muted"> <i class="fas fa-ad mr-3 text-gray"></i> All Questions</a></router-link>
          <router-link to="/TestTag" tag="li" active-class="active" class="sidebar-list-item" exact><a class="sidebar-link text-muted"> <i class="fas fa-ad mr-3 text-gray"></i> Notice</a></router-link> -->
          <li class="sidebar-list-item"><a href="/" data-toggle="collapse" data-target="#usermaster" aria-expanded="false" aria-controls="pages" class="sidebar-link text-muted"> <img src="/src/img/icon/user.png" class="mr-3"></img> <span>User Master</span></a>
            <div id="usermaster" class="collapse">
              <ul class="sidebar-menu list-unstyled border-left border-primary border-thick">
                <router-link to="/User" tag="li" active-class="active" class="sidebar-list-item" exact><a class="sidebar-link text-muted">  All User</a></router-link>
                <router-link to="/AsignRole" tag="li" active-class="active" class="sidebar-list-item" exact><a class="sidebar-link text-muted">  Asign Role</a></router-link>
              </ul>
            </div>
          </li>
          <li class="sidebar-list-item"><a href="#" data-toggle="collapse" data-target="#studentmaster" aria-expanded="false" aria-controls="pages" class="sidebar-link text-muted"><img src="/src/img/icon/learning.png" class="mr-3"></img><span>Student Master</span></a>
            <div id="studentmaster" class="collapse">
              <ul class="sidebar-menu list-unstyled border-left border-primary border-thick">
                  <router-link to="/CasteMaster" tag="li" active-class="active" class="sidebar-list-item" exact><a class="sidebar-link text-muted">  Caste Master</a></router-link>
                  <router-link to="/classMaster" tag="li" active-class="active" class="sidebar-list-item" exact><a class="sidebar-link text-muted">  Class Master</a></router-link>
                  <router-link to="/SectionMaster" tag="li" active-class="active" class="sidebar-list-item" exact><a class="sidebar-link text-muted">  Section Master</a></router-link>
                  <router-link to="/HouseMaster" tag="li" active-class="active" class="sidebar-list-item" exact><a class="sidebar-link text-muted">  House Master</a></router-link>
                  <router-link to="/SubjectMaster" tag="li" active-class="active" class="sidebar-list-item" exact><a class="sidebar-link text-muted">  Subject Master</a></router-link>
                  <router-link to="/StreamMaster" tag="li" active-class="active" class="sidebar-list-item" exact><a class="sidebar-link text-muted">  Stream Master</a></router-link>
                  <router-link to="/SessionMaster" tag="li" active-class="active" class="sidebar-list-item" exact><a class="sidebar-link text-muted">  Session Master </a></router-link>
                  <router-link to="/StudentMaster" tag="li" active-class="active" class="sidebar-list-item" exact><a class="sidebar-link text-muted">  Student Master</a></router-link>
                  <router-link to="/AllStudent" tag="li" active-class="active" class="sidebar-list-item" exact><a class="sidebar-link text-muted">  All Student </a></router-link>

              </ul>
            </div>
          </li>
          <li class="sidebar-list-item"><a href="#" data-toggle="collapse" data-target="#studentreport" aria-expanded="false" aria-controls="pages" class="sidebar-link text-muted"><img src="/src/img/icon/analytics.png" class="mr-3"></img><span>Student  Report</span></a>
            <div id="studentreport" class="collapse">
              <ul class="sidebar-menu list-unstyled border-left border-primary border-thick">
                <router-link to="/StudentYearwiseReport" tag="li" active-class="active" class="sidebar-list-item" exact><a class="sidebar-link text-muted"> Student Yearwise Report  </a></router-link>
                <router-link to="/ReligionwiseReport" tag="li" active-class="active" class="sidebar-list-item" exact><a class="sidebar-link text-muted">  Religion Wise Report </a></router-link>
                <router-link to="/StudentDynamicReport" tag="li" active-class="active" class="sidebar-list-item" exact><a class="sidebar-link text-muted">  Student Dynamic Report </a></router-link>
              </ul>
            </div>
          </li>
          <li class="sidebar-list-item"><a href="#" data-toggle="collapse" data-target="#studentupdate" aria-expanded="false" aria-controls="pages" class="sidebar-link text-muted"><img src="/src/img/icon/student.png" class="mr-3"></img><span>Student Update</span></a>
            <div id="studentupdate" class="collapse">
              <ul class="sidebar-menu list-unstyled border-left border-primary border-thick">
                <router-link to="/UpdateAdmissionDetails" tag="li" active-class="active" class="sidebar-list-item" exact><a class="sidebar-link text-muted">  Update Admission Details </a></router-link>
                <router-link to="/UpdateScholarshipSection" tag="li" active-class="active" class="sidebar-list-item" exact><a class="sidebar-link text-muted">  Update Scholarship section </a></router-link>
                <router-link to="/UpdateStudentDetails" tag="li" active-class="active" class="sidebar-list-item" exact><a class="sidebar-link text-muted">  Update Student Details </a></router-link>
                <router-link to="/UpdateFamilyDetails" tag="li" active-class="active" class="sidebar-list-item" exact><a class="sidebar-link text-muted">  Update Family Details </a></router-link>
                <router-link to="/UpdateAddress" tag="li" active-class="active" class="sidebar-list-item" exact><a class="sidebar-link text-muted">  Update Address </a></router-link>
                <router-link to="/UpdatePreviosSchoolInformtion" tag="li" active-class="active" class="sidebar-list-item" exact><a class="sidebar-link text-muted">  Update Previous School Information </a></router-link>
                <router-link to="/UpdateFeeDetails" tag="li" active-class="active" class="sidebar-list-item" exact><a class="sidebar-link text-muted">  Update Fee Details </a></router-link>
              </ul>
            </div>
          </li>
          <li class="sidebar-list-item"><a href="#" data-toggle="collapse" data-target="#accountmaster" aria-expanded="false" aria-controls="pages" class="sidebar-link text-muted"><img src="/src/img/icon/advisor.png" class="mr-3"></img><span>Account Master</span></a>
            <div id="accountmaster" class="collapse">
              <ul class="sidebar-menu list-unstyled border-left border-primary border-thick">
                <li class="sidebar-list-item"><a href="#" class="sidebar-link text-muted pl-lg-5">Bank Master</a></li>
                <li class="sidebar-list-item"><a href="#" class="sidebar-link text-muted pl-lg-5">Cheque Entry</a></li>
                <li class="sidebar-list-item"><a href="#" class="sidebar-link text-muted pl-lg-5">Head Master</a></li>
                <li class="sidebar-list-item"><a href="#" class="sidebar-link text-muted pl-lg-5">Sub Head Master</a></li>
                <li class="sidebar-list-item"><a href="#" class="sidebar-link text-muted pl-lg-5">Party Master</a></li>
              </ul>
            </div>
          </li>
          <li class="sidebar-list-item"><a href="#" data-toggle="collapse" data-target="#account" aria-expanded="false" aria-controls="pages" class="sidebar-link text-muted"><img src="/src/img/icon/money-bag.png" class="mr-3"></img><span>Account</span></a>
            <div id="account" class="collapse">
              <ul class="sidebar-menu list-unstyled border-left border-primary border-thick">
                <li class="sidebar-list-item"><a href="#" class="sidebar-link text-muted pl-lg-5">Amount Received From User</a></li>
                <li class="sidebar-list-item"><a href="#" class="sidebar-link text-muted pl-lg-5">Bill Entry</a></li>
                <li class="sidebar-list-item"><a href="#" class="sidebar-link text-muted pl-lg-5">Payment</a></li>
                <li class="sidebar-list-item"><a href="#" class="sidebar-link text-muted pl-lg-5">Reciept</a></li>
                <li class="sidebar-list-item"><a href="#" class="sidebar-link text-muted pl-lg-5">Self Withdrawal</a></li>
                <li class="sidebar-list-item"><a href="#" class="sidebar-link text-muted pl-lg-5">Bank Deposit</a></li>
              </ul>
            </div>
          </li>
          <li class="sidebar-list-item"><a href="#" data-toggle="collapse" data-target="#accountreport" aria-expanded="false" aria-controls="pages" class="sidebar-link text-muted"><img src="/src/img/icon/report.png" class="mr-3"></img><span>Account Report</span></a>
            <div id="accountreport" class="collapse">
              <ul class="sidebar-menu list-unstyled border-left border-primary border-thick">
                <li class="sidebar-list-item"><a href="#" class="sidebar-link text-muted pl-lg-5">Due Bill</a></li>
                <li class="sidebar-list-item"><a href="#" class="sidebar-link text-muted pl-lg-5">User Wise Collection Report</a></li>
                <li class="sidebar-list-item"><a href="#" class="sidebar-link text-muted pl-lg-5"> Cash Book </a></li>
                <li class="sidebar-list-item"><a href="#" class="sidebar-link text-muted pl-lg-5">Bank Statement </a></li>
                <li class="sidebar-list-item"><a href="#" class="sidebar-link text-muted pl-lg-5">Cash Summary Report</a></li>
                <li class="sidebar-list-item"><a href="#" class="sidebar-link text-muted pl-lg-5">Bank Report</a></li>
                <li class="sidebar-list-item"><a href="#" class="sidebar-link text-muted pl-lg-5">Payment Report</a></li>
                <li class="sidebar-list-item"><a href="#" class="sidebar-link text-muted pl-lg-5">Bank Deposit Report</a></li>
              </ul>
            </div>
          </li>
          <li class="sidebar-list-item"><a href="#" data-toggle="collapse" data-target="#Professor" aria-expanded="false" aria-controls="pages" class="sidebar-link text-muted"><img src="/src/img/icon/professor.png" class="mr-3"></img><span>Professors</span></a>
            <div id="Professor" class="collapse">
              <ul class="sidebar-menu list-unstyled border-left border-primary border-thick">
                <li class="sidebar-list-item"><a href="#" class="sidebar-link text-muted pl-lg-5">All Professors</a></li>
                <li class="sidebar-list-item"><a href="#" class="sidebar-link text-muted pl-lg-5">Add Professor</a></li>
                <li class="sidebar-list-item"><a href="#" class="sidebar-link text-muted pl-lg-5">Assign Subject </a></li>
                <li class="sidebar-list-item"><a href="#" class="sidebar-link text-muted pl-lg-5">Assign Class </a></li>
                <li class="sidebar-list-item"><a href="#" class="sidebar-link text-muted pl-lg-5">Assign Student</a></li>
              </ul>
            </div>
          </li>
          <li class="sidebar-list-item"><a href="#" data-toggle="collapse" data-target="#lib" aria-expanded="false" aria-controls="pages" class="sidebar-link text-muted"><img src="/src/img/icon/bookshelf.png" class="mr-3"></img><span>Library</span></a>
            <div id="lib" class="collapse">
              <ul class="sidebar-menu list-unstyled border-left border-primary border-thick">
                <li class="sidebar-list-item"><a href="#" class="sidebar-link text-muted pl-lg-5">All Library Assests</a></li>
                <li class="sidebar-list-item"><a href="#" class="sidebar-link text-muted pl-lg-5">Add Asset</a></li>
              </ul>
            </div>
          </li>
          <li class="sidebar-list-item"><a href="#" data-toggle="collapse" data-target="#staff" aria-expanded="false" aria-controls="pages" class="sidebar-link text-muted"><img src="/src/img/icon/team.png" class="mr-3"></img><span>Staff</span></a>
            <div id="staff" class="collapse">
              <ul class="sidebar-menu list-unstyled border-left border-primary border-thick">
                <li class="sidebar-list-item"><a href="#" class="sidebar-link text-muted pl-lg-5">All Staff</a></li>
                <li class="sidebar-list-item"><a href="#" class="sidebar-link text-muted pl-lg-5">Add staff</a></li>
              </ul>
            </div>
          </li>
          <li class="sidebar-list-item"><a href="#" data-toggle="collapse" data-target="#transportmaster" aria-expanded="false" aria-controls="pages" class="sidebar-link text-muted"><img src="/src/img/icon/icon.png" class="mr-3"></img><span>Transposrt Master</span></a>
            <div id="transportmaster" class="collapse">
              <ul class="sidebar-menu list-unstyled border-left border-primary border-thick">
                <li class="sidebar-list-item"><a href="#" class="sidebar-link text-muted pl-lg-5">All Bus</a></li>
                <li class="sidebar-list-item"><a href="#" class="sidebar-link text-muted pl-lg-5">Add Bus</a></li>
                <li class="sidebar-list-item"><a href="#" class="sidebar-link text-muted pl-lg-5">Add Log Book </a></li>
                <li class="sidebar-list-item"><a href="#" class="sidebar-link text-muted pl-lg-5">Add Diesel In </a></li>
              </ul>
            </div>
          </li>
          <li class="sidebar-list-item"><a href="#" data-toggle="collapse" data-target="#storemanager" aria-expanded="false" aria-controls="pages" class="sidebar-link text-muted"><img src="/src/img/icon/online-store.png" class="mr-3"></img><span>Store Manager</span></a>
            <div id="storemanager" class="collapse">
              <ul class="sidebar-menu list-unstyled border-left border-primary border-thick">
                <li class="sidebar-list-item"><a href="#" class="sidebar-link text-muted pl-lg-5">Stock Master</a></li>
                <li class="sidebar-list-item"><a href="#" class="sidebar-link text-muted pl-lg-5">Supplier Master</a></li>
                <li class="sidebar-list-item"><a href="#" class="sidebar-link text-muted pl-lg-5">Category Master </a></li>
                <li class="sidebar-list-item"><a href="#" class="sidebar-link text-muted pl-lg-5">Item Master </a></li>
                <li class="sidebar-list-item"><a href="#" class="sidebar-link text-muted pl-lg-5">Department Master</a></li>
                <li class="sidebar-list-item"><a href="#" class="sidebar-link text-muted pl-lg-5">New Purchase</a></li>
                <li class="sidebar-list-item"><a href="#" class="sidebar-link text-muted pl-lg-5">Purchase Details</a></li>
                <li class="sidebar-list-item"><a href="#" class="sidebar-link text-muted pl-lg-5">Add Purchase Order</a></li>
                <li class="sidebar-list-item"><a href="#" class="sidebar-link text-muted pl-lg-5">Item Issue</a></li>
              </ul>
            </div>
          </li>
          <li class="sidebar-list-item"><a href="#" data-toggle="collapse" data-target="#studentattendance" aria-expanded="false" aria-controls="pages" class="sidebar-link text-muted"><img src="/src/img/icon/attendance.png" class="mr-3"></img><span>Student Attendance Master</span></a>
            <div id="studentattendance" class="collapse">
              <ul class="sidebar-menu list-unstyled border-left border-primary border-thick">
                <li class="sidebar-list-item"><a href="#" class="sidebar-link text-muted pl-lg-5">Attendance On Daily Basis</a></li>
                <li class="sidebar-list-item"><a href="#" class="sidebar-link text-muted pl-lg-5">Attendance Class Wise</a></li>
                <li class="sidebar-list-item"><a href="#" class="sidebar-link text-muted pl-lg-5">Attendance Report </a></li>
              </ul>
            </div>
          </li>
          <li class="sidebar-list-item"><a href="#" data-toggle="collapse" data-target="#fees" aria-expanded="false" aria-controls="pages" class="sidebar-link text-muted"><img src="/src/img/icon/hairdresser.png" class="mr-3"></img><span>Fees</span></a>
            <div id="fees" class="collapse">
              <ul class="sidebar-menu list-unstyled border-left border-primary border-thick">
                <li class="sidebar-list-item"><a href="#" class="sidebar-link text-muted pl-lg-5">Fee Collection</a></li>
                <li class="sidebar-list-item"><a href="#" class="sidebar-link text-muted pl-lg-5">Add Fees</a></li>
                <li class="sidebar-list-item"><a href="#" class="sidebar-link text-muted pl-lg-5">Fee Reciept </a></li>
              </ul>
            </div>
          </li>
          <li class="sidebar-list-item"><a href="#" class="sidebar-link text-muted"><img src="/src/img/icon/website.png" class="mr-3"></img><span>Student Registration</span></a></li>
        </ul>
      </div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="css" scoped>
  img{
    height: 30px;
    width: 30px;
  }
</style>
