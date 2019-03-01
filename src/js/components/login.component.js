import { AuthService } from './../services/auth.service';
import { Routing } from './../core/routing.service';

export class LoginComponent {
    constructor() {
           this._authService = new AuthService();
           this._routing = new Routing();
    }
    /**
     * @desc navigate users his page if already sign in
     */
    async beforeRender() {                                  
        if (this._authService.token) { //ели токен получили который выдается при регистрации то  перенаправляем со страници логин на пользователя с этим айди
            this._routing.navigate(`/users/${this._authService.userId}`);//тоесть в случае если уже зареган перенаправляет на юзера тоест ьна меня но так как меня нет
        } 
    }
    /**
     * @desc create markup template for login
     * @returns {string} template
     */
    render() {
        return `
        <style>${this.style()}</style>
  
        <nav class="navbar navbar-expand-sm pb-3 pt-3 bg-dark navbar-dark d-flex justify-content-center ">
        <!-- Brand/logo -->
         <div class="logo">
        <a class="navbar-brand" href="#">
          <i class="fa fa-cog fa-spin" style="font-size:30px"></i>
          <img  style="width:70px;" class = "rounded-circle" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRUE6a1DNqd552cba3srMCfPaeCve9F-JKVPL9qpsrypJ_tKacmEA" alt='img'>
        </a>
        </div>
      
        <!-- Links -->
        <ul class="navbar-nav ">
          <li class="nav-item mr-3  ">
            <a class="nav-link active" href="http://localhost:9000/">Home</a>
          </li>
          <li class="nav-item  active ">
            <a class="nav-link" href="http://localhost:9000/#/login">Sign in</a>
          </li>
          <li class="nav-item  ">
            <a class="nav-link" href="http://localhost:9000/#/signup">Check in</a>
          </li>
          <li class="nav-item mr-30 ">
          <a class="nav-link " href="http://localhost:9000/#/login">MyPage</a>
         </li>
          <li class="nav-item  ">
          <a class="nav-link" href="http://localhost:9000/#/s">Show error(test)</a>
        </li>
        </ul>
      </nav>

        <div class="d-flex justify-content-center w-100% mt-5">
        <div class="auth-wrap    ">
            <div class="auth-form col col-6 mx-auto my-auto ">
                <h3>Login to Social.</h3>
                <p class="text-secondary">Enter your e-mail address & password to login to your Social account.</p>
                <form name="loginForm" novalidate>
                    <div class="form-group ">
                        <input type="email" class="form-control form-control-sm" id="email" placeholder="name@example.com" required data-pattern="^\S+@[a-z]+\.[a-z]+$">
                        <input type="password" class="form-control form-control-sm mt-3" id="password" placeholder="password" required data-pattern="\S+">
                        <div class="d-flex mt-5">
                            <button type="submit" class="btn btn-primary btn-sm">Login</button>
                        </div>
                    </div>
                </form>
            </div>
            <!-- /.auth-form -->
            <div class="auth-bg col col-6">
            </div>
            <!-- /.auth-bg -->
        </div>
        <!-- /.auth-wrap -->
        </div>
        `;
    }
    style() {
        return `
        .nav-item {
        padding: 10px 15px 10px;
        }
        .nav-item:hover {
        border-bottom:1px solid white
        }
        .active {
            border:1px solid white
          }
    `
}
     afterRender() {
        document.forms['loginForm'].addEventListener('submit', (e) => {
            e.preventDefault();

            const email = e.target.elements['email'].value;
            const password = e.target.elements['password'].value;

            if (!email || !password) return;
            
            this._authService.login(email, password)
                .then((response) => {
                    this._routing.navigate(`/users/${response.id}`, {myData: 'My data'});
                })
                .catch((err) => {
                    console.log(err);
                });                
        });
    }
}
