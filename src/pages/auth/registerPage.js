import "./auth.scss";
export function registrPage(element) {
  element.innerHTML = `
    <div class='wrapper-form'>
          <form name="Reg">
          <h1  class="name_1"name="title">Регистрация</h1>
          <h3 class='err none' ></h3>
<h3 class="h2_2">Есть аккаунт?</h3><a href class="href_2""/auth">Авторизоваться</a>
          <div>
            <input type="email"class="email_2"placeholder='email' name="email"/>
          </div>
          <div>
           <input type="text"class="ima"placeholder='имя ' name="lastName"/>
          </div>
          <div>
           <input type="text"class="familia"placeholder='фамилия' name="firstName"/>
          </div>
          <div>
            <input type="password"class="password_1"placeholder='password' name="password"/>
          </div>
            
          <div class='wr_btn' >
            <button id='btnSend' class="button_2" type="submit">Зарегистрироваться</button>
          </div>
          
          
        </form>
        </div>
    `;
}
