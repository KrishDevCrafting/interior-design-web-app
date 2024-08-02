// src/components/NotificationInbox.js
import React, { useEffect } from "react";
import suprSendConfig from "./uprsendConfig";

const NotificationInbox = () => {
  useEffect(() => {
    // Initialize the inbox on component mount
    suprSendConfig.initializeInbox();
  }, []);

  return (
    <div id="suprsend-inbox">{/* SuprSend Inbox will be rendered here */}</div>
  );
};

export default NotificationInbox;
