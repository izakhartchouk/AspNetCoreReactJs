import React, { useState, useContext } from 'react';
import { observer } from 'mobx-react-lite';
import { Tab, Grid, Header, Button } from 'semantic-ui-react';
import { RootStoreContext } from '../../app/stores/RootStore';
import ProfileEditForm from './ProfileEditForm';

const ProfileDescription = () => {
    const rootStore = useContext(RootStoreContext);
    const { profile, isCurrentUser, editProfile } = rootStore.profileStore;

    const [isEditMode, setEditMode] = useState(false);

    return (
        <Tab.Pane>
            <Grid>
                <Grid.Column width={16}>
                    <Header floated='left' icon='user' content={`About ${profile?.displayName}`} />

                    {isCurrentUser && (
                        <Button
                            floated='right'
                            basic
                            content={isEditMode ? 'Cancel' : 'Edit Profile'}
                            onClick={() => setEditMode(!isEditMode)}
                        />
                    )}
                </Grid.Column>
                <Grid.Column width={16}>
                    {isEditMode ? (
                        <ProfileEditForm editProfile={editProfile} profile={profile!} />
                    ) : (
                        <span>{profile!.bio}</span>
                    )}
                </Grid.Column>
            </Grid>
        </Tab.Pane>
    );
};

export default observer(ProfileDescription);
