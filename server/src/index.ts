import express from 'express';
import { graphqlHTTP } from 'express-graphql';
import { createConnection } from 'typeorm';
import schema from './Schema';
import { Users } from './Entities/Users';

const app = express();
app.use(express.json());
app.use('/graphql', graphqlHTTP({
    schema,
    graphiql: true
}))
const server = require('http').createServer(app);
const io = require('socket.io')(server, { cors: { origin: "*" }});

const PORT = 3001;

const main = async () => {

    await createConnection({
        type: "mysql",
        host: "localhost",
        port: 3306,
        database: 'Chat App',
        username: "root",
        password: "born1968",
        logging: true,
        synchronize: false,
        entities: [Users],
    })

    io.on("connection", (socket: any) => {
        console.log(socket.id);
      
        socket.on("join_room", (data: any) => {
          socket.join(data);
          console.log("User Joined Room: " + data);
        });
      
        socket.on("send_message", (data: any) => {
          console.log(data);
          socket.to(data.room).emit("receive_message", data.content);
        });
      
        socket.on("disconnect", () => {
          console.log("USER DISCONNECTED");
        });
      });
      
      server.listen(PORT, () => {
          console.log("Server Running on Port 3001...");
        });
}

main().catch((e) => console.error(e));