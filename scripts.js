
window.onload = function() {
    
    // RESOURCES
    // https://developer.mozilla.org/en-US/docs/Web/API/Document/querySelectorAll
    // https://developer.mozilla.org/en-US/docs/Web/API/Document/querySelector
    

	// TABS

    // query DOM for all elements with a ClassName of 'tab'
	var tabs = document.querySelectorAll('.tab-block .tab');

    // add an onclick function each tab
	for (var i = 0; i < tabs.length; i++) {
		var tab = tabs[i];

		tab.onclick = tabClick
	}

    // declare the onclick function
	function tabClick(event) {
        
        // query the DOM for the element with the ClassName's 'tab-block' and 'selected'
		var selectedTab = document.querySelector('.tab-block.selected');

        // remove the 'selected' ClassName from this element
		selectedTab.classList.remove('selected');

        // add the 'selected' ClassName to the parentNode of the clicked element
		this.parentNode.classList.add('selected');
	}


	// SCROLL SPY

    // query DOM for all elements with a ClassName of 'section'
	var sections = document.querySelectorAll(".section");
    
    // iterate through each section and add the element 'id' and the elements 'offsetTop' value to an object map
    // REFERENCE: Exercise 8 of https://github.com/CodemasterInstitute/db-exercise-006/blob/master/scripts.js 
	var sectionMap = {};
	for (var i = 0; i < sections.length; i++) {
		var sectionElem = sections[i];

		sectionMap[sectionElem.id] = sectionElem.offsetTop;
	}
    
	window.onscroll = function() {
        // determine scrolled distance from the top
		var scrollPosition = document.documentElement.scrollTop || document.body.scrollTop;

        // iterate over the object map defined earlier
		for (var id in sectionMap) {

            // check each section and determine if its offsetTop value is less than or equal to the scrolled distance from the top value
            // if it is then find the section that currently has the 'active' ClassName applied and remove that class
            // then, apply that ClassName to the current section
			if (sectionMap[id] <= scrollPosition) {
				document.querySelector('.active').setAttribute('class', ' ');
				document.querySelector('a[href*=' + id + ']').setAttribute('class', 'active');
			}

		}
	};


}
