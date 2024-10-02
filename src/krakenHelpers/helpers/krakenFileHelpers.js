import { krakenHelpersLight as h} from '../krakenHelpersLight.js'

export const krakenFileHelpers = {
    getPreview: getPreviewElementFromFile,
    getRecord: getRecordFromFile,
};

// -----------------------------------------------------
//  Record
// -----------------------------------------------------

async function getRecordFromFile(file) {
    console.log("--- width", file.width);
    let record = {};
    record["@type"] = _getRecordTypeFromFile(file);
    record.contentSize = file.size;
    record.dateModified = file.lastModifiedDate;
    record.encodingFormat = file.type;
    record.name = file.type;

    return record;
}

function _getRecordTypeFromFile(file) {
    let record_type = null;
    if (file.type.startsWith("image/")) {
        record_type = "ImageObject";
    } else if (file.type.startsWith("video/")) {
        record_type = "VideoObject";
    } else if (file.type.startsWith("audio/")) {
        fileType = "AudioObject";
    } else if (file.type.startsWith("application/")) {
        record_type = "SoftwareApplication";
    } else if (file.type.startsWith("text/")) {
        record_type = "DigitalDocument";
    }
    return record_type;
}

// -----------------------------------------------------
//  Elements
// -----------------------------------------------------

async function getPreviewElementFromFile(file) {
    /**
     * Given a file object, returns an element with preview of the file
     */

    let previewContainer = document.createElement("span");

    if (file) {
        const reader = new FileReader(); // Create a FileReader
        const fileType = file.type;

        // Image file
        if (fileType.startsWith("image/")) {
            reader.onload = function (e) {
                const img = document.createElement("img");
                img.src = e.target.result;
                img.style.maxWidth = "300px";
                img.style.maxHeight = "300px";
                previewContainer.appendChild(img);
            };
            reader.readAsDataURL(file);
        }
        // Text file
        else if (fileType.startsWith("text/")) {
            reader.onload = function (e) {
                const text = document.createElement("pre");
                text.textContent = e.target.result;
                previewContainer.appendChild(text);
            };
            reader.readAsText(file);
        }
        // Video file
        else if (fileType.startsWith("video/")) {
            reader.onload = function (e) {
                const video = document.createElement("video");
                video.src = e.target.result;
                video.controls = true;
                video.style.maxWidth = "300px";
                video.style.maxHeight = "300px";
                previewContainer.appendChild(video);
            };
            reader.readAsDataURL(file);
        }
        // Audio file
        else if (fileType.startsWith("audio/")) {
            reader.onload = function (e) {
                const audio = document.createElement("audio");
                audio.src = e.target.result;
                audio.controls = true;
                previewContainer.appendChild(audio);
            };
            reader.readAsDataURL(file);
        }
        // PDF file
        else if (fileType === "application/pdf") {
            reader.onload = function (e) {
                const object = document.createElement("object");
                object.data = e.target.result;
                object.type = "application/pdf";
                object.style.width = "100%";
                object.style.height = "500px";
                previewContainer.appendChild(object);
            };
            reader.readAsDataURL(file);
        }
        // Other file types
        else {
            previewContainer.textContent =
                "File type not supported for preview.";
        }
    }
    return previewContainer;
}
