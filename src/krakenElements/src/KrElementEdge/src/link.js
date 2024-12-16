


export function linkElements(element1Id, element2Id, canvasId) {
    const element1 = document.getElementById(element1Id);
    const element2 = document.getElementById(element2Id);
    const canvas = document.getElementById(canvasId);
    const ctx = canvas.getContext('2d');

    // Resize canvas to fill the window
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    // Get the centers of the two elements
    const rect1 = element1.getBoundingClientRect();
    const rect2 = element2.getBoundingClientRect();

    const x1 = rect1.left + rect1.width / 2;
    const y1 = rect1.top + rect1.height / 2;
    const x2 = rect2.left + rect2.width / 2;
    const y2 = rect2.top + rect2.height / 2;

    // Clear the canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Draw the line
    ctx.beginPath();
    ctx.moveTo(x1, y1);
    ctx.lineTo(x2, y2);
    ctx.strokeStyle = 'black'; // Line color
    ctx.lineWidth = 2; // Line width
    ctx.stroke();

    window.addEventListener('resize', () => {
        linkElements('element1', 'element2', 'lineCanvas');
    });


    
}


