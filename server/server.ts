import app from "./express";
import config from "../config/config";
import http from "http";
import { Server } from "socket.io";
import ioSocket from "./socket";

const server = http.createServer(app);
const io = new Server(server);

main();

async function main() {
  try {
    io.on("connection", (socket) => ioSocket(io, socket));

    await server.listen(config.port, () => {
      console.log("Server is listening on PORT:", config.port);
    });
  } catch (error) {
    console.log("Error Mongoose Connection:", error);
  }
}
