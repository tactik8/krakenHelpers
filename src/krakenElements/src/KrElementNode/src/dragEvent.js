export function makeDraggable(element, elementHandle, snap_x, snap_y) {
    let isDragging = false;
    let offsetX, offsetY;

    element.style.position = 'absolute'; // Ensure the element is positioned absolutely

    elementHandle.addEventListener('mousedown', (e) => {
        isDragging = true;
        // Calculate offset between mouse position and element's top-left corner
        offsetX = e.clientX - element.getBoundingClientRect().left;
        offsetY = e.clientY - element.getBoundingClientRect().top;
        element.style.cursor = 'grabbing';
    });

    document.addEventListener('mousemove', (e) => {
        if (isDragging) {
            // Update the element's position
            const newX = e.clientX - offsetX;
            const newY = e.clientY - offsetY;
            element.style.left = `${newX}px`;
            element.style.top = `${newY}px`;
        }
    });

    document.addEventListener('mouseup', () => {
        if (isDragging) {
            isDragging = false;
            element.style.cursor = 'grab';
        }
    });

    // Set cursor style for the draggable element
    element.style.cursor = 'grab';
}
