import { LoginComponent } from './components/login.component';
import { HomeComponent } from './components/home.component';
import { NotFoundComponent } from './components/notfound.component';
import { UserComponent } from './components/user.component';
import { ActiveRoute } from './core/active.route.service';
import { SignUpComponent } from './components/signup.component';
import { NewsComponent } from './components/news.component';

//маршруты по которым идет навигация
const routes = {
    '/': new HomeComponent(),
    '/login': new LoginComponent(),
    '/users/:id': new UserComponent(),
    '**': new NotFoundComponent(),
    '/signup': new SignUpComponent(),
    '/news': new NewsComponent(), 
};

const activeRoute = new ActiveRoute();

const router = async () => {
    const container = document.querySelector('app-container');
    const request = activeRoute.parseRequestURL();
    const url = (request.resourse ? '/' + request.resourse : '/') + (request.id ? '/:id' : '');//проверяем если передан ресурс то вернть слеш и его и если переан айди то вернуть слеш айди

    const component = routes[url] || routes['**']; 
    
    await component.beforeRender();
    container.innerHTML = component.render();
    component.afterRender();
}

window.addEventListener('load', router);
window.addEventListener('hashchange', router);



