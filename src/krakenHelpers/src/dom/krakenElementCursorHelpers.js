

export const krakenElementCursorHelpers = {
    get: getCursorPosition,
    set: setCursorPosition,
}


function getCursorPosition(div) {
    let cursorPosition = 0;

    // Check if the div has focus
    if (window.getSelection && document.activeElement === div) {
        const selection = window.getSelection();

        if (selection.rangeCount > 0) {
            const range = selection.getRangeAt(0);
            const preCursorRange = range.cloneRange();

            // Move the start of the range to the beginning of the div
            preCursorRange.selectNodeContents(div);
            preCursorRange.setEnd(range.startContainer, range.startOffset);

            // The length of preCursorRange is the cursor position within the div
            cursorPosition = preCursorRange.toString().length;
        }
    }
    return cursorPosition;
}

function setCursorPosition(div, position) {
    // Ensure the div is focused
    div.focus();

    // Get the text nodes in the div
    function getTextNodes(node) {
        let textNodes = [];
        if (node.nodeType === Node.TEXT_NODE) {
            textNodes.push(node);
        } else {
            for (let child of node.childNodes) {
                textNodes = textNodes.concat(getTextNodes(child));
            }
        }
        return textNodes;
    }

    const textNodes = getTextNodes(div);
    let currentPos = 0;
    let range = document.createRange();
    let found = false;

    // Loop through the text nodes to find the right position
    for (let textNode of textNodes) {
        const nodeLength = textNode.textContent.length;

        if (currentPos + nodeLength >= position) {
            range.setStart(textNode, position - currentPos);
            range.collapse(true);
            found = true;
            break;
        }

        currentPos += nodeLength;
    }

    // Set the cursor position
    if (found) {
        const selection = window.getSelection();
        selection.removeAllRanges();
        selection.addRange(range);
    } else {
        console.warn("Position out of range");
    }
}
