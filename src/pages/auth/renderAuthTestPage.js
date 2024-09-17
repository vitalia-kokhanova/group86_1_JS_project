//import { element } from"../../../vars";
//import { signInWithEmailAndPassword } from"firebase/auth";
import "./_auth.scss";
export function renderAuthTest(element) {
	element.innerHTML = `
  
        <h1>Authentification</h1>
        <div class="avtori">
        <div class='wrapper-form'>
        <form  class="login"name="login">
        <h1 name="title"class="title">Авторизация</h1>
        <h3 class='errnone' ></h3>
        <div><p class"text">Ещё нет аккаунта?<p/><a  class="span"href="/registration">Зарегистрироваться</a></div>
       
        <div><input class="email_2"type="email"placeholder='email' name="email"/>
        </div>
        
          <div><input class="password"type="password"placeholder='password' name="password"/>
       </div>
        <div class='wr_btn' >
          <button id='btnSend' class="button_1"type="submit">Войти</button>
        </div>
      </form>
      </div>
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
		err.classList.add("none");
		signInWithEmailAndPassword(auth, email.value, password.value)
			.then(() => {
				window.location.pathname = "/";
			})
			.catch((errText) => {
				console.error(errText);
				err.classList.remove("none");
				err.textContent = "Не верный логин или пароль";
			});
	});
}
