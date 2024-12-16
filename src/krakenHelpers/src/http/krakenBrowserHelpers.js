


export const krakenBrowserHelpers = {
    sendData: sendData,
}


function sendData(record) {
    /**
     * @type {string}
     *
     */

    console.log("sendData start");
    console.log(record);

    const data = JSON.stringify(record);

    navigator.sendBeacon(apiUrl, data);

    console.log("sendData end");
}