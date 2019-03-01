export class NotFoundComponent {
    async beforeRender() {
        
    }
    /**
     * @desc create markup template for 404 error
     * @returns {string} template
     */
    render() {
        return `
        <style>
            ${this.style()}
        </style>

        <div class="container-fluid d-flex align-items-center justify-content-center">
        <div class="page-wrap d-flex flex-row align-items-center ">
        <div class="container">
            <div class="row justify-content-center">
                <div class="col-md-12 text-center">
                    <span class="display-1 d-block text-warning">Ooops...</span>
                    <span class="display-1 d-block text-danger">404 Error</span>
                    <div class="mb-4 lead text-danger">The page you are looking for was not found.</div>
                    <button type="button" class="btn btn-warning">  <a href="http://localhost:9000/" class="btn btn-link text-danger">Back to Home</a></button>
                  
                </div>
            </div>
        </div>
    </div>
    </div>
        `;
    }
      afterRender() {
    }

    style() {
        return `
            .container-fluid {
                background: url('https://www.desktop-background.com/download/1920x1080/2012/04/12/373315_darth-vader-funny-illustration-1920x1200-jpg_1920x1200_h.jpg') no-repeat center / cover;
                height: 100vh;
            }
        .btn{
                font-size: 24px;
            }
           
        `;
    }
}
