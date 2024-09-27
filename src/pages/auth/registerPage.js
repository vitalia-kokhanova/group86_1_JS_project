import "./_auth.scss";
import { initializeApp } from "firebase/app";
import {
	getAuth,
	createUserWithEmailAndPassword
} from "firebase/auth";

export const firebaseConfig = {
	apiKey: "AIzaSyBv33wcqlvshLdxukPHWCTXgvA2HBIhHzY",
	authDomain: "project-js-9e6d9.firebaseapp.com",
	projectId: "project-js-9e6d9",
	storageBucket: "project-js-9e6d9.appspot.com",
	messagingSenderId: "12456906342",
	appId: "1:12456906342:web:99533e85fc9948d2a727a7",
	measurementId: "G-K9TMHH2KLW",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);





export function registrPage(element) {
	element.innerHTML = `
        <h1>Registration</h1>
		<div class="wrapper-form">
			<form class="login" name="Reg">
				<h1 class="name_1" name="title">Регистрация</h1>
				<h3 class="error" id="error"></h3>
				<div>
					<p class="text">Есть аккаунт?</p>
					<a href="/auth">Авторизоваться</a>
				</div>
				<div>
					<input
						type="email"
						id="emailReg"
						class="email"
						placeholder="email"
						name="email"
					/>
				</div>
				<div>
					<input
						type="text"
						class="lastName"
						id="nameReg"
						placeholder="имя "
						name="name"
						minlength="3"
					/>
				</div>
				<div>
					<input
						type="password"
						id="passwordReg"
						class="password"
						minlength="8"
						placeholder="password"
						name="password"
					/>
				</div>
				<div class="wr_btn">
					<button id="btnSend" class="button_1" type="submit">
						Зарегистрироваться
					</button>
				</div>
			</form>
		</div>
    `;
	const formReg = document.forms.Reg;
  const err = document.querySelector(".error");
  const { email, password, names} = formReg;
 

  formReg.addEventListener("submit", (e) => {
    e.preventDefault()
	
	createUserWithEmailAndPassword(auth, email.value, password.value)
			.then((userCredential) => {
				window.location.href = "/profile";
				console.log(userCredential);
			})
			.catch((error) => {
				err.innerHTML = "Пользователь с таким email уже существует";
				err.classList.remove("none");
			});
})

}
