# NextJS Messenger Clone

[<img src="https://github.com/shivam-kumar-shah/nextjs-chat-app/assets/98466713/2276a818-915c-4e60-b787-fe51f8b13a1d" alt="NextJs Messenger Clone Preview">](https://nextjs-chat-app-six.vercel.app/)

A real-time messaging application built with Next.js and TypeScript, inspired by Meta Messenger. This application leverages several modern technologies to provide users with a seamless messaging experience.

## Features

* **Real-time Messaging**: Engage in real-time chat conversations with your friends and colleagues.

* **Read Receipts**: Know when your messages have been read by the recipient.

* **Online Notification**: Get notified when your friends are online and available for a chat.

* **Media Upload**: Share images and other media files seamlessly using Cloudinary.

* **Authentication and Authorization**: Secure your app with NextAuth for user authentication and authorization.

* **Stunning UI**: Utilizes Tailwind CSS and its component library to ensure an attractive and responsive user interface.

## Tech Stack

* **Next.js**: A React framework for building server-rendered web applications.

* **TypeScript**: Adds static typing to JavaScript for better code quality.

* **Prisma**: An ORM (Object-Relational Mapping) tool to work with databases.

* **NextAuth**: Provides authentication and authorization capabilities.

* **Socket_io**: Enables real-time, bidirectional communication between clients and the server.

* **Cloudinary**: Cloud-based media management for image and video upload.

* **Tailwind CSS**: A utility-first CSS framework for rapid UI development.

## Getting Started

Follow these steps to set up and run the Meta Messenger Clone on your local machine.

1. Clone the repository:

   

```bash
   git clone https://github.com/shivam-kumar-shah/nextjs-chat-app
```

2. Install Dependencies:    

```bash
    cd nextjs-messenger-clone
    npm install
```

3. Configure enviroment variables:

```bash
    #DB URL PRISMA
    DATABASE_URL=
    #NEXTAUTH_SECRET
    NEXTAUTH_SECRET =
    #GITHUB_ID for github OAuth 
    GITHUB_ID = 
    #GITHUB OAuth Secret
    GITHUB_SECRET=
    #Google OAuth2.0 ID
    GOOGLE_CLIENT_ID =
    #Google OAuth2.0 SECRET
    GOOGLE_CLIENT_SECRET =
    #CLODINARY PUBLIC SERVER NAME
    NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME=
    #Pusher Service KEY
    NEXT_PUBLIC_PUSHER_APP_KEY=
    #Pusher APP ID
    PUSHER_APP_ID=
    #Pusher SECRET
    PUSHER_SECRET=
```

3. Setup prisma client files
 

```bash
     npx prisma migrate dev
 ```

4. Start the development Server
 

```bash
     npm run dev
 ```

## Usage

* **Authentication**: Sign up and log in to your account to start using the messenger.

* **Chat**: Create or join chat rooms, send messages, and enjoy real-time conversations.

* **Media Upload**: Click on the media upload button to send images and other media files.

* **Read Receipts**: Observe read receipts as your messages are read by recipients.

* **Online Notification**: See when your friends are online and ready to chat.

## Deployment

To deploy your Meta Messenger Clone application, you can use platforms like Vercel, Netlify, or deploy it on your own server.

Deployment link - https://nextjs-chat-app-six.vercel.app/

## Contributing

We welcome contributions from the community. Please follow our contribution guidelines to get started.

## Acknowledgments

Special thanks to the developers of the technologies used in this project, as well as the open-source community for their invaluable contributions.

## Contact

If you have any questions or suggestions, feel free to reach out to us at shivam-kumar-shah@outlook.com

Happy chatting! 🚀

 
