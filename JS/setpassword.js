const btn = document.getElementById("btn");

btn.addEventListener("click", () => {
  const password = document.getElementById("passwordInput").value;
  if (password) {
    // Parolu localStorage-a saxlayırıq (təhlükəsiz deyil, amma demo üçün uyğundur)
    localStorage.setItem("userPassword", password);
    // Filmlər səhifəsinə keç
    window.location.href = "movies.html";
  } else {
    alert("Please create a password!");
  }
});
