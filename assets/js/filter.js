
let sortOptions = document.getElementById('sort-options')
let btns = sortOptions.getElementsByClassName('btn')

function filterSelection(str) {
	let items = document.getElementsByClassName('filterItems')

	if(str == "all"){ str = "" }

	Array.from(items).forEach(item => {
		removeClass(item, 'show')
		if(item.className.indexOf(str) > -1){
			addClass(item, 'show')
			console.log("working")
		}
	})
}

function addClass(element, name){
		let itemClass, itemName

		itemClass = element.className.split(' ')
		itemName = name.split(' ')

		for(let i = 0; i < itemName.length; i++){
			if(itemClass.indexOf(itemName[i]) == -1){
				element.className += " " + itemName[i]
			}
		}
}

function removeClass(element, name){
	let itemClass, itemName;

	itemClass = element.className.split(' ')
	itemName = name.split(' ')

 for (i = 0; i < itemName.length; i++) {
    while (itemClass.indexOf(itemName[i]) > -1) {
      itemClass.splice(itemClass.indexOf(itemName[i]), 1);
    }
  }
  element.className = itemClass.join(" ")
}

Array.from(btns).forEach((btn) => {
	btn.addEventListener('click', () => {
		let current = document.getElementsByClassName('active')
		current[0].className = current[0].className.replace(' active', '')
		this.className += ' active';
	})
})

filterSelection("all")
