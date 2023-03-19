import {useNavigate} from "react-router-dom"
import React from "react";
import Keycloak from 'keycloak-js';
let initOptions = {
    url: 'https://auth.mission4us.com/auth',
    realm: 'local_tests',
    clientId: 'myclient',
    onLoad: 'login-required',
    KeycloakResponseType: 'code'
}
const keycloak =new Keycloak(initOptions);
keycloak.init({ onLoad: initOptions.onLoad, KeycloakResponseType: 'code' }).then((auth) => {
    if (!auth) {
        window.location.reload();
    } else {
        console.info("Authenticated");
    }
    setTimeout(() => {
        keycloak.updateToken(70).then((refreshed) => {
            if (refreshed) {
                console.debug('Token refreshed' + refreshed);
            } else {
                console.warn('Token not refreshed, valid for '
                    + Math.round(keycloak.tokenParsed.exp + keycloak.timeSkew - new Date().getTime() / 1000) + ' seconds');
            }
        }).catch((error) => {
            console.error(error,'Failed to refresh token');
        });

    }, 60000)
}).catch((error) => {
    console.error(error,"Authenticated Failed");
});
const Login = () => {
	// const navigate = useNavigate()

	//ADMIN
	//USER

	// const login = () => {
	// 	localStorage.setItem("user", JSON.stringify({role: "USER"}))
	// 	navigate("/dashboard")
	// }

	return (
		<div className="login">
			<h2>Welcome to login page! </h2>
			<p>Please loging to continue</p>
			{/* <button onClick={login}> Login</button> */}
		</div>
        // <>
        // </>
	)
}

export default Login
