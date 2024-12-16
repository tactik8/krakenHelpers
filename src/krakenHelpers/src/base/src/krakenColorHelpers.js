

import { krakenNullHelpers as h} from './krakenNullHelpers.js';

export const krakenColorHelpers = {
    hexToRgb: hexToRgb,
    rgbToHex: rgbToHex,
    hexToHsl: hexToHsl,
    hslToHex: hslToHex,
    palette:{
        complementary: complementaryColor,
        lighter: lighterColor,
        darker: darkerColor,
    }
};



function hexToRgb(hex) {
  // Expand shorthand form (e.g. "03F") to full form (e.g. "0033FF")
  var shorthandRegex = /^#?([a-f\d])([a-f\d])([a-f\d])$/i;
  hex = hex.replace(shorthandRegex, function(m, r, g, b) {
    return r + r + g + g + b + b;
  });

  var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return result ? {
    r: parseInt(result[1], 16),
    g: parseInt(result[2], 16),
    b: parseInt(result[3], 16)
  } : null;
}


function componentToHex(c) {
  var hex = c.toString(16);
  return hex.length == 1 ? "0" + hex : hex;
}

function rgbToHex(r, g, b) {
    /**
     * Convert an RGB color value to HEX
     * @param {Number| String} r The red color value or the entire color string
     * @param {Number} g The green color value
     * @param {Number} b The blue color value
     * @returns {String} The corresponding HEX color value
     */
    if(h.isNull(g) && h.isNull(b) && r.includes(',')){
        r = r.replace('(', '')
        r = r.replace(')', '')
        let rgb = r.split(',')
        r = Number(rgb[0].trim())
        g = Number(rgb[1].trim())
        b = Number(rgb[2].trim())
        
    }

    
  return "#" + componentToHex(r) + componentToHex(g) + componentToHex(b);
}




function hexToHsl(hex) {
    hex = hex.replace("#", "");
    let r = parseInt(hex.substring(0, 2), 16) / 255;
    let g = parseInt(hex.substring(2, 4), 16) / 255;
    let b = parseInt(hex.substring(4, 6), 16) / 255;

    let max = Math.max(r, g, b);
    let min = Math.min(r, g, b);
    let h, s, l = (max + min) / 2;

    if (max === min) {
        h = s = 0; // achromatic
    } else {
        let d = max - min;
        s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
        switch (max) {
            case r: h = (g - b) / d + (g < b ? 6 : 0); break;
            case g: h = (b - r) / d + 2; break;
            case b: h = (r - g) / d + 4; break;
        }
        h *= 60;
    }
    return [Math.round(h), Math.round(s * 100), Math.round(l * 100)];
};

function hslToHex(h, s, l) {
    s /= 100;
    l /= 100;
    let c = (1 - Math.abs(2 * l - 1)) * s;
    let x = c * (1 - Math.abs((h / 60) % 2 - 1));
    let m = l - c / 2;
    let r = 0, g = 0, b = 0;

    if (h >= 0 && h < 60) { r = c; g = x; b = 0; }
    else if (h >= 60 && h < 120) { r = x; g = c; b = 0; }
    else if (h >= 120 && h < 180) { r = 0; g = c; b = x; }
    else if (h >= 180 && h < 240) { r = 0; g = x; b = c; }
    else if (h >= 240 && h < 300) { r = x; g = 0; b = c; }
    else if (h >= 300 && h < 360) { r = c; g = 0; b = x; }

    r = Math.round((r + m) * 255).toString(16).padStart(2, "0");
    g = Math.round((g + m) * 255).toString(16).padStart(2, "0");
    b = Math.round((b + m) * 255).toString(16).padStart(2, "0");

    return `#${r}${g}${b}`;
};



function complementaryColor(hexColor){
    /**
     * Returns complementary color of a given hex color
     * @param {String} hexColor Hex color
     * @returns {String} Complementary color
     */

    const [h, s, l] = hexToHsl(hexColor);
    const complementary = hslToHex((h + 180) % 360, s, l)
    return complementary
    
}

function lighterColor(hexColor, increment){
    /**
     * Returns lighter color of a given hex color
     * @param {String} hexColor Hex color
     * @param {Number} increment Increment
     * @returns {String} Lighter color
     */


    const [h, s, l] = hexToHsl(hexColor);
    let newColor = hslToHex(h, s, Math.min(l + increment * 10, 100))

    return newColor
    
}

function darkerColor(hexColor, increment){
    /**
     * Returns lighter color of a given hex color
     * @param {String} hexColor Hex color
     * @param {Number} increment Increment
     * @returns {String} Lighter color
     */


    const [h, s, l] = hexToHsl(hexColor);
    let newColor = hslToHex(h, s, Math.min(l - increment * 10, 100))

    return newColor

}

