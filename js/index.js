// Your code goes here



////////////ADDED IN RAVE COPIED FROM CODEPEN

const groot = document.querySelector('html');

const R = _ => Math.random(),
      F = x => Math.floor(x);

const rave = t => {
  let r = F(R() * 255),
      g = F(R() * 255),
      b = F(R() * 255),
      rgb = `rgb(${r}, ${g}, ${b})`;
  
  t.style.backgroundColor = rgb;
}

const x = _ => rave(groot);

groot.addEventListener('wheel', x);

//////////////////TRIED TO GET IT TO BE ON SCROLL, couldn't get that working.
///BUT WHEEL DOES WORK.... I think it needs an x and y coordinate??

/////////1.  MOUSEOVER on title tag... counted in console

const titleTag = document.querySelector('.logo-heading');

titleTag.addEventListener('mouseover', function(event){
    console.log("title tag moused!");
})

//////////// 2.  Mouseover on navlinks for hover effect

// const navLinks= document.querySelectorAll('.nav-link');

// const navSwap=function(event){
    //MAKE FUNCTION HERE
// }

// navLinks.addEventListener('mouseover',navSwap);


///////////////////////////////


///3.  swap image to further bus
const busimage = document.querySelector('.busInSand')

busimage.addEventListener('click', function(event){
    
    const imageSource=event.target.src;
    
    
    //let imageSource= event.target.src;
    //let imageSource= document.busInSand.src= "img/further.png";
})

console.log(busimage);
console.log(imageSource);




4. 


