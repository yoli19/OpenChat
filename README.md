# OpenChat
### Installation

1. Clone the repository and install dependencies:
    ```bash
    git clone https://github.com/yoli19/OpenChat.git
    cd OpenChat
    npm install
    ```

2. Configure Firebase and MongoDB:
   - Create a Firebase project and add a web app.
   - Create a `.env.local` file with your Firebase and MongoDB configuration:
     ```
     NEXT_PUBLIC_FIREBASE_API_KEY=YOUR_API_KEY
     NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=YOUR_AUTH_DOMAIN
     NEXT_PUBLIC_FIREBASE_PROJECT_ID=YOUR_PROJECT_ID
     NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=YOUR_STORAGE_BUCKET
     NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=YOUR_MESSAGING_SENDER_ID
     NEXT_PUBLIC_FIREBASE_APP_ID=YOUR_APP_ID
     NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID=YOUR_MEASUREMENT_ID
     MONGODB_URI=mongodb://localhost:27017/openchat
     ```

3. Start the development server:
    ```bash
    npm run dev
    ```

4. Open `http://localhost:3000` in your browser.
