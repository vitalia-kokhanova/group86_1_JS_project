
import { initializeApp } from "firebase/app";
import {
	signInWithEmailAndPassword,
	getAuth
	
} from "firebase/auth";
import "./_auth.scss";

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

export function renderAuthTest(element) {
	element.innerHTML = `
    <h1>Authentification</h1>
		<div class="wrapper-form">
			<form
				class="login"
				name="login"
				action="localhost:5173/profile"
				method="GET"
			>
				<h1 name="title" class="title">Авторизация</h1>
				<h3 class="error" id="message"></h3>
				<div>
					<p class="text">Ещё нет аккаунта?
					</p>
					<a href="/auth/registration">Зарегистрироваться</a>
				</div>
				<div>
					<input
						class="email"
						id="email"
						type="email"
						placeholder="email"
						name="email"
						required
					/>
				</div>
				<div>
					<input
						class="password"
						type="password"
						id="password"
						placeholder="password"
						name="password"
						required
					/>
				</div>
				<ol class="message"></ol>
				<div class="wr_btn">
					<button id="login-btn" class="button_1">Войти</button>
				</div>
			</form>
		</div>
    `;
	const formLogin = document.forms.login;
	const err = document.querySelector(".err");
	const { email, password } = formLogin;
  
	formLogin.addEventListener("submit", (e) => {
	  e.preventDefault();
	  if (email.value == "" || password.value == "") {
		err.classList.remove("none");
		err.textContent = "Заполните все поля";
		return;
	  }
	 
	  signInWithEmailAndPassword(auth, email.value, password.value)
		.then(() => {
		  window.location.href = "/profile";
		})
		.catch((errText) => {
			err.textContent = "Не верный логин или пароль";

		 
		});
	});
}
