import { useNavigate } from "react-router-dom";
import React, { useEffect, useRef } from "react";
// import { Box } from "@mui/system";
import Keycloak from "keycloak-js";

const Login = () => {
  const navigate = useNavigate()
  let initOptions = {
	url: "https://auth.mission4us.com/auth",
	realm: "local_tests",
	clientId: "m4us_tests",
	onLoad: "login-required",
  
	// KeycloakResponseType: 'code'
  };
  const isRun = useRef(false)
    // const { keycloak } = useKeycloak();

    // const isLoggedIn = keycloak.authenticated;
	// if(isRun.current) return;

	// isRun.current=true;
const keycloak = new Keycloak(initOptions);

useEffect(() => {
	if(isRun.current) return;

	isRun.current=true;
  keycloak
	.init({ onLoad: initOptions.onLoad, KeycloakResponseType: "code" })
	.then((auth) => {
	  if (!auth) {
		window.location.reload();
	  } else {
		navigate("/dashboard");
		// const userRole = localStorage.getItem("userRole")
		localStorage.setItem("user", JSON.stringify({role: "ADMIN"}))
		// localStorage.getItem("userRole")
	  }
	  localStorage.setItem("bearer-token", keycloak.token);
	  localStorage.setItem("refresh-token", keycloak.refreshToken);
	//   const expires_in=Math.round(keycloak.tokenParsed.exp + keycloak.timeSkew -
	// 	new Date().getTime() / 1000)
	// 	localStorage.setItem("expires_in", expires_in);
	  
	  setTimeout(() => {
		keycloak
		  .updateToken(70)
		  .then((refreshed) => {
			if (refreshed) {
			  console.debug("Token refreshed" + refreshed);
			} else {
			  console.warn(
				"Token not refreshed, valid for " +
				  Math.round(
					keycloak.tokenParsed.exp +
					  keycloak.timeSkew -
					  new Date().getTime() / 1000,
				  ) +
				  " seconds",
			  );
			//   dispatch(logout());
			// 	window.location.href = '/login';
			 
			}
		  })
		  .catch((error) => {
			console.error(error, "Failed to refresh token");
		  });
	  }, 60000);
	})
	.catch((error) => {
	  console.error(error, "Authenticated Failed");
	});
  
}, [keycloak]);
  //ADMIN
  //USER

  //   const login = () => {
  //   	localStorage.setItem("user", JSON.stringify({role: "USER"}))
  //   	navigate("/dashboard")
  //   }

  return (
    // <Box
    //   sx={{
    //     display: "flex",
    //     justifyContent: "center",
    //     alignItems: "center",
    //     flexDirection: "column",
    //     flex: 1,
    //     backgroundColor: "#990",
    //     flexGrow: 1,
    //     padding: 20,
    //   }}
    // >
    //   <h2>Welcome to login page! </h2>
    //   <p>Please loging to continue</p>
    //   {/* <button onClick={login}> Login</button> */}
    // </Box>
    <>
    </>
  );
};

export default Login