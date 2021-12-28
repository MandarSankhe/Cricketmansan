const menu = document.querySelector('#menu');
console.log(menu);
const sidebar = document.querySelector('.sidebar');
console.log(sidebar);

function closeNav() {
    document.getElementById("menu").style.width = "0";
}

menu.addEventListener('click', function () {
    sidebar.classList.toggle('show-sidebar');               
});

    if (localStorage.getItem('theme') == 'darkTheme') {
            const htmlEl = document.getElementsByTagName('html')[0];
            htmlEl.dataset.theme = "dark";
            $("body").addClass("dark");
            $(".changetheme").text("Light Mode");
}


        const htmlEl = document.getElementsByTagName('html')[0];
        $(".changetheme").on("click", function () {
            if ($("body").hasClass("dark")) {
            $("body").removeClass("dark");
                $(".changetheme").text("Dark Mode");
                htmlEl.dataset.theme = "light";
                localStorage.setItem('theme', 'lightTheme');
            } else {
            $("body").addClass("dark");
                $(".changetheme").text("Light Mode");
                htmlEl.dataset.theme = "dark";
                localStorage.setItem('theme', 'darkTheme');
            }
        });
