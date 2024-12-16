export function makeLinkTo(element) {
    element.addEventListener("dragover", (event) => {});

    element.addEventListener("drop", (event) => {});
}

let isDragging = false;
let isInitialized = false

const canvas = document.getElementById('canvas1');
const ctx = canvas.getContext('2d');


export function makeLinkFrom(draggable) {
    
    //const draggable = document.getElementById('draggable');

    

    // Get the center of the draggable element
    function getElementCenter(element) {
        const rect = element.getBoundingClientRect();
        return {
            x: rect.left + rect.width / 2,
            y: rect.top + rect.height / 2,
        };
    }

    // Mouse event listeners
    draggable.addEventListener("mousedown", (e) => {
        e.preventDefault();
        e.stopPropagation();
        
        isDragging = true;
        draggable.style.cursor = "grabbing";
    });

    if(isInitialized != true){
        isInitialized=true 
        document.addEventListener("mousemove", (e) => {
            e.preventDefault();
            e.stopPropagation();

            console.log('dragging')
    
            if (isDragging==true) {

                console.log('make line')
                const elementCenter = getElementCenter(draggable);
                const mouseX = e.clientX;
                const mouseY = e.clientY;

                console.log(elementCenter, mouseX, mouseY)
                // Clear canvas
                //ctx.clearRect(0, 0, canvas.width, canvas.height);
    
                // Draw a line
                ctx.beginPath();
                ctx.moveTo(elementCenter.x, elementCenter.y);
                ctx.lineTo(mouseX, mouseY);
                ctx.strokeStyle = "black";
                ctx.lineWidth = 2;
                ctx.stroke();
                ctx.closePath();
            }
        });
    
        document.addEventListener("mouseup", (e) => {
            e.preventDefault();
            e.stopPropagation();console.log('mouseup')
            if (isDragging) {
                isDragging = false;
                
                draggable.style.cursor = "grab";
                ctx.clearRect(0, 0, canvas.width, canvas.height); // Clear the line when released
            }
        });
    }
}
