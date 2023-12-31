// import React from "react"
// import { Link } from "react-router-dom"
// import {
//   CButton,
//   CCard,
//   CCardBody,
//   CCardGroup,
//   CCol,
//   CContainer,
//   CForm,
//   CFormInput,
//   CInputGroup,
//   CInputGroupText,
//   CRow
// } from "@coreui/react"
// import CIcon from "@coreui/icons-react"
// import { cilLockLocked, cilUser } from "@coreui/icons"

// const Login = () => {
//   return (
//     <div className="bg-light min-vh-100 d-flex flex-row align-items-center">
//       <CContainer>
//         <CRow className="justify-content-center">
//           <CCol md={8}>
//             <CCardGroup>
//               <CCard className="p-4">
//                 <CCardBody>
//                   <CForm>
//                     <h1>Login</h1>
//                     <p className="text-medium-emphasis">
//                       Sign In to your account
//                     </p>
//                     <CInputGroup className="mb-3">
//                       <CInputGroupText>
//                         <CIcon icon={cilUser} />
//                       </CInputGroupText>
//                       <CFormInput
//                         placeholder="Username"
//                         autoComplete="username"
//                       />
//                     </CInputGroup>
//                     <CInputGroup className="mb-4">
//                       <CInputGroupText>
//                         <CIcon icon={cilLockLocked} />
//                       </CInputGroupText>
//                       <CFormInput
//                         type="password"
//                         placeholder="Password"
//                         autoComplete="current-password"
//                       />
//                     </CInputGroup>
//                     <CRow>
//                       <CCol xs={6}>
//                         <CButton color="primary" className="px-4">
//                           Login
//                         </CButton>
//                       </CCol>
//                       <CCol xs={6} className="text-right">
//                         <CButton color="link" className="px-0">
//                           Forgot password?
//                         </CButton>
//                       </CCol>
//                     </CRow>
//                   </CForm>
//                 </CCardBody>
//               </CCard>
//               <CCard
//                 className="text-white bg-primary py-5"
//                 style={{ width: "44%" }}
//               >
//                 <CCardBody className="text-center">
//                   <div>
//                     <h2>Sign up</h2>
//                     <p></p>
//                     <Link to="/register">
//                       <CButton
//                         color="primary"
//                         className="mt-3"
//                         active
//                         tabIndex={-1}
//                       >
//                         Register Now!
//                       </CButton>
//                     </Link>
//                   </div>
//                 </CCardBody>
//               </CCard>
//             </CCardGroup>
//           </CCol>
//         </CRow>
//       </CContainer>
//     </div>
//   )
// }

// export default Login
import { CAlert } from "@coreui/react";
import React, { useState, useEffect } from "react";
import { Link, redirect } from "react-router-dom";
import {
  CButton,
  CCard,
  CCardBody,
  CCardGroup,
  CCol,
  CContainer,
  CForm,
  CFormInput,
  CInputGroup,
  CInputGroupText,
  CRow,
} from "@coreui/react";
import CIcon from "@coreui/icons-react";
import { cilLockLocked, cilUser } from "@coreui/icons";
import { initializeApp } from "firebase/app";
import {
  onAuthStateChanged,
  signInWithEmailAndPassword,
  getAuth,
} from "firebase/auth";
import { useNavigate } from "react-router-dom";
import logo from "src/assets/images/logo3.jpg";
import EntitlementService from "src/services/entitlement.service.js";
const firebaseConfig = {
  apiKey: "AIzaSyDWSQU1EcMIsu63oI-FdndsePSue7HVCSE",
  authDomain: "hsbc-greensavers-sams-dev.firebaseapp.com",
};
// const DefaultLayout = React.lazy(() => import("./layout/DefaultLayout"))
const app = initializeApp(firebaseConfig);

const auth = getAuth(app, {
  /* extra options */
});

const Login = () => {
  const navigate = useNavigate();
  const [emailId, setEmailId] = useState("");
  const [password, setPassword] = useState("");
  const [loginError, setLoginError] = useState(false);
  const [entitlements, setEntitlements] = useState({});
  const renderLoginError = () => {
    if (loginError) {
      return (
        <CAlert color="danger">Wrong credentials. Please try again.</CAlert>
      );
    }
    return null;
  };

  useEffect(() => {
    console.log("use effect entitlement update");
    console.log(entitlements);
    if (Object.keys(entitlements).length != 0) {
      if (
        (entitlements.entitlement.status === "S") &
        (entitlements.entitlement.userRole != null)
      ) {
        navigate("/dashboard");
      } else {
        navigate("/Page404");
      }
    } else if ((Object.keys(entitlements).length === 0) & (emailId === null)) {
      navigate("/Page404");
    }
  }, [entitlements]);

  const navigateToPages = async () => {
    const response = await EntitlementService.get(emailId)
      .then((response) => {
        console.log(response.data);
        setEntitlements(response.data);
      })
      .catch((e) => {
        console.log(e);
      });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log(emailId)
    // console.log(password)
    console.log("success");
    signInWithEmailAndPassword(auth, emailId, password)
      .then(function (firebaseUser) {
        console.log("got success login");
        navigateToPages()
      })
      .catch((error) => {
        console.log(error);

        setLoginError(true);
      });
  };

  return (
    <div className="bg-light min-vh-100 d-flex flex-row align-items-center">
      <CContainer>
        <CRow className="justify-content-center">
          <CCol md={8}>
            <CCardGroup>
              <CCard className="p-4">
                <CCardBody>
                  <div>
                    <img src={logo} alt="logo" />
                    <p>Student Assessment Management System</p>
                  </div>
                  <CForm onSubmit={handleSubmit}>
                    <h1>Login</h1>
                    <p className="text-medium-emphasis">
                      Sign In to your account
                    </p>
                    <CInputGroup className="mb-3">
                      <CInputGroupText>
                        <CIcon icon={cilUser} />
                      </CInputGroupText>
                      <CFormInput
                        value={emailId}
                        onChange={(e) => setEmailId(e.target.value)}
                        type="email"
                        placeholder="EmailID"
                        autoComplete="EmailID"
                      />
                    </CInputGroup>
                    <CInputGroup className="mb-4">
                      <CInputGroupText>
                        <CIcon icon={cilLockLocked} />
                      </CInputGroupText>
                      <CFormInput
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        type="password"
                        placeholder="Password"
                        autoComplete="current-password"
                      />
                    </CInputGroup>
                    <CRow>
                      <CCol xs={6}>
                        <CButton type="submit" color="primary" className="px-4">
                          Login
                        </CButton>
                      </CCol>
                      <CCol xs={6} className="text-right">
                        <CButton color="link" className="px-0">
                          Forgot password?
                        </CButton>
                      </CCol>
                    </CRow>
                  </CForm>
                  {renderLoginError()}
                </CCardBody>
              </CCard>
              <CCard
                className="text-white bg-primary py-5"
                style={{ width: "44%" }}
              >
                <CCardBody className="text-center">
                  <div>
                    <h2>Sign up</h2>
                    <div>
                      <img src={logo} alt="logo" />
                    </div>
                    <p>Student Assessment Management System</p>
                    <Link to="/register">
                      <CButton
                        color="primary"
                        className="mt-3"
                        active
                        tabIndex={-1}
                      >
                        Register Now!
                      </CButton>
                    </Link>
                  </div>
                </CCardBody>
              </CCard>
            </CCardGroup>
          </CCol>
        </CRow>
      </CContainer>
    </div>
  );
};

export default Login;
