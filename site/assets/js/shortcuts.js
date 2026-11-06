(() => {
  function init() {
    const storageKey = "portfolio-shortcuts";
    let enabled = true;

    try {
      enabled = localStorage.getItem(storageKey) !== "off";
    } catch {}

    const routes = {
      h: "/mid1st/",
      a: "/mid1st/about/",
      b: "/mid1st/posts/placeholder-text/",
      p: "/mid1st/projects/"
    };

    const panel = document.createElement("div");
    panel.style.cssText =
      "text-align:center;padding:12px;font-size:14px;";

    const help = document.createElement("span");
    help.textContent =
      "단축키: H 홈 · A 소개 · B 블로그 · P 프로젝트 ";

    const toggle = document.createElement("button");
    toggle.type = "button";

    function updateButton() {
      toggle.textContent = enabled
        ? "단축키 끄기"
        : "단축키 켜기";
      toggle.setAttribute("aria-pressed", String(enabled));
    }

    toggle.addEventListener("click", () => {
      enabled = !enabled;
      updateButton();

      try {
        localStorage.setItem(
          storageKey,
          enabled ? "on" : "off"
        );
      } catch {}
    });

    updateButton();
    panel.append(help, toggle);
    (document.querySelector("footer") || document.body)
      .appendChild(panel);

    document.addEventListener("keydown", (event) => {
      if (
        !enabled ||
        event.defaultPrevented ||
        event.repeat ||
        event.isComposing ||
        event.ctrlKey ||
        event.altKey ||
        event.metaKey
      ) {
        return;
      }

      const target = event.target;

      if (
        target instanceof Element &&
        (
          target.closest(
            "input, textarea, select, " +
            '[role="textbox"], [role="combobox"]'
          ) ||
          target.isContentEditable
        )
      ) {
        return;
      }

      const path = routes[event.key.toLowerCase()];

      if (path) {
        event.preventDefault();
        window.location.assign(path);
      }
    });
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
