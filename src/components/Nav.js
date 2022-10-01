import React from "react";
import {
  NovuProvider,
  PopoverNotificationCenter,
  NotificationBell,
} from "@novu/notification-center";
import { useNavigate } from "react-router-dom";
const Nav = () => {
  const navigate = useNavigate();
  const onNotificationClick = (notification) =>
    navigate(notification.cta.data.url);
  return (
    <nav className="navbar">
      <h3>Team's todo list</h3>
      <div>
        <NovuProvider subscriberId="123" applicationIdentifier="456">
          <PopoverNotificationCenter
            onNotificationClick={onNotificationClick}
            colorScheme="light"
          >
            {({ unseenCount }) => (
              <NotificationBell unseenCount={unseenCount} />
            )}
          </PopoverNotificationCenter>
        </NovuProvider>
      </div>
    </nav>
  );
};
export default Nav;
