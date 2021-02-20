const carouselView = document.getElementById("portfolio");
const wechat =  `
<div class="text-center">
<h6>Add me on WeChat<h6>
<img src="images/wechatid.jpg" class="img-fluid" alt="Kevin's WeChat QR Code">
</div>
`;

// const smContent = `
// <div id="portfolio" class="myportfolio myportfolio-sm">
//               <div class="container">
//                 <h1 class="mt-4 mb-3 text-center">Portfolio</h1>
//                 <div id="carouselTabs" class="carousel carousel-dark slide" data-bs-ride="carousel">
//                     <ol class="carousel-indicators">
//                       <li data-bs-target="#carouselTabs" data-bs-slide-to="0" class="active"></li>
//                       <li data-bs-target="#carouselTabs" data-bs-slide-to="1"></li>
//                       <li data-bs-target="#carouselTabs" data-bs-slide-to="2"></li>
//                       <li data-bs-target="#carouselTabs" data-bs-slide-to="3"></li>
//                       <li data-bs-target="#carouselTabs" data-bs-slide-to="4"></li>
//                       <li data-bs-target="#carouselTabs" data-bs-slide-to="5"></li>
//                     </ol>
//                     <div class="carousel-inner">
//                         <div class="carousel-item active">
//                             <div class="card mx-auto" style="width: 18rem;">
//                                 <img src="images/proj3.png" class="card-img-top" alt="...">
//                                 <div class="card-body">
//                                 <h6 class="card-title">Registration Form</h6>
//                                     <span class="badge rounded-pill bg-primary">HTML</span>
//                                     <span class="badge rounded-pill bg-secondary">CSS</span>
//                                     <a class="btn bg-info fs-6 my-3 d-block" href="https://kvng777.github.io/3_Online_Registration_Form/" target="_blank">Visit Site</a>
//                                 </div>
//                             </div>
//                         </div>
                
//                         <div class="carousel-item">
//                             <div class="card mx-auto" style="width: 18rem;">
//                                 <img src="images/proj4.png" class="card-img-top" alt="...">
//                                 <div class="card-body">
//                                     <h6 class="card-title">Style Guide</h6>
//                                     <span class="badge rounded-pill bg-primary">HTML</span>
//                                     <span class="badge rounded-pill bg-warning">SASS</span>
//                                     <a class="btn bg-info fs-6 my-3 d-block" href="https://kvng777.github.io/4_style_guide/" target="_blank">Visit Site</a>
//                                 </div>
//                             </div>
//                         </div>
                
//                         <div class="carousel-item">
//                             <div class="card mx-auto" style="width: 18rem;">
//                                 <img src="images/proj5.png" class="card-img-top" alt="...">
//                                 <div class="card-body">
//                                     <h6 class="card-title">Interactive Photo Gallery</h6>
//                                     <span class="badge rounded-pill bg-primary">HTML</span>
//                                     <span class="badge rounded-pill bg-success">JS</span>
//                                     <span class="badge rounded-pill bg-warning">SASS</span>
//                                     <a class="btn bg-info fs-6 my-3 d-block" href="https://kvng777.github.io/5_photo_gallery/" target="_blank">Visit Site</a>
//                                 </div>
//                             </div>
//                         </div>
                
//                         <div class="carousel-item">
//                             <div class="card mx-auto" style="width: 18rem;">
//                                 <img src="images/proj6.png" class="card-img-top" alt="...">
//                                 <div class="card-body">
//                                 <h6 class="card-title">Game Show App</h6>
//                                     <span class="badge rounded-pill bg-primary">HTML</span>
//                                     <span class="badge rounded-pill bg-success">JS</span>
//                                     <span class="badge rounded-pill bg-warning">SASS</span>
//                                     <a class="btn bg-info fs-6 my-3 d-block" href="https://kvng777.github.io/6-game_show_app_v1.2/" target="_blank">Visit Site</a>
//                                 </div>
//                             </div>
//                         </div>
                
//                         <div class="carousel-item">
//                             <div class="card mx-auto" style="width: 18rem;">
//                                 <img src="images/proj7.png" class="card-img-top" alt="...">
//                                 <div class="card-body">
//                                 <h6 class="card-title">Web App Dashboard</h6>
//                                     <span class="badge rounded-pill bg-primary">HTML</span>
//                                     <span class="badge rounded-pill bg-success">JS</span>
//                                     <span class="badge rounded-pill bg-warning">SASS</span>
//                                     <a class="btn bg-info fs-6 my-3 d-block" href="https://kvng777.github.io/7-web_app_dashboard_v3.1/" target="_blank">Visit Site</a>
//                                 </div>
//                             </div>
//                         </div>
                
//                         <div class="carousel-item">
//                             <div class="card mx-auto" style="width: 18rem;">
//                                 <img src="images/proj8.png" class="card-img-top" alt="...">
//                                 <div class="card-body">
//                                 <h6 class="card-title">Employee Directory</h6>
//                                     <span class="badge rounded-pill bg-primary">HTML</span>
//                                     <span class="badge rounded-pill bg-success">JS</span>
//                                     <span class="badge rounded-pill bg-warning">SASS</span>
//                                     <a class="btn bg-info fs-6 my-3 d-block" href="https://kvng777.github.io/8_employee_directory_v1/" target="_blank">Visit Site</a>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
                    
//                         <a class="carousel-control-prev" href="#carouselTabs" role="button" data-bs-slide="prev">
//                           <span class="carousel-control-prev-icon" aria-hidden="true"></span>
//                           <span class="visually-hidden">Previous</span>
//                         </a>
//                         <a class="carousel-control-next" href="#carouselTabs" role="button" data-bs-slide="next">
//                           <span class="carousel-control-next-icon" aria-hidden="true"></span>
//                           <span class="visually-hidden">Next</span>
//                         </a>
//                   </div>
//                 </div>
// `;

// const mdContent= `
// <div class="container">
// <h1 class="mb-3 mt-5 text-center">Portfolio</h1>
// <div class="row">

// <div class="col-sm-12 col-md-6 col-lg-4">
//     <div class="card project mx-auto">
//         <img src="/images/proj3.png" alt="Link to project 1">
//             <div class="image-overlay">
//                 <div class="desc container">
//                     <p class="fw-light">A mobile <strong>responsive</strong> form by using the <strong>flex box</strong> layout which allows user to insert information with all sorts of <strong>input</strong> type.</p>

//                     <h6>Tech Stack</h6>
//                         <ul class="list-unstyled d-flex mt-1 justify-content-center">
//                             <li class="mx-2">
//                             <img class="" src="images/html.png" alt="">
//                             </li>

//                             <li class="mx-2">
//                             <img class="" src="images/css.png" alt="">
//                             </li>
//                         </ul>
//                         <a class="btn bg-info fs-6 mx-auto w-75" href="https://kvng777.github.io/3_Online_Registration_Form/" target="_blank">Visit Site</a>
//                 </div>
//             </div>
//         <div class="card-body">
//             <h6 class="card-title my-auto">Registration Form</h6>
//             <p class="card-text"></p>
//         </div>
//     </div>
// </div>

// <div class="col-sm-12 col-md-6 col-lg-4">
//     <div class="card project mx-auto">
//         <img src="images/proj4.png" alt="Link to project 2">
//         <div class="image-overlay">
//             <div class="desc container">
//                 <p class="fw-light">A mobile <strong>responsive</strong> web-app style using partials in keeping codes organized. Used <strong>Sass syntaxt</strong> keeping stylesheet neat and easy to read.</p>

//                 <h6>Tech Stack</h6>
//                     <ul class="list-unstyled d-flex mt-1 justify-content-center">
//                         <li class="mx-2">
//                         <img class="" src="images/html.png" alt="">
//                         </li>

//                         <li class="mx-2">
//                         <img class="" src="images/sass.png" alt="">
//                         </li>
//                     </ul>
//                     <a class="btn bg-info fs-6 mx-auto w-75" href="https://kvng777.github.io/4_style_guide/" target="_blank">Visit Site</a>
//             </div>
//         </div>
//         <div class="card-body">
//             <h6 class="card-title my-auto">Style Guide</h6>
//             <p class="card-text"></p>
//         </div>
//     </div>
// </div>

// <div class="col-sm-12 col-md-6 col-lg-4">
//     <div class="card project mx-auto">
//         <img src="images/proj5.png" alt="Link to project 3">
//         <div class="image-overlay">
//             <div class="desc container"> 
//                 <p class="fw-light">An <strong>interactive</strong> photo gallery with using a baggutebox.js <strong>lightbox</strong> feature for viewing large size photos and with a <strong>searchFilter.js</strong> to search for particular image.</p>

//                 <h6>Tech Stack</h6>
//                     <ul class="list-unstyled d-flex mt-1 justify-content-center">
//                         <li class="mx-2">
//                         <img class="" src="images/html.png" alt="">
//                         </li>

//                         <li class="mx-2">
//                         <img class="" src="images/sass.png" alt="">
//                         </li>

//                         <li class="mx-2">
//                         <img class="" src="images/js.png" alt="">
//                         </li>
//                     </ul>
//                     <a class="btn bg-info fs-6 mx-auto w-75" href="https://kvng777.github.io/5_photo_gallery/" target="_blank">Visit Site</a>
//             </div>
//         </div>
//         <div class="card-body">
//             <h6 class="card-title my-auto">Interactive Photo Gallery</h6>
//             <p class="card-text"></p>
//         </div>
//     </div>
// </div>

// <div class="col-sm-12 col-md-6 col-lg-4">
//     <div class="card project mx-auto">
//         <img src="images/proj6.png" alt="Link to project 4">
//         <div class="image-overlay">
//             <div class="desc container">
//                 <p class="fw-light">A game show web app thats built with <strong>arrays</strong> and <strong>JS</strong> functions to check against selected letters which in the end gives you and win or lose.</p>

//                 <h6>Tech Stack</h6>
//                     <ul class="list-unstyled d-flex mt-1 justify-content-center">
//                         <li class="mx-2">
//                         <img class="" src="images/html.png" alt="">
//                         </li>

//                         <li class="mx-2">
//                         <img class="" src="images/sass.png" alt="">
//                         </li>

//                         <li class="mx-2">
//                         <img class="" src="images/js.png" alt="">
//                         </li>
//                     </ul>
//                     <a class="btn bg-info fs-6 mx-auto w-75" href="https://kvng777.github.io/6-game_show_app_v1.2/" target="_blank">Visit Site</a>
//             </div>
//         </div>

//         <div class="card-body">
//             <h6 class="card-title my-auto">Game Show App</h6>
//             <p class="card-text"></p>
//         </div>
//     </div>
// </div>

// <div class="col-sm-12 col-md-6 col-lg-4">
//     <div class="card project mx-auto">
//         <img src="images/proj7.png" alt="Link to project 5">
//         <div class="image-overlay">
//             <div class="desc container"> 
//                 <p class="fw-light">A web responsive web app built with using <strong>CSS grid</strong>. Interactive data charts and graphs are being populated with using <strong>Chart.js</strong> and <strong>Object literals</strong>.</p>

//                 <h6>Tech Stack</h6>
//                     <ul class="list-unstyled d-flex mt-1 justify-content-center">
//                         <li class="mx-2">
//                         <img class="" src="images/html.png" alt="">
//                         </li>

//                         <li class="mx-2">
//                         <img class="" src="images/sass.png" alt="">
//                         </li>

//                         <li class="mx-2">
//                         <img class="" src="images/js.png" alt="">
//                         </li>
//                     </ul>
//                     <a class="btn bg-info fs-6 mx-auto w-75" href="https://kvng777.github.io/7-web_app_dashboard_v3.1/" target="_blank">Visit Site</a>
//             </div>
//         </div>
//         <div class="card-body">
//             <h6 class="card-title my-auto">Web App Dashboard</h6>
//             <p class="card-text"></p>
//         </div>
//     </div>
// </div>

// <div class="col-sm-12 col-md-6 col-lg-4">
//     <div class="card project mx-auto">
//         <img src="images/proj8.png" alt="Link to project 6">
//         <div class="image-overlay">
//             <div class="desc container">
//                 <p class="fw-light">A web responsive Employee Directory populating employee data with using <strong>fetch API</strong>. Built with modal pop-up feature to view through employee data.</p>

//                 <h6>Tech Stack</h6>
//                     <ul class="list-unstyled d-flex mt-1 justify-content-center">
//                         <li class="mx-2">
//                         <img class="" src="images/html.png" alt="">
//                         </li>

//                         <li class="mx-2">
//                         <img class="" src="images/sass.png" alt="">
//                         </li>

//                         <li class="mx-2">
//                         <img class="" src="images/js.png" alt="">
//                         </li>
//                     </ul>
//                     <a class="btn bg-info fs-6 mx-auto w-75" href="https://kvng777.github.io/8_employee_directory_v1/" target="_blank">Visit Site</a>
//             </div>
//         </div>
//         <div class="card-body">
//             <h6 class="card-title my-auto">Employee Directory</h6>
//             <p class="card-text"></p>
//         </div>
//     </div>
// </div>
// </div> 
// </div>
// `;

//wechat qrcode pop-over
$(document).ready(function(){
  $('[data-toggle="popover"]').popover({
      placement : 'top',
      trigger : 'active',
      html : true,
      content : wechat
  });
});


//viewport load for medium content styling
// window.addEventListener("load", function() {
//         if (window.innerWidth > 425) {
//       carouselView.innerHTML = mdContent;
//     }
//   });

// //styling adjustment on resize
// window.addEventListener("resize", function() {
// if (window.innerWidth > 425) {
//     carouselView.innerHTML = mdContent;
//   } else {
//       carouselView.innerHTML =smContent;
//   }
// });


// navbar auto close on click item
$( '#navbarNavAltMarkup a' ).on('click', function(){
    $('#navbarNavAltMarkup').collapse('hide');
});

