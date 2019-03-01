import { Http } from './../core/http.service';
import { ENV } from './../config/env';

export class NewsService {

    /**
     * @desc promise get news
     * @param {string}- token
     */
    news(token) { //Метод   news получает в качестве параметра токен ресурса сервера и возвращает объект Promise.
        const http = new Http(); 

        return new Promise((resolve, reject) => { 
            http.get(`${ENV.apiUrl}/public/news`, {
                    headers: {
                        "x-access-token": token
                    }
                }) 
                .then((response) => resolve(response))  
                .catch((err) => reject(err));
        });
    }
}