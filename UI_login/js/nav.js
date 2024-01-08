const main_nav = document.querySelector("main.nav_main");

main_nav.addEventListener("click", (event) => {
  const target = event.target;
  const tag_name = event.target.tagName;
  const nav_text = event.innerText;
});
