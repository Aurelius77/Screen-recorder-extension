

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

        const formdata = new FormData()
        formdata.append('file', recordedBlob, 'screen-recording.webm')
        const apiUrl = 'https://chrome-extension-iq7f.onrender.com/upload'

        console.log(formdata)
        fetch(apiUrl, {
            method: 'POST',
            body: formdata,
        })
            .then((response) => {
                if (!response.ok) {
                    throw new Error('File upload failed');
                }
                return response.json();
            })
            .then((data) => {
                console.log('File uploaded successfully:', data);
            })
            .catch((error) => {
                console.error('Error:', error);
            });


        document.body.removeChild(a);


        URL.revokeObjectURL(url);
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
