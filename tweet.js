window.onload = (e) => {
    liff.init( (data) => {
        initializeApp(data);
    });
};

function initializeApp(data) {
    // sendMessages call
    document.getElementById('sendmessagebutton').addEventListener('click', function () {
        const textMessage = document.getElementById('timestamp').value + ':' + document.getElementById('body').value;
        if (textMessage.length > 1) {
            liff.sendMessages([{
                type: 'text',
                text: textMessage
            }]).then( () => {
                liff.closeWindow();
            }).catch( () => {
                window.alert("多分うまく送信できてないかも。。。");
            });
        }
    });
}