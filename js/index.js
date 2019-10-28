const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

// All Images Updated
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])

let ctaimg = document.querySelector('#cta-img');
ctaimg.setAttribute('src', siteContent['cta']['img-src']);

let middleimg = document.querySelector('#middle-img');
middleimg.setAttribute('src', siteContent['main-content']['middle-img-src']);

// Nav Bar
let navcont = Object.getOwnPropertyNames(siteContent.nav);
let navlist = navcont.filter(obj => !obj.includes('img'));
console.log(navcont);
console.log(navlist);
let navbar = Array.from(document.querySelectorAll('nav a'));
for(let i = 0; i < navbar.length; i++){
  navbar[i].textContent = siteContent.nav[navlist[i]];
}

// Header Content
document.querySelector('.cta h1').textContent = siteContent.cta.h1;
document.querySelector('.cta button').textContent = siteContent.cta.button;

// Main Content
let maincont = Object.getOwnPropertyNames(siteContent['main-content']);
console.log(maincont);
let hlist = maincont.filter(obj => obj.includes('h4'));
let plist = maincont.filter(obj => obj.includes('content'));
console.log(hlist);
console.log(plist);

let contblocksh = Array.from(document.querySelectorAll('.text-content h4'));
for(let i = 0; i < contblocksh.length; i++){
  contblocksh[i].textContent = siteContent['main-content'][hlist[i]];
}

let contblocksp = Array.from(document.querySelectorAll('.text-content p'));
for(let i = 0; i < contblocksp.length; i++){
  contblocksp[i].textContent = siteContent['main-content'][plist[i]];
}