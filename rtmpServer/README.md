# Creating a RTMP server:

A Node.js implementation of the RTMP server
[documentation](https://github.com/illuspas/Node-Media-Server)

- Using a Single Core mode instead of Multicore cluster mode, because I am not expecting a lot of traffic on the

steps to creates server:-

- npm install --save node-media-server
- create index.js
- copy code from single core mode inside documentation
- modify script inside package.json from test to start script

To start server:

- npm start
