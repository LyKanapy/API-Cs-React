import { observer } from "mobx-react-lite";
import React from "react";
import { Link } from "react-router-dom";
import { Card, CardContent, CardDescription, Icon, Image } from "semantic-ui-react";
import { Profile } from "../../app/models/profile";

interface Props {
    profile: Profile;
}

export default observer (function ProfileCard ({profile}:Props) {
    return(
        <Card as={Link} to = {`/profiles/${profile.username}`}>
            <Image src = {profile.image || '/assets/user.png'}/>
            <CardContent>
                <Card.Header>{profile.displayName}</Card.Header>
                <CardDescription>Bio goes here</CardDescription>
            </CardContent>
            <CardContent extra>
                <Icon name='user'/>
                20 followers
            </CardContent>
        </Card>
    )
})