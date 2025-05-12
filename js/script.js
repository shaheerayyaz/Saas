  // js/script.js

document.addEventListener("DOMContentLoaded", function () {
  console.log("SaaSify loaded");

  const toggles = document.querySelectorAll(".accordion-toggle");

  toggles.forEach((toggle) => {
    toggle.addEventListener("click", function () {
      const content = this.nextElementSibling;
      const expanded = content.classList.contains("open");

      document.querySelectorAll(".accordion-content").forEach((el) => {
        el.classList.remove("open");
        el.style.maxHeight = null;
      });

      if (!expanded) {
        content.classList.add("open");
        content.style.maxHeight = content.scrollHeight + "px";
      }
    });
  });
});
