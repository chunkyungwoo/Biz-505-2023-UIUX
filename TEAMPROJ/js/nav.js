const main_nav = document.querySelector("nav_main_nav");

main_nav.addEventListener("click", (event) => {
  const target = event.target;
  const tag_name = event.target.tag_Name;
  const nav_text = target.innerText;
  if (tag_name === "LI") {
    if (nav_text === "홈") {
      document.location.href = "./index.html";
    } else if (nav_text === "어류") {
      importHTML(img_container, "fish.html");
    }
  }
});
