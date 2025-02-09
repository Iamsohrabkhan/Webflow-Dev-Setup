 function findMatchingLink(previousPage, links) {
    for (let link of links) {
        if (link.href.includes(previousPage)) {
            return link; // Return the first matching <a> tag
        }
    }
    return null; // Return null if no match is found
}
export default findMatchingLink