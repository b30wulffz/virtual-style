const breakpointLg = 992;

document.querySelectorAll(".v-icon-panel").forEach((iconPanel) => {
  iconPanel
    .querySelector(".v-icon-panel-trigger")
    .addEventListener("click", () => {
      let viewportWidth =
        window.innerWidth ||
        document.documentElement.clientWidth ||
        document.body.clientWidth;
      if (
        !iconPanel.classList.contains("v-responsive") ||
        viewportWidth < breakpointLg
      ) {
        const panelTrigger = iconPanel.querySelector(".v-icon-panel-trigger");
        const panelBody = iconPanel.querySelector(".v-icon-panel-body");
        if (iconPanel.classList.contains("v-show")) {
          iconPanel.classList.remove("v-show");
          panelBody.style.width = "0px";
        } else {
          iconPanel.classList.add("v-show");
          const iconPanelWidth = iconPanel.getBoundingClientRect().width;
          const panelTriggerWidth = panelTrigger.getBoundingClientRect().width;
          panelBody.style.width = `${iconPanelWidth - panelTriggerWidth}px`;
        }
      }
    });
});

document.querySelectorAll(".v-collapsible").forEach((item) =>
  item.addEventListener("click", () => {
    item.classList.toggle("v-collapsible-active");
    const content = item.nextElementSibling;
    if (content.style.maxHeight) {
      content.style.maxHeight = null;
    } else {
      content.style.maxHeight = content.scrollHeight + "px";
    }
  })
);
