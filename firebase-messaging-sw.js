importScripts('https://www.gstatic.com/firebasejs/9.23.0/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/9.23.0/firebase-messaging-compat.js');

firebase.initializeApp({
  apiKey: "AIzaSyBcjUd8QWtjYyB2o4mQRcB7e17mmaa8CmM",
  authDomain: "buurtbord-18966.firebaseapp.com",
  projectId: "buurtbord-18966",
  storageBucket: "buurtbord-18966.firebasestorage.app",
  messagingSenderId: "157567031537",
  appId: "1:157567031537:web:b527d54ce7b84687a53150"
});

const messaging = firebase.messaging();

messaging.onBackgroundMessage((payload) => {
  console.log('Achtergrond bericht ontvangen:', payload);
  const notificationTitle = payload.notification?.title || 'Het Buurtbord';
  const notificationOptions = {
    body: payload.notification?.body || 'Je hebt interesse!'
  };
  self.registration.showNotification(notificationTitle, notificationOptions);
});
