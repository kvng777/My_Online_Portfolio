console.log("JS at work!");
const carouselView = document.getElementById("portfolio");
const smContent = `
<div class="container">
<h5 class="pt-2">Portfolio</h5>
<div id="carouselTabs" class="carousel slide" data-bs-ride="carousel">
    <ol class="carousel-indicators text-black">
    <li data-bs-target="#carouselTabs" data-bs-slide-to="0" class="active"></li>
    <li data-bs-target="#carouselTabs" data-bs-slide-to="1"></li>
    <li data-bs-target="#carouselTabs" data-bs-slide-to="2"></li>
    <li data-bs-target="#carouselTabs" data-bs-slide-to="3"></li>
    <li data-bs-target="#carouselTabs" data-bs-slide-to="4"></li>
    <li data-bs-target="#carouselTabs" data-bs-slide-to="5"></li>
    </ol>
    <div class="carousel-inner">
        <div class="carousel-item active">
            <div class="card mx-auto" style="width: 18rem;">
                <img src="images/proj3.png" class="card-img-top" alt="...">
                <div class="card-body">
                <h6 class="card-title">Registration Form</h6>
                    <span class="badge rounded-pill bg-primary">HTML</span>
                    <span class="badge rounded-pill bg-secondary">CSS</span>
                    <a class="btn bg-info fs-6 my-3 d-block" href="https://kvng777.github.io/3_Online_Registration_Form/" target="_blank">Visit Site</a>
                </div>
            </div>
        </div>

        <div class="carousel-item">
            <div class="card mx-auto" style="width: 18rem;">
                <img src="images/proj4.png" class="card-img-top" alt="...">
                <div class="card-body">
                    <h6 class="card-title">Style Guide</h6>
                    <span class="badge rounded-pill bg-primary">HTML</span>
                    <span class="badge rounded-pill bg-success">JS</span>
                    <span class="badge rounded-pill bg-warning">SASS</span>
                    <a class="btn bg-info fs-6 my-3 d-block" href="https://kvng777.github.io/4_style_guide/" target="_blank">Visit Site</a>
                </div>
            </div>
        </div>

        <div class="carousel-item">
            <div class="card mx-auto" style="width: 18rem;">
                <img src="images/proj5.png" class="card-img-top" alt="...">
                <div class="card-body">
                    <h6 class="card-title">Interactive Photo Gallery</h6>
                    <span class="badge rounded-pill bg-primary">HTML</span>
                    <span class="badge rounded-pill bg-success">JS</span>
                    <span class="badge rounded-pill bg-warning">SASS</span>
                    <a class="btn bg-info fs-6 my-3 d-block" href="https://kvng777.github.io/5_photo_gallery/" target="_blank">Visit Site</a>
                </div>
            </div>
        </div>

        <div class="carousel-item">
            <div class="card mx-auto" style="width: 18rem;">
                <img src="images/proj6.png" class="card-img-top" alt="...">
                <div class="card-body">
                <h6 class="card-title">Game Show App</h6>
                    <span class="badge rounded-pill bg-primary">HTML</span>
                    <span class="badge rounded-pill bg-success">JS</span>
                    <span class="badge rounded-pill bg-warning">SASS</span>
                    <a class="btn bg-info fs-6 my-3 d-block" href="https://kvng777.github.io/6-game_show_app_v1.2/" target="_blank">Visit Site</a>
                </div>
            </div>
        </div>

        <div class="carousel-item">
            <div class="card mx-auto" style="width: 18rem;">
                <img src="images/proj7.png" class="card-img-top" alt="...">
                <div class="card-body">
                <h6 class="card-title">Web App Dashboard</h6>
                    <span class="badge rounded-pill bg-primary">HTML</span>
                    <span class="badge rounded-pill bg-success">JS</span>
                    <span class="badge rounded-pill bg-warning">SASS</span>
                    <a class="btn bg-info fs-6 my-3 d-block" href="https://kvng777.github.io/7-web_app_dashboard_v3.1/" target="_blank">Visit Site</a>
                </div>
            </div>
        </div>

        <div class="carousel-item">
            <div class="card mx-auto" style="width: 18rem;">
                <img src="images/proj8.png" class="card-img-top" alt="...">
                <div class="card-body">
                <h6 class="card-title">Employee Directory</h6>
                    <span class="badge rounded-pill bg-primary">HTML</span>
                    <span class="badge rounded-pill bg-success">JS</span>
                    <span class="badge rounded-pill bg-warning">SASS</span>
                    <a class="btn bg-info fs-6 my-3 d-block" href="https://kvng777.github.io/8_employee_directory_v1/" target="_blank">Visit Site</a>
                </div>
            </div>
        </div>
    </div>
    
        <a class="carousel-control-prev" href="#carouselTabs" role="button" data-bs-slide="prev">
            <span class="carousel-control-prev-icon text-black" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
        </a>
        <a class="carousel-control-next" href="#carouselTabs" role="button" data-bs-slide="next">
            <span class="carousel-control-next-icon text-black" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
        </a>
  </div>
</div>
`;
const mdContent= `
<div class="container">
<h5 class="pt-2">Portfolio</h5>
<div class="row">

<div class="col-md-6 col-lg-4">
    <div class="card">
        <img id="test" src="images/proj3.png" alt="Link to project 1">
            <div class="image-overlay">
                <h5>Tech Stack</h5>
                <ul class="list-unstyled d-flex flex-row mt-1">
                    <li class="mx-2">
                    <img class="" src="images/html.png" alt="">
                    </li>

                    <li class="mx-2">
                    <img class="" src="images/css.png" alt="">
                    </li>

                </ul>
                <a class="btn bg-info fs-6 my-3 d-block" href="https://kvng777.github.io/3_Online_Registration_Form/" target="_blank">Visit Site</a>
            </div>
        <div class="card-body">
            <h5 class="card-title">Registration Form</h5>
            <p class="card-text"></p>
        </div>
    </div>
</div>

<div class="col-md-6 col-lg-4">
    <div class="card">
        <img src="images/proj4.png" alt="Link to project 2">
        <div class="image-overlay">
            <h5>Tech Stack</h5>
            <ul class="list-unstyled d-flex flex-row mt-1">
                <li class="mx-2">
                <img class="" src="images/html.png" alt="">
                </li>

                <li class="mx-2">
                <img class="" src="images/sass.png" alt="">
                </li>
            </ul>
            <a class="btn bg-info fs-6 my-3 d-block" href="https://kvng777.github.io/4_style_guide/" target="_blank">Visit Site</a>
        </div>
        <div class="card-body">
            <h5 class="card-title">Style Guide</h5>
            <p class="card-text"></p>
        </div>
    </div>
</div>

<div class="col-md-6 col-lg-4">
    <div class="card">
        <img src="images/proj5.png" alt="Link to project 3">
        <div class="image-overlay">
            <h5>Tech Stack</h5>
            <ul class="list-unstyled d-flex flex-row mt-1">
                <li class="mx-2">
                <img class="" src="images/html.png" alt="">
                </li>

                <li class="mx-2">
                <img class="" src="images/sass.png" alt="">
                </li>

            </ul>
            <a class="btn bg-info fs-6 my-3 d-block" href="https://kvng777.github.io/5_photo_gallery/" target="_blank">Visit Site</a>
        </div>
        <div class="card-body">
            <h5 class="card-title">Interactive Photo Gallery</h5>
            <p class="card-text"></p>
        </div>
    </div>
</div>

<div class="col-md-6 col-lg-4">
    <div class="card">
        <img src="images/proj6.png" alt="Link to project 4">
        <div class="image-overlay">
            <h5>Tech Stack</h5>
            <ul class="list-unstyled d-flex flex-row mt-1">
                <li class="mx-2">
                <img class="" src="images/html.png" alt="">
                </li>

                <li class="mx-2">
                <img class="" src="images/sass.png" alt="">
                </li>

                <li class="mx-2">
                <img class="" src="images/js.png" alt="">
                </li>
            </ul>
            <a class="btn bg-info fs-6 my-3 d-block" href="https://kvng777.github.io/6-game_show_app_v1.2/" target="_blank">Visit Site</a>
        </div>

        <div class="card-body">
            <h5 class="card-title">Game Show App</h5>
            <p class="card-text"></p>
        </div>
    </div>
</div>

<div class="col-md-6 col-lg-4">
    <div class="card">
        <img src="images/proj7.png" alt="Link to project 5">
        <div class="image-overlay">
            <h5>Tech Stack</h5>
            <ul class="list-unstyled d-flex flex-row mt-1">
                <li class="mx-2">
                <img class="" src="images/html.png" alt="">
                </li>

                <li class="mx-2">
                <img class="" src="images/sass.png" alt="">
                </li>

                <li class="mx-2">
                <img class="" src="images/js.png" alt="">
                </li>

            </ul>
            <a class="btn bg-info fs-6 my-3 d-block" href="https://kvng777.github.io/7-web_app_dashboard_v3.1/" target="_blank">Visit Site</a>
        </div>
        <div class="card-body">
            <h5 class="card-title">Web App Dashboard</h5>
            <p class="card-text"></p>
        </div>
    </div>
</div>

<div class="col-md-6 col-lg-4">
    <div class="card">
        <img src="images/proj8.png" alt="Link to project 6">
        <div class="image-overlay">
            <h5>Tech Stack</h5>
            <ul class="list-unstyled d-flex flex-row mt-1">
                <li class="mx-2">
                <img class="" src="images/html.png" alt="">
                </li>

                <li class="mx-2">
                <img class="" src="images/sass.png" alt="">
                </li>

                <li class="mx-2">
                <img class="" src="images/js.png" alt="">
                </li>
            </ul>
            <a class="btn bg-info fs-6 my-3 d-block" href="https://kvng777.github.io/8_employee_directory_v1/" target="_blank">Visit Site</a>
        </div>
        <div class="card-body">
            <h5 class="card-title">Employee Directory</h5>
            <p class="card-text"></p>
        </div>
    </div>
</div>
</div> 
</div>
`;

//Dispalying wechat qr code
$(document).ready(function(){
  $('[data-toggle="popover"]').popover({
      placement : 'top',
      trigger : 'active',
      html : true,
      content : `
      <div class="text-center">
      <h6>Add me on WeChat<h6>
      <img src="images/wechatid.jpg" class="img-fluid" alt="Kevin's WeChat QR Code">
      </div>
      `
  });
});

window.addEventListener("load", function() {
  if (window.innerWidth >= 320 && window.innerWidth <= 425 ) {
      carouselView.innerHTML = smContent;
  } else if (window.innerWidth > 425) {
    carouselView.innerHTML = mdContent;
  }
});

window.addEventListener("resize", function() {
  if (window.innerWidth >= 320 && window.innerWidth <= 425 ) {
      carouselView.innerHTML = smContent;
  } else if (window.innerWidth > 425) {
    carouselView.innerHTML = mdContent;
  }
});


// window.addEventListener("resize", function() {
//    if(window.innerWidth >= 320 && wdinwo.innerWidth <= 425) {
//       carouselView.innerHTML = smContent;
//    } else if (window.innerWidth > 425) {
//      carouselView.innerHTML = mdContent;
//    }
// });