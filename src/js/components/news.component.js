import { NewsService } from './../services/news.service';
import { AuthService } from './../services/auth.service';
export class NewsComponent {

     /**
     * @description используемые нами свойства 
     */
    constructor() {
        this._newsService = new NewsService();
        this._authService = new AuthService();
        this._news;
    }

    /**
     * @description получаем токен с AuthService в токене передаются данные(записываем их в this._news)
     */
    async beforeRender() {
        this._news = await this._newsService.news(this._authService.token);
    }

    /**
     * @description (разница между 1974 и сейчас = 48) - разница между 1974 и дата выкладывания фото  = 47.364) = 1 ден в милисекундах / и переводим в дни
     */
    _dateDownload() {    
        this.dateDownload = ((new Date() - Date.parse(this._news.news[0].date))/ ( 1000 * 60 * 60 * 24));
        return  Math.floor(this.dateDownload); //в случае если не будет хватать часа до 2 дня это все равно 1 день  
    }
  
     /**
     * @description - разметка страници
     *  @return {string} разметка
     */
    render() {
        console.log(this._news)
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
        <li class="nav-item  ">
          <a class="nav-link " href="http://localhost:9000/#/signup">Check in</a>
        </li>
       
        <li class="nav-item mr-30 active">
        <a class="nav-link active" href="http://localhost:9000/#/news">News</a>
      </li>
      <li class="nav-item ">
      <a class="nav-link " href="http://localhost:9000/#/login">My page</a>
    </li>
      <li class="nav-item  ">
      <a class="nav-link " href="http://localhost:9000/#/s">Show error(test)</a>
    </li>
      </ul>
    </nav>
        <div class="wrapper">
        <div class="main-card clearfix">
            <div class="left_side">
                <div class="logo">
                    <a href="javascript:void(0);"><img src="${this._news.news[0].owner.avatar}" alt="avatar"></a>
                </div>
                <div class="info">
                    <h2>${this._news.news[0].owner.full_name}</h2>
                    <h3>${this._news.news[0].owner.country}</h3>
                    <p>downloaded<span>${this._news.news[0].pictures.length}</span> ${(this._news.news[0].pictures.length === 1) ? "photo" : "photos"}</p>
                    <span class="add"></span>
                    <p>a ${this._dateDownload()} ${(this._dateDownload() === 1) ? "day" : "days"} ago</p>
                </div>
                <button id="test" class="btn btn-bg-light align-self-center btn-border-gradient ng-star-inserted" >follow</button>
            </div>
    
            <div class="right-side ">
                <a href="javascript:void(0);"><img src="${this._news.news[0].pictures[0].url}" alt='img'></a>
            </div>
        </div>
    </div>

   
        `;
    }
 

     /**
     * @description - стили необходимые разметке
     *  @return {string}  разметка
     */
    _style() {
        return  `
            * {
                 box-sizing: border-box;
            }
            body, h1,h2,h3, p{
            margin: 0;
            padding: 0;
            font-size: 1rem;
            }
            .wrapper {
            
            background-color: #1f1f1e;
            padding-top: 25px;
            padding-bottom:25px;
            min-height: 100vh;
            }
            img {
            max-width: 100%;
            }
            body {
            min-height: 100vh;
            }
            h2 {
            margin-bottom:3px;
            }
            h3 {
            margin-bottom:5px;
            }
            .main-card {
            max-width: 1000px;
            padding: 25px;
            margin: 0 auto;
            border-radius:20px;
            margin-bottom: 15px;
            display:flex;
            justify-content:space-between;
            background: #fcf99a;
            }
            
            .logo {
            max-width:150px;
            height:auto;
            }
            
            .logo img {
            border-radius:76px;
            }
            .left_side {
            text-align: center;
            }
            
            .right-side {
            background:black;
            opacity:0.7;
            
            }
            .right-side:hover {
            opacity:1;
            }
            .right-side img {
            
            max-width: 750px;
            border-radius:5px;
            height:400px;
            }
            
            .info {
            text-align: center;
            margin-top:20px;
            }
            .info h4 {
            font-size:14px;
            }
            .info span {
            color:red;
            }
            .add {
            border-bottom: 2px solid green;
            display:block;
            margin:0 auto;
            width:30px;
            margin-bottom:5px;
            }
            .btn{
            color: #fff;
            background: linear-gradient(to right,#7303c0 0,#ec38bc 76%,#fa66cb 100%);
            margin-top:60px;
            width:130px;
            border:1px solid black;
            border-radius:9px;
            
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
       `
    }

    afterRender() {
        
    }
}

