const functions = require('firebase-functions');
const admin = require('firebase-admin');
admin.initializeApp(functions.config().firebase);

// Create and Deploy Your First Cloud Functions
// https://firebase.google.com/docs/functions/write-firebase-functions

// exports.helloWorld = functions.https.onRequest((request, response) => {
//  response.send("Hello from Firebase new!");
//  console.log("cassava testing this shit");
// });

// exports.sanitizePost = functions.database.ref('/publicChats/{pushId}')
// .onWrite(event=>{
//     const post = event.data.val();
//     if(post.sanitized){
//        return;
//     }
//     console.log("Sanitizing new post " + event.params.pushId);
//     console.log(post);
//     post.sanitized = true;
//     post.chatText = "swango";
//     return event.data.ref.set(post);
    
// });


exports.addUserMessages = functions.database.ref(`/messages/{messageId}`)
.onWrite(event=> {
      
    const messageKey = event.data.key;
    const messageValue = event.data.val();

    console.log(messageKey);
    console.log(messageValue);

    admin.database().ref(`/user-messages/${messageValue.userFromId}/${messageValue.userToId}`)
    .child(messageKey).set(1);
      admin.database().ref(`/user-messages/${messageValue.userToId}/${messageValue.userFromId}`)
    .child(messageKey).set(1);

});
