const main_nav = document.querySelector("nav.main_nav");

main_nav.addEventListener("click", (event) => {
  const section = document.querySelector("section.section");
  const target = event.target;
  const tag_name = event.target.tagName;
  const nav_text = target.innerText;
  const nav_class = target;
  if (tag_name === "LI") {
    if (nav_text === "어류") {
      document.location.href = "./fish.html";
    }
  }
});
