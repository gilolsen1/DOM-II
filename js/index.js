// Your code goes here

////////////ADDED IN RAVE COPIED FROM CODEPEN

const groot = document.querySelector("html");

const R = _ => Math.random(),
  F = x => Math.floor(x);

const rave = t => {
  let r = F(R() * 255),
    g = F(R() * 255),
    b = F(R() * 255),
    rgb = `rgb(${r}, ${g}, ${b})`;

  t.style.backgroundColor = rgb;
};

const x = _ => rave(groot);

groot.addEventListener("wheel", x);

//////////////////TRIED TO GET IT TO BE ON SCROLL, couldn't get that working.
///BUT WHEEL DOES WORK.... I think it needs an x and y coordinate??

/////////1.  MOUSEOVER on title tag... counted in console

const titleTag = document.querySelector(".logo-heading");

titleTag.addEventListener("mouseover", function(event) {
  console.log("title tag moused!");
});

//////////// 2.  Mouseover on navlinks for hover effect

const navLinks = document.querySelectorAll(".nav-link");
//console.log(navLinks);

const navSwap = function(event) {
  event.target.style.background = "red";
};

navLinks.forEach(linkArgument =>
  linkArgument.addEventListener("mouseover", navSwap)
);
//need the forEach to add the listener to each anchor tag.

///////////////////////////////

///3.  swap image to further bus
const busimage = document.querySelector(".busInSand");

busimage.addEventListener("mouseover", function(event) {
  // let imageSource= event.target.src;
  // let imageSource= document.busInSand.src= "img/further.png";

  event.target.src = "img/further.png";
});

//console.log(busimage);
//console.log(imageSource);

//1:22 lecture video

////

//4CHANGE BUTTON WIDTH ON CLICK
//test css first by adding the class to HTML

const signUPbuttons = document.querySelectorAll(".btn");
console.log(signUPbuttons);
//Explicit version
signUPbuttons.forEach(function(argument) {
  argument.addEventListener("mousedown", function(event) {
    //console.log("working");
    event.target.className = "bigbtn";
  });
});

signUPbuttons.forEach(function(argument) {
  argument.addEventListener("mouseup", function(event) {
    //console.log("working");
    event.target.className = "btn";
  });
});

///5ARROW VERSION

const copyWrong = document.querySelector(".footer");

copyWrong.addEventListener("click", event => {
  event.target.className = "blackback";
});

//6  select     console.log the text selected when highlighted.

//6  double click
//7 keydown

//focus  ?? ie password field
