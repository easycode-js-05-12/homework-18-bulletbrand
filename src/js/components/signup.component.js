import { AuthService } from './../services/auth.service';

export class SignUpComponent {

    constructor() {
        this._signupComponent = new AuthService();
    }
    async beforeRender() {
      
    }
    /**
     * @desc create markup template for signup 
     * @returns {string} template
     */
   render() {
        return `
        <style>
        ${this._style()}
    </style>
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
          <a class="nav-link" href="http://localhost:9000/">Home</a>
        </li>
        <li class="nav-item  ">
          <a class="nav-link " href="http://localhost:9000/#/login">Sign in</a>
        </li>
        <li class="nav-item active ">
          <a class="nav-link active" href="http://localhost:9000/#/signup">Check in</a>
        </li>
       
        <li class="nav-item mr-30 ">
        <a class="nav-link " href="http://localhost:9000/#/news">News</a>
      </li>
      <li class="nav-item ">
      <a class="nav-link " href="http://localhost:9000/#/login">My page</a>
    </li>
      <li class="nav-item  ">
      <a class="nav-link " href="http://localhost:9000/#/s">Show error(test)</a>
    </li>
      </ul>
    </nav>
      <div class="d-flex justify-content-center w-100% mt-5">
         <div class="auth-wrap">
         <div class="auth-form col col-6 mx-auto my-auto">
             <h3>Sign Up to Social.</h3>
             <p class="text-secondary">It's awesome here... Enter.</p>
             <form name="signUpForm" novalidate>
                 <div class="form-group">
                     <div class="row">
                         <div class="col col-6">
                             <input type="text" class="form-control form-control-sm" id="first_name" placeholder="First Name">
                         </div>
                         <div class="col col-6">
                             <input type="text" class="form-control form-control-sm" id="last_name" placeholder="Last Name">
                         </div>
                     </div>
 
                     <input type="text" class="form-control form-control-sm mt-3" id="nick_name" placeholder="Nick Name">
 
                     <div class="row mt-3">
                         <div class="col col-4">
                             <input type="text" class="form-control form-control-sm" id="day_of_birth" placeholder="Day">
                         </div>
                         <div class="col col-4">
                             <input type="text" class="form-control form-control-sm" id="month_of_birth" placeholder="Month">
                         </div>
                         <div class="col col-4">
                             <input type="text" class="form-control form-control-sm" id="year_of_birth" placeholder="Year">
                         </div>
                     </div>
 
                     <div class="row mt-3">
                         <div class="col col-6">
                             <input type="text" class="form-control form-control-sm" id="country" placeholder="Country">
                         </div>
                         <div class="col col-6">
                             <input type="text" class="form-control form-control-sm" id="city" placeholder="City">
                         </div>
                     </div>
 
                     <select name="gender" id="gender" class="form-control form-control-sm mt-3">
                         <option value="male">Male</option>
                         <option value="male">Female</option>
                     </select>
 
                     <input type="email" class="form-control form-control-sm mt-3" id="email" placeholder="bulletbrand33@example.com" required data-pattern="^\S+@[a-z]+\.[a-z]+$">
                     <input type="text" class="form-control form-control-sm mt-3" id="phone" placeholder="Phone number">
                     <input type="password" class="form-control form-control-sm mt-3" id="password" placeholder="password" required data-pattern="\S+">
                     <div class="d-flex mt-5">
                         <button type="submit" class="btn btn-primary btn-sm">Sign Up</button>
                         <a href="http://localhost:9000/#/login" class="btn btn-link btn-sm ml-auto">Already have an account? Sign in</a>
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
         `
    }
    _style() {
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
    /**
     * @desc enents that happen after tamplate being download
     */
    async afterRender() {
        document.forms['signUpForm'].addEventListener('submit', (e) => {
            e.preventDefault();

            const email = e.target.elements['email'].value;
            const password = e.target.elements["password"].value;
            const nickname = e.target.elements["nick_name"].value;
            const first_name = e.target.elements["first_name"].value;
            const last_name = e.target.elements["last_name"].value;
            const phone = e.target.elements['phone'].value;
            const gender_orientation = e.target.elements['gender'].value;
            const city = e.target.elements["city"].value;
            const country = e.target.elements["country"].value;
            const date_of_birth_day = e.target.elements['day_of_birth'].value;
            const date_of_birth_month = e.target.elements['month_of_birth'].value;
            const date_of_birth_year = e.target.elements['year_of_birth'].value;

            const userInfo = {
                email,
                password,
                nickname,
                first_name,
                last_name,
                phone,
                gender_orientation,
                city,
                country,
                date_of_birth_day,
                date_of_birth_month,
                date_of_birth_year
            }

            // if (!password) return console.log("заполните все поля!");

            this._signupComponent.signUp(userInfo) //это запрос из auth.service на полуение инфы о юзере
                .then((response) => {
                    console.log(response);
                })
                .catch((err) => {
                    console.log(err);
                });
        });
    }
}