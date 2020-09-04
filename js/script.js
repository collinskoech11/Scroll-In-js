window.addEventListener('scroll',
	function(){
		const container = document.querySelector('.container');
		container.classList.toggle("ScrollOne",window.scrollY>20);
		container.removeClass("ScrollOne",window.scrollY>70);
	})