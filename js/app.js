
/**
* Define Global Variables
* 
*/
const navbar_ul = document.getElementById('navbar__list');
let numbOfSections = document.querySelectorAll('section');
let counter = numbOfSections.length;
let linkNode = Array
/**
* End Global Variables
* Start Helper Functions
* 
*/
// createNav bar dynamic 
function Nav(numbOfSections, navbar_ul) 
    {numbOfSections.forEach(sec => {
	let newLi = document.createElement('li');
	let sectionId = sec.getAttribute("id");
	newLi.innerText = sectionId;
	newLi.setAttribute('name', sectionId);
	newLi.classList.add("menu__link");
	navbar_ul.appendChild(newLi);
})
}
// build the nav 
Nav(numbOfSections, navbar_ul);
// Scroll to anchor ID using scrollIntoView event
function scrolling (linkNode, numOfSections){
	for (let i = 0; i < counter; i++){
		linkNode[i].addEventListener('click', function(event){ 
			event.preventDefault();
			numOfSections[i].scrollIntoView({
                behavior: "smooth", 
                block: "end"});
				// Set sections as active f
				// there is the active class styling stay in section and changing with change section
				linkNode[i].classList.add("active__link");
				for(let j=0; j < counter; j++){
					if(j!=i){
						linkNode[j].classList.remove("active__link");
					}
				}
		})
	}
}
// Scroll to section on link click
linkNode = document.querySelectorAll('li');
scrolling ( linkNode ,numbOfSections);
// Set sections as active
// getBoundingClientRect to set active style on section
window.onscroll = function() {
	document.querySelectorAll("section").forEach(function(active) {
	if(active.getBoundingClientRect().top >= -400 && active.getBoundingClientRect().top <= 150)
	 // Do something
	{active.classList.add("your-active-class");
}   // Do something else
    else{
        active.classList.remove("your-active-class");
    }
	});
}
