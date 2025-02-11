function toggleMenu() {
    const menu = document.querySelector(".menu");
    if (menu.style.display === "block") {
        menu.style.display = "none";
    } else {
        menu.style.display = "block";
    }
}

function closeMenu() {
    document.querySelector(".menu").style.display = "none";
}

document.addEventListener("DOMContentLoaded", function () {
    const links = document.querySelectorAll(".menu ul li a");
    links.forEach(link => {
        link.addEventListener("click", function (event) {
            event.preventDefault();
            const sectionId = this.getAttribute("href").substring(1);
            const section = document.getElementById(sectionId);

            if (section) {
                window.scrollTo({
                    top: section.offsetTop - 20,
                    behavior: "smooth"
                });
            }
        });
    });
});
