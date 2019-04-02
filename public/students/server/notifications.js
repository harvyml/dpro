var user = {}
getUser()
function getUser(){
    firebase.auth().onAuthStateChanged(firebaseUser => {
        if(firebaseUser){
            user = firebaseUser
            console.log(user, user.uid)
            //===========================================
            const messaging = firebase.messaging()
            messaging.requestPermission()
            .then(function() {
                console.log("Have permission")
                return messaging.getToken()
                .then(function(token){
                    console.log(token)
                    let data = token
                    
                    sendTokenToServer(user.uid, token)
                })
                .catch(e => console.log(e.message + "Something went wrong"))
            })
            .catch(function(err){
                console.log(err.message, "error occured")
            })

            function sendTokenToServer(uid, refreshedToken){
                let data = {
                        token: refreshedToken
                    }
                firebase.database().ref(`la-presentacion-el-paraiso/users/${user.uid}/info`).update(data)
                .then(() => M.toast({html: "alright", displayLength: 3000, classes: "green"}))
                .catch(() => M.toast({html: "Error", displayLength: 3000, classes: "red"}))
            }
            // Callback fired if Instance ID token is updated.
            messaging.onTokenRefresh(function() {
                messaging.getToken()
                .then(function(refreshedToken) {
                console.log('Token refreshed.');
                // Indicate that the new Instance ID token has not yet been sent to the
                // Send Instance ID token to app server.
                sendTokenToServer(refreshedToken);
                // ...
                })
                .catch(function(err) {
                console.log('Unable to retrieve refreshed token ', err);
                showToken('Unable to retrieve refreshed token ', err);
                });
            });

            messaging.onMessage(function(payload){
                console.log('onMessage', payload)
            })
//=======================================
        }else{
            user = "nothing"
        }
    })
}