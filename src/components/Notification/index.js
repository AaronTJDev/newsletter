import React, { useContext } from "react";
import NotifyContext from '../../context/NotifyContext';
import "./notification.css";

export default function Notification() {
  const notifyContext = useContext(NotifyContext);
  return (
    <div
      id="notify"
    >
      {notifyContext.message}
    </div>
  );
}
