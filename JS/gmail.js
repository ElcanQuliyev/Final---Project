const btn = document.getElementById("getStartedBtn");
const gmail = document.getElementById("gmail");

btn.addEventListener("click", () => {
  const email = document.getElementById("emailInput").value;
  if (email) {
    // Email-i localStorage-a yaz
    localStorage.setItem("userEmail", email);
    // Parol təyin səhifəsinə keç
    window.location.href = "setPassword.html";
  } else {
    alert("Please enter a valid email!");
  }
});

// btn.addEventListener("click", () => {
//   // LocalStorage-dan emaili al
//   const email = document.getElementById("emailInput").value;

//   if (email) {
//     // Emaili "gmail" div-inə yerləşdir
//     const gmailValue = localStorage.setItem("userEmail", email);
//     gmail.textContent = gmailValue;
//     window.location.href = "setpassword.html";
//   } else {
//     // Əgər email yoxdursa, istifadəçini geri yönləndir
//     alert("No email found. Redirecting to the start page.");
//   }
// });
