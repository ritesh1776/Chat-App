# Converse-Crew - Chatting App

**Converse-Crew** is a feature-rich chatting application that allows users to communicate in real-time with secure authentication and authorization mechanisms. This app supports both individual and group chats, making it versatile for various communication needs.

# Want to see live preview [click here](https://master--phenomenal-mermaid-68247f.netlify.app/) 

## Features

- **User Authentication and Authorization**: Secure user registration, login, and access control are implemented using JSON Web Tokens (JWT).
- **Real-Time Communication**: Users can chat in real-time with the help of Socket.io, which also supports typing indicators to enhance the chat experience.
- **User Search**: Easily search for other users within the app.
- **Group Chat**: Create and manage group chats where users can be added or removed by the Admin.

## Technologies Used

- **Frontend**: React.js
- **Backend**: Node.js, Express.js
- **Database**: MongoDB
- **Real-Time Communication**: Socket.io
- **Authentication**: JSON Web Tokens (JWT)

## Installation

To run this project locally, follow these steps:

1. **Clone the repository:**

    ```bash
    git clone https://github.com/ritesh1776/Converse-Crew.git
    cd Converse-Crew
    ```

2. **Install dependencies:**

    ```bash
    npm install
    cd client
    npm install
    ```

3. **Set up environment variables:**

    Create a `.env` file in the root directory and add the necessary environment variables:

    ```bash
    PORT=5000
    MONGO_URI=your_mongo_uri
    JWT_SECRET=your_jwt_secret
    ```

4. **Run the application:**

    ```bash
    npm run dev
    ```

    The app will start on `http://localhost:3000`.

## Usage

- **Register/Login:** Users can register and log in to the app securely.
- **Search Users:** Use the search feature to find other users.
- **Start Chatting:** Send messages in real-time, either in individual chats or group chats.
- **Manage Groups:** Admins can add or remove users from group chats.

## Demo


- **SignUp Screen:**
![image](https://github.com/user-attachments/assets/377dcfa8-09a4-4f6e-80da-1e3ec552a302)

- **Login Screen:**
 ![image](https://github.com/user-attachments/assets/8c9e999a-cafe-4789-afd9-97396754b49f)


- **Chat Interface:**
  ![image](https://github.com/user-attachments/assets/1fa44508-c294-4a1a-a6e8-4d95aad82a60)

  
- **One to One Chat:**
  ![image](https://github.com/user-attachments/assets/a29f9b72-eb42-4080-8509-28df73fd654e)


- **Search Users:**
  ![image](https://github.com/user-attachments/assets/e5259e3c-76c6-4f18-8feb-4c3c27de84e0)

- **Group Chat Creation:**
  ![image](https://github.com/user-attachments/assets/2e10a015-3ec4-484d-bc26-33b693a2605f)

- **Add or Remove Users:**
![image](https://github.com/user-attachments/assets/3e4a8ff7-9f06-4fe4-a349-0076056f43d9)

- **View User Profile:**
![image](https://github.com/user-attachments/assets/c8b93b37-259d-4eee-9ba9-8793b759ceb3)


## Contributing

Contributions are welcome! Please fork this repository and submit a pull request with your enhancements.

## Contact

For any questions or suggestions, feel free to reach out.


©2024 RITESH
