import React from 'react';
import { Tab } from 'semantic-ui-react';
import ProfilePhotos from './ProfilePhotos';
import ProfileDescription from './ProfileDescription';

const panes = [
    { menuItem: 'About', render: () => <ProfileDescription /> },
    { menuItem: 'Photos', render: () => <ProfilePhotos /> },
    { menuItem: 'Activities', render: () => <Tab.Pane>About Activities Content</Tab.Pane> },
    { menuItem: 'Followers', render: () => <Tab.Pane>About Followers Content</Tab.Pane> },
    { menuItem: 'Following', render: () => <Tab.Pane>About Following Content</Tab.Pane> }
];

const ProfileContent = () => {
    return (
        <Tab
            menu={{ fluid: true, vertical: true }}
            menuPosition='right'
            panes={panes}
            defaultActiveIndex={1}
        />
    );
};

export default ProfileContent;
