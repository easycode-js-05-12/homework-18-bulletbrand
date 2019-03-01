import { AuthService } from './../services/auth.service';
import { ActiveRoute } from './../core/active.route.service';
import { UserService } from './../services/user.service';

export class UserComponent {
      /**
     * @desc Property that we use
     */
    constructor() {
        this._activeRoute = new ActiveRoute();
        this._authService = new AuthService();
        this._userService = new UserService();

        this._authUserId = this._authService.userId;
        this._activeUserId = this._activeRoute.parseRequestURL().id;
        this._user;
    }

     /**
     * @desc получаем айди с UserService() так как навигация осуществояется по айд после регистрации на текущего пользователя
     */
    async beforeRender() {
        this._user = await this._userService.getUser(this._activeUserId);
    }

    /**
     * @desc Return template for page
     * @returns {string} - template
     */
    render() {
        return `
        <!-- Component styles -->
        <style>
            ${this.style()}
        </style>
        <nav class="navbar navbar-expand-sm pb-3 pt-3 bg-dark navbar-dark d-flex justify-content-center ">
            <!-- Brand/logo -->
            <div class="logo">
                <a class="navbar-brand" href="#">
                    <i class="fa fa-cog fa-spin" style="font-size:30px"></i>
                    <img style="width:70px;" class="rounded-circle" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRUE6a1DNqd552cba3srMCfPaeCve9F-JKVPL9qpsrypJ_tKacmEA"
                        alt='img'>
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
                <li class="nav-item  ">
                    <a class="nav-link " href="http://localhost:9000/#/signup">Check in</a>
                </li>
        
                <li class="nav-item mr-30 ">
                    <a class="nav-link" href="http://localhost:9000/#/news">News</a>
                </li>
                <li class="nav-item mr-30 active">
                    <a class="nav-link active" href="http://localhost:9000/#/login">MyPage</a>
                </li>
                <li class="nav-item  ">
                    <a class="nav-link " href="http://localhost:9000/#/s">Show error(test)</a>
                </li>
            </ul>
        </nav>
        
        <div class="user-cover-container" style="background: url(${this._user.cover}) no-repeat center / cover;">
        </div>
        <div class="user-avatar-container d-flex justify-content-center">
            <div class="user-avatar">
                <img src="${this._user.avatar}">
            </div>
        </div>
        `;
    }
      /**
     * @desc Return style for template
     * @returns {string} - style
     */
    style() {
        return `
            img {
                max-width: 100%;
            }
            .user-cover-container {
                height: 400px;
                width: 100%;
            }
            .user-avatar-container {
                transform: translateY(-50%);
            }
            .user-avatar {
                width: 138px;
                height: 138px;
                border-radius: 50%;
                overflow: hidden;
            }
            .nav-item {
                padding: 10px 15px 10px;
                }
                .nav-item:hover {
                border-bottom:1px solid white
                }
                .active {
                    border:1px solid white
                  }
        `;
    }
    afterRender() {

    }
}