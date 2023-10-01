

var record = null
function onRecordingStart(stream) {
    record = new MediaRecorder(stream);

    record.start();

    record.onstop = function () {
        stream.getTracks().forEach(function (track) {
            if (track.readyState === "live") {
                track.stop()
            }
        })
    }

    record.ondataavailable = function (event) {
        let recordedBlob = event.data;
        let url = URL.createObjectURL(recordedBlob);

        let a = document.createElement("a");

        a.style.display = "none";
        a.href = url;
        a.download = "screen-recording.webm"

        document.body.appendChild(a);
        a.click();

        document.body.removeChild(a);

        URL.revokeObjectURL(url);
        window.location.href = "https://www.google.com"
    }
}


chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {

    if (message.action === "begin_recording") {
        console.log("recording started")

        sendResponse(`processed: ${message.action}`);

        navigator.mediaDevices.getDisplayMedia({
            audio: true,
            video: {
                width: 9999999,
                height: 9999999,
            }
        }).then((stream) => {
            onRecordingStart(stream)
        })
    }

    if (message.action === "stop_recording") {
        console.log("recording stopped");
        sendResponse(`processed: ${message.action}`);
        if (!record) return console.log("no recorder")

        record.stop();


    }

})