import React from "react";
import { List, Icon } from "semantic-ui-react";
import { useRouter } from "next/router";
import { logoutUser } from "../../utils/authUser";

function SideMenu({ user: { unreadNotification, email, unreadMessage, username } }) {
  const router = useRouter();

  const isActive = route => router.pathname === route;

  return (
    <>
      <List
        style={{ paddingTop: "1rem" }}
        size="big"
        verticalAlign="middle"
        selection>
          <List.Item active={isActive("/")} href='/'>
            <Icon name="home" size="large" color={isActive("/") && "teal"} />
            <List.Content>
              <List.Header content="Home" />
            </List.Content>
          </List.Item>
        <br /> 

          <List.Item active={isActive("/messages")} href="/messages">
            <Icon
              name={unreadMessage ? "hand point right" : "mail outline"}
              size="large"
              color={
                (isActive("/messages") && "teal") || (unreadMessage && "orange")
              }
            />
            <List.Content>
              <List.Header content="Messages" />
            </List.Content>
          </List.Item>
        <br /> 

          <List.Item active={isActive("/notifications")} href="/notifications">
            <Icon
              name={unreadNotification ? "hand point right" : "bell outline"}
              size="large"
              color={
                (isActive("/notifications") && "teal") ||
                (unreadNotification && "orange")
              }
            />
            <List.Content>
              <List.Header content="Notifications" />
            </List.Content>
          </List.Item>
        <br /> 


          <List.Item active={router.query.username === username} href= {`/${username}`}>
            <Icon
              name="user"
              size="large"
              color={router.query.username === username && "teal"}
            />
            <List.Content>
              <List.Header content="Account" />
            </List.Content>
          </List.Item>
        <br />

        <List.Item onClick={() => logoutUser(email)}>
          <Icon name="log out" size="large" />
          <List.Content>
            <List.Header content="Logout" />
          </List.Content>
        </List.Item>
      </List>
    </>
  );
}

export default SideMenu;