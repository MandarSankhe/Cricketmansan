function myFunction() {
    var element = document.body;
    element.classList.toggle("dark-mode");
}

//const switchButton = document.getElementById('switch');
//const workContainer = document.getElementById('work');

//switchButton.addEventListener('click', () => {
//    document.body.classList.toggle('dark-mode'); //toggle the HTML body the class 'dark'
//    switchButton.classList.toggle('active');
//    //toggle the HTML button with the id='switch' with the class 'active'

//    workContainer.classList.toggle('dark-mode');

//    if (document.body.classList.contains('dark-mode')) { //when the body has the class 'dark' currently
//        localStorage.setItem('darkMode', 'enabled'); //store this data if dark mode is on
//    } else {
//        localStorage.setItem('darkMode', 'disabled'); //store this data if dark mode is off
//    }
//});

//if (localStorage.getItem('darkMode') == 'enabled') {
//    document.body.classList.toggle('dark-mode');
//    switchButton.classList.toggle('active');
//    workContainer.classList.toggle('dark-mode');
//}