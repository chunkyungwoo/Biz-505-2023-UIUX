const IMG_TAG_NAME = "IMG";
const ALT_TEXT = {
  금붕어사진: "금붕어사진",
  구피사진: "구피사진",
  네온테트라사진: "네온테트라사진",
};
const img_container = document.querySelector("section.img_container");
const img_container_click_handler = (event) => {
  const target = event.target;
  const tag_name = target.tagName;
  if (tag_name === IMG_TAG_NAME) {
    const alt_text = target.getAttribute("alt");
    if (alt_text === ALT_TEXT.금붕어사진) {
    }
  }
};
img_container.addEventListener("click", img_container_click_handler);
