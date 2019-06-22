window.onload = (e) => {
    liff.init( (data) => {
        initializeApp(data);
    });
};

function initializeApp(data) {
    // sendMessages call
    document.getElementById('sendmessagebutton').addEventListener('click', function () {
        const textMessage = document.getElementById('timestamp').value + ':' + document.getElementById('body').value;
        liff.sendMessages([{
            type: 'text',
            text: textMessage
        }]).then( () => {
            liff.closeWindow();
        }).catch(function () {
            window.alert("呟いたよ");
        });
    });
}