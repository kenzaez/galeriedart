
function toggleDarkMode() {
    const element = document.body;
   
    const image = document.querySelector(".icon");
    
    if (element.classList.contains("dark-mode")) {
        element.classList.remove("dark-mode");
        element.classList.add("light-mode");
        image.src = "night.png"; 
    } else {
        element.classList.remove("light-mode");
        element.classList.add("dark-mode");
        image.src = "sun.png"; 
    }
}
