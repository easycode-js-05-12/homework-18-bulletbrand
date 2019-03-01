import { Http } from './../core/http.service';
import { ENV } from './../config/env';

export class AuthService {
    /**
     * @desc Return id users
     * @param {string} - user password
     */
    get token() {
        return localStorage.getItem('sn_user_token'); //забирае токен  который форируется в локал сторейд после ввода всех данніх
    }
    /**
     * @desc Return token
     * @param {string} - user password
     */
    get userId() {
        return localStorage.getItem('sn_user_id'); //забираем айди которое форируется в локал сторейд после ввода всех данніх
    }
    /**
     * @desc Return promise object after login
     * @param {string}- user mail 
     * @param {string} - user password
     */
    login(email, password) {
        const http = new Http();
        return new Promise((resolve, reject) => {
            http.post(`${ENV.apiUrl}/public/auth/login`, {
                    email,
                    password
                }) //фция в промисе принимает юрл на который идем смотреть и параметры мейл и логин добавленные через деструктуризацию
                .then((response) => { //https://rem-rest-api.herokuapp.com/ Делаем сюда запрос на страницу логин примеры есть на сайте что ссылку добавил а емейл и пароль просто параметрами передаем
                    if (!response.auth) return reject(response); //если auth нет ответа Это сама папка в ншей дериктори то реджекс
                    localStorage.setItem('sn_user_id', response.id); //в противном случае в локал сторейдж добавляем айди с ответа и ниже токен а 'sn_user_id' то просто сами так написали опционально название
                    localStorage.setItem('sn_user_token', response.token);
                    resolve(response);
                })
                .catch((err) => reject(err)); //отлавливаем ошибочку тут по стандарту
        });
    }

    /**
     * @desc Return promise object after singup
     * @param {object}- info about users
     */
    signUp(userInfo) {
        const http = new Http();

        return new Promise((resolve, reject) => {
            http.post(`${ENV.apiUrl}/public/auth/signup`, userInfo)
                .then((response) => {
                    if (!response.auth) return reject(response);
                    localStorage.setItem('sn_user_id', response.id);
                    localStorage.setItem('sn_user_token', response.token);
                    resolve(response);
                })
                .catch((err) => reject(err));
        });
    }
    

}