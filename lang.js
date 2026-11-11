(function () {
  var STORAGE_KEY = "mingri-lang";
  var html = document.documentElement;

  function current() {
    return html.getAttribute("lang") === "en" ? "en" : "zh-CN";
  }

  function apply(lang) {
    var isEn = lang === "en";
    html.setAttribute("lang", isEn ? "en" : "zh-CN");
    try { localStorage.setItem(STORAGE_KEY, isEn ? "en" : "zh-CN"); } catch (e) {}
    document.querySelectorAll("[data-lang-btn]").forEach(function (btn) {
      btn.setAttribute("aria-pressed", String(btn.getAttribute("data-lang-btn") === (isEn ? "en" : "zh")));
    });
  }

  var saved = null;
  try { saved = localStorage.getItem(STORAGE_KEY); } catch (e) {}
  if (saved === "en" || saved === "zh-CN") apply(saved);
  else apply(current());

  document.addEventListener("click", function (event) {
    var btn = event.target.closest("[data-lang-btn]");
    if (!btn) return;
    apply(btn.getAttribute("data-lang-btn") === "en" ? "en" : "zh-CN");
  });
})();
