import email from "../emails";

export default function ioSocket(io, socket) {
  console.info(`connect: ${socket.id}`);
  socket.emit("layout:get", {
    links: ["/", "order-confirmed", "welcome-email", "shipping-order"],
  });

  socket.emit("htmlEmail:get", {
    msg: "email here",
    htmlEmail: email({ color: "red", width: 500 }).toString(),
  });

  socket.on("disconnect", () => {
    console.log(`disconnect: ${socket.id}`);
  });

  socket.on("htmlEmail:post", (data) => {
    io.emit("htmlEmail:get", {
      msg: "email here",
      htmlEmail: email(data).toString(),
    });
  });
}
