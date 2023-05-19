function show_hide_password(target) {
  const input = document.getElementById("login_password");

  if (input.getAttribute("type") == "password") {
    target.classList.add("view");
    input.setAttribute("type", "text");
  } else {
    target.classList.remove("view");
    input.setAttribute("type", "password");
  }

  return false;
}
