import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import io from "socket.io-client";

const socket = io();

function EmailRenderer({ html }) {
  const location = useLocation();
  useEffect(() => {
    console.log("html", socket);
    socket.emit("htmlEmail:post", { color: "green", width: "100%" });
  }, [location]);
  return (
    <>
      <div dangerouslySetInnerHTML={{ __html: html }}></div>
    </>
  );
}
export default EmailRenderer;
