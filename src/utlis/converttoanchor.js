const convertToAnchor = () => {
    document.querySelectorAll("div[data-href]").forEach((div) => {
      const href = div.getAttribute("data-href");
  
      const anchor = document.createElement("a");
      anchor.href = href;
      anchor.innerHTML = div.innerHTML;
      anchor.className = div.className;
      anchor.setAttribute("data-barba", "link");
  
      div.replaceWith(anchor);
    });
  };
  
  export default convertToAnchor;
  