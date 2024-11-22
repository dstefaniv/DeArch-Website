document.addEventListener("DOMContentLoaded", () => {
    document.getElementById("show-register").onclick = () => toggle("register");
    document.getElementById("show-login").onclick = () => toggle("login");

    function toggle(view) {
        document.getElementById("login-box").style.display = view === "login" ? "block" : "none";
        document.getElementById("register-box").style.display = view === "register" ? "block" : "none";
    }
});