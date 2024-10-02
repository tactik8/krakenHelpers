import { krakenHelpersLight as h} from '../krakenHelpersLight.js'

export const krakenImageHelpers = {
    getImage: getImageObjectFromUrl,
    resize: resizeImage,
    getRecord: getRecordFromImage,
    convert: convertImageFormat,
    crop: cropImage
};

// -----------------------------------------------------
//  Record
// -----------------------------------------------------

function getRecordFromImage(img) {
    
    let record = {};
    record["@type"] = _getRecordTypeFromFile(file);
    record.contentSize = file.size;
    record.dateModified = file.lastModifiedDate;
    record.encodingFormat = file.type;
    record.name = file.type;
    record.width = {
        "@type": "QuantitativeValue",
        "value": img.width,
        "unitCode" : "PX",
        "unitText": "pixels"
    }
    record.height = {
        "@type": "QuantitativeValue",
        "value": img.height,
        "unitCode" : "PX",
        "unitText": "pixels"
    }

    return record;
}

// -----------------------------------------------------
//  Get image 
// -----------------------------------------------------


async function getImageObjectFromUrl(imageUrl) {

    return new Promise((resolve, reject) => {
        const img = new Image();

        img.onload = () => {
            resolve(img);
        };

        img.onerror = () => {
            reject(new Error('Image failed to load'));
        };

        img.src = imageUrl;
    });
}


// -----------------------------------------------------
//  Image manipulation
// -----------------------------------------------------
async function resizeImage(image, width, height) {
  // Create a canvas element
  const canvas = document.createElement('canvas');
  canvas.width = width;
  canvas.height = height;

  // Draw the image on the canvas at the new size
  const ctx = canvas.getContext('2d');
  ctx.drawImage(image, 0, 0, width, height);

  // Convert the canvas to a Blob (asynchronous operation)
  const blob = await new Promise((resolve) => {
    canvas.toBlob(resolve, 'image/jpeg');
  });

  // Convert the Blob to an Image object
  const newImage = new Image();
  const imageUrl = URL.createObjectURL(blob);
  newImage.src = imageUrl;

  // Return a promise that resolves when the image is loaded
  return new Promise((resolve) => {
    newImage.onload = () => {
      resolve(newImage);
    };
  });
}

async function convertImageFormat(imageSrc, format = 'jpeg', quality = 0.92) {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.crossOrigin = "Anonymous"; // Prevent CORS issues for external images
    img.src = imageSrc;

    img.onload = () => {
      const canvas = document.createElement('canvas');
      const ctx = canvas.getContext('2d');

      // Set canvas size to the size of the loaded image
      canvas.width = img.width;
      canvas.height = img.height;

      // Draw the image onto the canvas
      ctx.drawImage(img, 0, 0);

      // Convert the canvas image to the desired format
      try {
        const convertedImage = canvas.toDataURL(`image/${format}`, quality);
        resolve(convertedImage);
      } catch (error) {
        reject(`Error converting image: ${error.message}`);
      }
    };

    img.onerror = (err) => reject(`Failed to load image: ${err}`);
  });
}


async function cropImage(imageSrc, cropX, cropY, cropWidth, cropHeight, outputFormat = 'jpeg', quality = 0.92) {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.crossOrigin = "Anonymous"; // Handle CORS for external images
    img.src = imageSrc;

    img.onload = () => {
      const canvas = document.createElement('canvas');
      const ctx = canvas.getContext('2d');

      // Set canvas size to the crop dimensions
      canvas.width = cropWidth;
      canvas.height = cropHeight;

      // Draw the cropped portion of the image onto the canvas
      ctx.drawImage(img, cropX, cropY, cropWidth, cropHeight, 0, 0, cropWidth, cropHeight);

      // Convert canvas to the specified format (jpeg/png) and quality
      canvas.toBlob((blob) => {
        if (blob) {
          const croppedImage = new File([blob], `cropped-image.${outputFormat}`, { type: `image/${outputFormat}` });
          resolve(croppedImage);
        } else {
          reject(new Error('Failed to create Blob from canvas'));
        }
      }, `image/${outputFormat}`, quality);
    };

    img.onerror = (err) => reject(new Error(`Failed to load image: ${err}`));
  });
}

