document.addEventListener("DOMContentLoaded", () => {

    // CONTACT FORM
    const form = document.getElementById("contact-form");

    if (form) {
        form.addEventListener("submit", (e) => {
            e.preventDefault();
            alert("Message sent successfully!");
            form.reset();
        });
    }

    // DARK MODE TOGGLE
    const toggleBtn = document.createElement("button");
    toggleBtn.innerText = "🌙 Dark Mode";
    toggleBtn.style.padding = "8px";
    toggleBtn.style.cursor = "pointer";

    document.querySelector("header").appendChild(toggleBtn);

    toggleBtn.addEventListener("click", () => {
        document.body.classList.toggle("dark");

        if (document.body.classList.contains("dark")) {
            toggleBtn.innerText = "☀ Light Mode";
        } else {
            toggleBtn.innerText = "🌙 Dark Mode";
        }
    });

});
