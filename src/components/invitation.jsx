import React from "react";
import { Segment, Header } from "semantic-ui-react";
import JoinButton from "./joinGroupButton";

const Invitation = ({ name, teamLeader, groupId, description }) => (
  <Segment textAlign='center' padded="very">
    <Header> {teamLeader.name} has invited you to join their group! </Header>
    Group Name: {name}
    <br/>
    Group Id: {groupId}
    <br/>
    Description: {description}
    <br/>
    <JoinButton />
  </Segment>
);

export default Invitation;
