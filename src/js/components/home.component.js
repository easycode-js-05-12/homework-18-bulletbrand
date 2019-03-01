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
        padding:0;
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
        .inner-desc li:first-child:before  {
          
          display: none;
         
        }

        .inner{
          font-size: 18px;
          font-family: robotolight,sans-serif;
          margin-bottom: 20px;
        }
        #main .inner {
          height: calc(100vh - 119px);
          min-height: 786px;
      }
      .inner-main {
        min-height: 550px;
        width:auto;
        background-position: center;
        background-repeat: no-repeat;
        background-size: cover;
        
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
