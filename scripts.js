
window.onload = function() {

	// TABS

	var tabs = document.querySelectorAll('.tab-block .tab');

	for (var i = 0; i < tabs.length; i++) {
		var tab = tabs[i];

		tab.onclick = tabClick
	}

	function tabClick(event) {

		var selectedTab = document.querySelector('.tab-block.selected');

		selectedTab.classList.remove('selected');

		this.parentNode.classList.add('selected');
	}


	// SCROLL SPY

	var section = document.querySelectorAll(".section");
	var sections = {};
	var i = 0;

	Array.prototype.forEach.call(section, function(e) {
		sections[e.id] = e.offsetTop;
	});

	window.onscroll = function() {
		var scrollPosition = document.documentElement.scrollTop || document.body.scrollTop;

		for (i in sections) {

			if (sections[i] <= scrollPosition) {
				document.querySelector('.active').setAttribute('class', ' ');
				document.querySelector('a[href*=' + i + ']').setAttribute('class', 'active');
			}

		}
	};


}