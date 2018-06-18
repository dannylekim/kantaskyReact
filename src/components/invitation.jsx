import React from "react";
import { Segment, Header } from "semantic-ui-react";
import JoinButton from "./joinGroupButton";
import DeclineInviteButton from "./declineInviteButton";

const Invitation = ({ name, teamLeader, groupId, description }) => (
  <Segment textAlign="center" padded="very" color="green">
    <span
      style={{
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
        height: "25em"
      }}
    >
      <Header> {teamLeader.name} has invited you to join their group! </Header>
      Group Name: {name}
      <br />
      Group Id: {groupId}
      <br />
      Description: {description}
      <br />
      <span>
        <JoinButton groupId={groupId} />
        <DeclineInviteButton groupId={groupId} />
      </span>
    </span>
  </Segment>
);

export default Invitation;
