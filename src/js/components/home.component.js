import { HomeService } from './../services/home.service';


export class HomeComponent {
  /**
   * @desc properties tht we use
   */
  constructor() {
    this._homePage = new HomeService();
    this._homeRout;
  }

  async beforeRender() {
    this._homeRout = await this._homePage.homes();
  }

  /**
   * @desc create markup template for home page
   * @returns {string} tamplate
   */
  render() {
    console.log(this._homeRout)
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
        <li class="nav-item mr-3 active ">
          <a class="nav-link active" href="http://localhost:9000/">Home</a>
        </li>
        <li class="nav-item  ">
          <a class="nav-link" href="http://localhost:9000/#/login">Sign in</a>
        </li>
        <li class="nav-item  ">
          <a class="nav-link" href="http://localhost:9000/#/signup">Check in</a>
        </li>
       
        <li class="nav-item mr-30">
        <a class="nav-link " href="http://localhost:9000/#/news">News</a>
      </li>
      <li class="nav-item ">
      <a class="nav-link " href="http://localhost:9000/#/login">My page</a>
    </li>
      <li class="nav-item  ">
      <a class="nav-link" href="http://localhost:9000/#/s">Show error(test)</a>
    </li>
      </ul>
    </nav>
    <section class ="inner d-flex flex-column ng-star-inserted">
    <div class="inner-main d-flex align-items-center" style = "background-image: url(${this._homeRout.homeBackground});">
      <div class="container d-flex justify-content-center justify-content-sm-start">
        <div class="inner-content">
        <h1>Most liked Person</h1>
        <span class="d-block"> Be Most Wanted </span>
          <p> ${this._homeRout.innerText}</p>
          <p>Please join us and express your opinion by voting on the photos.</p>
          <button class="btn btn-bg-gradient btn-xl btn-fs-lg d-flex ng-star-inserted">
            <span>Join us</span>
            <span class="chevrons-wrap"> 
              >>
            </span>
          </button>
        </div>
      </div>
    </div>

   
    <div class="inner-desc">
      <div class="container d-flex flex-column align-items-center flex-shrink-0">
      <ul class="inner-desc-stats d-flex flex-column align-items-center flex-sm-row">
        <li class="d-flex align-items-center">${this._homeRout.cities} Cities</li>
        <li class="d-flex align-items-center">${this._homeRout.countries} Countries </li>
        <li class="d-flex align-items-center">In ${this._homeRout.regions} Regions In The World</li>
      </ul>
       <span class="inner-desc-title text-center">You can be one of the winners and we will introduce you to the world </div>
      </div>


    </div>
</section>
   
      `;
  }


  style() {
    return `
    ul {
      padding: 0;
    }
    
    .inner-desc {
      padding: 35px 0;
      color: #fff;
      background-color: #212121;
    }
    
    .inner-desc li::before {
      content: "";
      display: inline-flex;
      margin: 0 20px;
      width: 8px;
      height: 8px;
      border-radius: 50%;
      background-color: #fff;
    }
    
    .inner-desc li:first-child:before {
    
      display: none;
    
    }
    
    .inner {
      font-size: 18px;
      font-family: robotolight, sans-serif;
      margin-bottom: 20px;
    }
    
    #main .inner {
      height: calc(100vh - 119px);
      min-height: 786px;
    }
    
    .inner-main {
      min-height: 550px;
      width: auto;
      background-position: center;
      background-repeat: no-repeat;
      background-size: cover;
    
    }
    
    .nav-item {
      padding: 10px 15px 10px;
    }
    
    .nav-item:hover {
      border-bottom: 1px solid white
    }
    
    .active {
      border: 1px solid white
    }
    
    .inner-content {
      width: 100%;
      max-width: 498px;
      padding: 42px;
      color: #fff;
      background-color: rgba(0, 0, 0, .65);
    }
    
    .inner-content h1 {
      font-size: 65px;
      font-family: robotomedium, sans-serif;
      margin-bottom: 22px;
    }
    
    .inner-content>span {
      font-size: 60px;
      font-family: mr_de_havilandregular;
      font-weight: 700;
      word-spacing: .2em;
      margin-bottom: 35px;
      color: #e12ebc;
    }
    
    .btn>:first-child::after {
      content: '';
      position: absolute;
      top: 0;
      left: -140%;
      width: 40%;
      height: 100%;
      background: linear-gradient(to right, rgba(255, 255, 255, 0) 0, rgba(255, 255, 255, .2) 50%, rgba(255, 255, 255, 0) 100%);
      -webkit-transform: skewX(-36deg);
      transform: skewX(-36deg);
    }
    
    .btn.btn-bg-gradient {
      color: #fff;
      background: linear-gradient(to right, #7303c0 0, #ec38bc 76%, #fa66cb 100%);
    }
    
    .btn.btn {
      padding: 20px 40px;
      font-size: 18px;
    }
    
    .btn {
      position: relative;
      display: inline-block;
      padding: 15px 35px;
      font-size: 16px;
      font-family: robotobold, sans-serif;
      text-align: center;
      text-transform: uppercase;
      border-radius: 500px;
      z-index: 0;
      overflow: hidden;
    }
    
    .btn .chevrons-wrap {
      margin-left: 5px;
      padding-top: 1px;
      font-size: 16px;
      word-spacing: -6px;
    }
      `;
  }
  afterRender() {

  }
}
