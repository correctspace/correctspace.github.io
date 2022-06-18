var test = "";	

var token = {
  "url": "./data.json",
  "method": "GET",
  "timeout": 0,
  cache:  false,
  async:  false,
  "headers": {
    "Content-Type": "application/json",
    "Accept": "application/json"
  },
};
$.ajax(token)
.done(function (response,textStatus, xhr) {
//====================MENU=====================================================
    var global = response.global;
	var div = document.getElementById('menu-main-menu-4');
    var json = response.global.menus;
    console.log(json);
	json.forEach(function(obj,i) { 
		if(obj.class == "dropdown"){
			test +='<li  class="menu-item '+obj.class+'"><a title="'+obj.name+'" href="'+obj.link+'" class="dropdown-toggle" data-toggle="dropdown">'+obj.name+'</a><ul class="dropdown-menu" >';
			obj.subMenus.forEach(function(obj,s) {
			console.log(obj.class);
				if(obj.class == "dropdown"){
					test +='<li  class="menu-item '+obj.class+'"><a title="'+obj.name+'" href="'+obj.link+'" class="dropdown-toggle" data-toggle="dropdown">'+obj.name+'</a><ul class="dropdown-menu" >';
					obj.subMenus.forEach(function(obj) {
						test +='<li  class="menu-item '+obj.class+'"><a title="'+obj.name+'" href="'+obj.link+'">'+obj.name+'</a></li>';
					});
					test +='</ul></li>';
				}else{
					test +='<li  class="menu-item '+obj.class+'"><a title="'+obj.name+'" href="'+obj.link+'">'+obj.name+'</a></li>';
				}
			});
			test +='</ul></li>';
		}else{
			test +='<li  class="menu-item '+obj.class+'"><a title="'+obj.name+'" href="'+obj.link+'">'+obj.name+'</a></li>';
		}
	});
	div.innerHTML += test;

//====================END MENU=====================================================

$('.contact_phone').html(global.contact[0].value);
$('.contact_email').html(global.contact[1].value);
$('.contact_hours').html(global.contact[2].value);
$('.contact_location').html(global.contact[3].value);

$('.menu_fq').html('<a href="'+global.menus[4].link+'">'+global.menus[4].name+'</a>');
$('.menu_about').html('<a href="'+global.menus[1].link+'">'+global.menus[1].name+'</a>');
$('.menu_contact').html('<a href="'+global.menus[5].link+'">'+global.menus[5].name+'</a>');
$('.menu_price').html('<a href="'+global.menus[3].link+'">'+global.menus[3].name+'</a>');
$('.menu_devops').html('<a href="'+global.menus[2].subMenus[0].link+'">'+global.menus[2].subMenus[0].name+'</a>');
$('.menu_career').html('<a href="'+global.menus[5].link+'">'+global.menus[5].name+'</a>');

$('.facebook').html('<a href="'+global.socialLink[0].link+'"><i class="'+global.socialLink[0].icon+'"></i></a>');
$('.twitter').html('<a href="'+global.socialLink[1].link+'"><i class="'+global.socialLink[1].icon+'"></i></a>');
$('.linkedin').html('<a href="'+global.socialLink[2].link+'"><i class="'+global.socialLink[2].icon+'"></i></a>');



var logo = '<a class="navbar-brand" href="index.html">\
                            <img src="'+global.logo[0]+'" class="logo logo-display" alt="'+global.companyName+'">\
                            <img src="'+global.logo[1]+'" class="logo logo-scrolled" alt="'+global.companyName+'">\
                        </a>\
';
var navbarheader = document.getElementById('navbar-header');
navbarheader.innerHTML += logo;

var projects = document.getElementById('projects');
var counts = "";
global.projectsCount.forEach(function(obj,i) { 
 counts += '<div class="col-lg-3 col-md-6 item">\
 <div class="fun-fact">\
     <div class="counter">\
         <div class="timer" data-to="'+obj.value+'" data-speed="2000">'+obj.value+'</div>\
             <div class="operator">+</div>\
     </div>\
     <span class="medium">'+obj.name+'</span>\
 </div>\
</div>'

});
projects.innerHTML += counts;






var fqImage = document.getElementById('fqImage');
var fqi = '<div class="thumb wow fadeInLeft" data-wow-delay="0.5s">\
<img src="'+global.fq.image+'" alt="Thumb">\
</div>';
fqImage.innerHTML += fqi;

var fq = document.getElementById('accordionExample');
var ques = ""

global.fq.questions.forEach(function(obj,i) { 
    ques += '<div class="card">\
    <div class="card-header" id="headingOne">\
        <h4 class="'+obj.qclass+'" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">\
            '+obj.question+'\
        </h4>\
    </div>\
    <div id="collapseOne" class="'+obj.class+'" aria-labelledby="headingOne" data-parent="#accordionExample">\
        <div class="card-body">\
            <p>'+obj.answer+'</p>\
        </div>\
    </div>\
</div>'

});
fq.innerHTML += ques;






$('.logo1').html(global.logo[0]);
$('.logo2').html(global.logo[1]);
$('.logo3').html('<img src="'+global.logo[2]+'" alt="Correct Space LLP"></img>');
$('.short_about').html(global.shortAbout);















	console.log(global)
})
.fail(function (xhr,textStatus) {

});

