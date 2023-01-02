let id = [
		 "https://images.unsplash.com/photo-1661956601030-fdfb9c7e9e2f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=742&q=80", 
		 "https://images.unsplash.com/photo-1672224745017-a9b54ad9188f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1632&q=80",
		 "https://images.unsplash.com/photo-1670844693375-2a3152c66ca1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1887&q=80"
		 ];

document.getElementById("im1").addEventListener("click", iS);

let counter = 0;

function iS () {
	if (counter % 2 == 0) {
		document.getElementById("im1").src = id[0];
	} else {
		document.getElementById("im1").src = id[1];
	}
	counter++;
	console.log(counter);
}
let arr = document.getElementById("sq");
arr.addEventListener("click", showI);
function showI() {
	if (counter == id.length - 1) {
		counter = -1;
	}
	document.getElementById("im1").src = id[counter + 1];
	counter++;
}
