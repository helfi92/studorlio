var navigation_elems = document.querySelectorAll(".nav a");
for(var i = 0 ; i < navigation_elems.length ; i++){
	navigation_elems[i].addEventListener("click",function(event){
		document.querySelector(".nav .active").classList.remove("active");
		this.parentElement.classList.add("active");
	})
}		

