# OpenChat
### Installation

1. Clone the repository and install dependencies:
    ```bash
    git clone https://github.com/yoli19/OpenChat.git
    cd OpenChat
    npm install mongodb firebase mongoose
    ```

2. Configure Firebase and MongoDB:
   - Create a Firebase project and add a web app.
   - After connecting to mongodb, Create a database named openchat. 
   - Create a `.env.local` file with your Firebase and MongoDB configuration:
     ```
     NEXT_PUBLIC_FIREBASE_API_KEY=AIzaSyDIr8HQfbIls-wjnP3Lwg-rkQZ3kzFmg4E
     NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=open-chat-1f4f3.firebaseapp.com
     NEXT_PUBLIC_FIREBASE_PROJECT_ID=open-chat-1f4f3
     NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=open-chat-1f4f3.appspot.com
     NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=828537945796
     NEXT_PUBLIC_FIREBASE_APP_ID=1:828537945796:web:830b142476c296eb305391
     NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID=YG-PL72HYGVW1
     MONGODB_URI=mongodb://localhost:27017/openchat
     ```

3. Start the development server:
    ```bash
    npm run dev
    ```

4. Open `http://localhost:3000` in your browser.

