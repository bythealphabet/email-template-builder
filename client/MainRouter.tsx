import React, { useEffect, useState } from "react";
import { Routes, Route, NavLink } from "react-router-dom";
import EmailRenderer from "./containers/core/emailRenderer";
import io from "socket.io-client";

const socket = io();

function MainRouter() {
  const [html, setHtml] = useState("");
  const [isConnected, setIsConnected] = useState(socket.connected);
  const [links, setLinks] = useState([]);

  useEffect(() => {
    init();
    return () => {
      socket.off("connect");
      socket.off("disconnect");
      socket.off("layout:get");
    };
  }, []);

  async function init() {
    socket.on("connect", () => {
      setIsConnected(true);
    });

    socket.on("disconnect", () => {
      setIsConnected(false);
    });

    socket.on("layout:get", async (data) => {
      setLinks(await data.links);
    });

    socket.on("htmlEmail:get", (data) => {
      console.log("datqa", data);
      setHtml(data.htmlEmail);
    });
  }

  return (
    <div>
      <header>
        <h1>Links</h1>
        {links.map((link) => {
          return (
            <NavLink key={link} to={link}>
              {link}
            </NavLink>
          );
        })}
      </header>
      <Routes>
        {links.map((link) => {
          console.log("link", link);
          return (
            <Route
              key={link}
              path={link}
              element={<EmailRenderer html={html} socket={socket} />}
            />
          );
        })}
      </Routes>
    </div>
  );
}
export default MainRouter;
