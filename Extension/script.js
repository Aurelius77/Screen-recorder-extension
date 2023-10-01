


document.addEventListener("DOMContentLoaded", () => {
    const startButton = document.querySelector(".start")
    const stopButton = document.querySelector(".stop")

    startButton.addEventListener("click", () => {
        chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
            chrome.tabs.sendMessage(tabs[0].id, { action: "begin_recording" }, function (response) {
                if (!chrome.runtime.lastError) {
                    console.log(response)
                } else {
                    console.log(chrome.runtime.lastError, 'error line 14')
                }
            })
        })
    })


    stopButton.addEventListener("click", () => {
        chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
            chrome.tabs.sendMessage(tabs[0].id, { action: "stop_recording" }, function (response) {
                if (!chrome.runtime.lastError) {
                    console.log(response)
                } else {
                    console.log(chrome.runtime.lastError, 'error line 27')
                }
            })
        })
    })
})