function convertToAnchor(elements) {
    // If a single element is passed, wrap it in an array
    if (elements instanceof Element) {
        elements = [elements]; 
    } 
    
    // If it's not a NodeList or array, exit
    if (!elements || !(elements instanceof NodeList || Array.isArray(elements))) return;

    elements.forEach(element => {
        if (!element) return;

        // Create a new anchor element
        const anchor = document.createElement("a");

        // Get href from the custom data attribute
        const href = element.getAttribute("data-href");
        if (href) {
            anchor.href = href;
        }

        // Copy other attributes from the original element (excluding data-href)
        for (const attr of element.attributes) {
            if (attr.name !== "data-href") {
                anchor.setAttribute(attr.name, attr.value);
            }
        }

        // Copy inner content
        anchor.innerHTML = element.innerHTML;

        // Replace the original element with the new anchor
        element.replaceWith(anchor);
    });
}


export default convertToAnchor