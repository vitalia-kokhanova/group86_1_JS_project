
import "./_auth.scss";
import { initializeApp } from 'firebase/app';
import { getAuth, createUserWithEmailAndPassword,onAuthStateChanged} from "firebase/auth";

export const firebaseConfig = {
  apiKey: "AIzaSyBv33wcqlvshLdxukPHWCTXgvA2HBIhHzY",
  authDomain: "project-js-9e6d9.firebaseapp.com",
  projectId: "project-js-9e6d9",
  storageBucket: "project-js-9e6d9.appspot.com",
  messagingSenderId: "12456906342",
  appId: "1:12456906342:web:99533e85fc9948d2a727a7",
  measurementId: "G-K9TMHH2KLW"
};


const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

onAuthStateChanged(auth, (user) => {
  vlaidateUrl(user);
  const arr = window.location.pathname.split("/");

  
  console.log(window.location.pathname);
})



export function validOut(obj){
  const {email,password,name}=obj;
  console.log(email)
  console.log(password)
  console.log(name)
  
  }
 
 

export function registrPage(element) {
  element.innerHTML = `
  <h1>Registration</h1>
<div class='wrapper-form'>
          <form class="login" name="Reg" >
          <h1  class="name_1"name="title">Регистрация</h1>
          <h3 class="error" id="error" ></h3>
<div><p class="text">Есть аккаунт?</p><a href= "/auth" >Авторизоваться</a></div>
          <div>
            <input type="email" id="emailReg" class="email" placeholder='email' name="email"/>
          </div>
          <div>
           <input type="text" class="lastName" id="nameReg" placeholder='имя ' name="name"/>
          </div>
          <div>
            <input type="password" id="passwordReg" class="password"placeholder='password' name="password"/>
          </div>
            
          <div class='wr_btn' >
            <button id='btnSend' class="button_1" type="submit" >Зарегистрироваться</button>
          </div>
          
          
        </form>
        </div>
       
    `;
    document.getElementById('btnSend').onclick = () => {
    const formReg = document.forms.Reg;
    const err = document.querySelector(".error");
    const { email, password, lastName,  } = formReg;
  
  
      if (
        email.value === "" ||
        lastName.value === "" ||
        password.value === "" 
      )
       {
        err.innerHTML = "Заполните все поля";
        err.classList.remove("none");
        return;
      }
      if (password.value.length < 7) {
        err.innerHTML = "Пароль должен быть не менее 7 символов";
        err.classList.remove("none");
        return;
      }
  
      err.classList.add("none");
      createUserWithEmailAndPassword(auth, email, password)
        .then((UserActivate) => {
         console.log(UserActivate)
         
        })
        .catch((error) => {
          err.innerHTML = "Пользователь с таким email уже существует";
          err.classList.remove("none");
        });
   
      }
}


