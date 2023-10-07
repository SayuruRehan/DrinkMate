chrome.alarms.onAlarm.addListener(
    () => {
        chrome.notifications.create(
            // "drink_water",
            {
                type: "basic",
                iconUrl: "images/icon.png",
                title: "Stay Hydrated",
                message: "How 'bout a cup of water human!?",
                silent: false
            },
            () => { }
        )
    },
)

chrome.runtime.onMessage.addListener(
    function (request, sender, sendResponse) {
        console.log(request);
        if (request.time)
            createAlarm();

        sendResponse(() => {
            return false
        });
    }
);

function createAlarm() {
    chrome.alarms.create(
        "drink_water",
        {
            delayInMinutes: 1,
            periodInMinutes: 60
        }
    );
}