# Video Streaming app

> A twitch like web app using RTMP server along with Web server to stream video and display relevant information

## App Flow explained

- Application uses OBS(open broadcaster software OR any other software can be used) to feed video to the RTMP server for streaming video.
- RTMP server is only for video streaming. Therefore a Web server is used to show list of streams available and their information
- Client will able to select a stream from a list of streams inside the Web server which will essentially make a request to the RTMP server to get the live video feed from the desktop
- Client can perform CRUD operation on the stream created by the client

## Technical Details

- This is Single Page application

  > Single Page app to offer web app that is fast, responsive and provides caching abilities

- Application is made using **React and Redux**

  > Redux as a Centralized State Management system for making predictable state updates and consistent app behavior

- **Redux-thunk as middleware** to make async network request
- **React-router** is used for Navigation inside the application
- **OAuth based Authentication** is implemented for Login and Logout purposes using Google API
- **Redux-form** is used and front-end form validation is performed
- The Web Server Used is a JSON API server which adheres to **REST conventions**
- **Semantic UI** is for styling of the application

NOTE: Additional Details on [JSON Web server](https://github.com/abhishekmodi6020/Streaming-App/tree/master/api) and [RTMP server](https://github.com/abhishekmodi6020/Streaming-App/tree/master/rtmpServer) are mentioned in the readme inside their respective directory
