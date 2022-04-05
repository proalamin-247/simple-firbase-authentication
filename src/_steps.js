/*
*Steps to use Firebase*
1. creat a project on condole.firebase.google.com
2. install firebase
3. resister web app in firebase
4. copy firebase init with confiq from firebase projects setting into a file firebase.init.js
5. export default app firebase.init.js
6. import getAuth from firebase/auth and create auth = getAuth(app) in app.js
7. import firebase init.js into your app.js
8. turn on google authentication (firebase > authentication > enable google sign in)
9. create google provider
10. use SignInWithPopup and pass auth and provide
11. handle .then(If successful) and catch error (if error)

*/