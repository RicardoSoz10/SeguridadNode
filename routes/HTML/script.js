console.clear();

const loginBtn = document.getElementById("login");
const signupBtn = document.getElementById("signup");
const authBtn = document.getElementById("authButton");

loginBtn.addEventListener("click", (e) => {
	let parent = e.target.parentNode.parentNode;
	Array.from(e.target.parentNode.parentNode.classList).find((element) => {
		if (element !== "slide-up") {
			parent.classList.add("slide-up");
		} else {
			signupBtn.parentNode.classList.add("slide-up");
			parent.classList.remove("slide-up");
		}
	});
});

signupBtn.addEventListener("click", (e) => {
	let parent = e.target.parentNode;
	Array.from(e.target.parentNode.classList).find((element) => {
		if (element !== "slide-up") {
			parent.classList.add("slide-up");
		} else {
			loginBtn.parentNode.parentNode.classList.add("slide-up");
			parent.classList.remove("slide-up");
		}
	});
});

authBtn.addEventListener("click", (e) => {
	let timer;

	Swal.fire({
	  title: 'Utiliza la mano para registrar tu seña',
	  imageUrl: 'https://unsplash.it/400/200',	//Cambiar por el acceso a la camara
	  html: 'La foto se tomará en <b></b> segundos.',
	  didOpen: () => {
		Swal.showLoading()
		const b = Swal.getHtmlContainer().querySelector('b')

		do {
			timer = setInterval(() => { 
				if(timer > 0) 
					timer -= 1
				else {	// Acciones cuando el tiempo acabe
					timer = 3	// Reiniciar el contador
				}
				b.textContent = timer
			}, 1000)
			timer = 4
		} while(timer == 0)
	  }
	})
})