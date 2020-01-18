import React from 'react';
import { observer } from 'mobx-react-lite';
import { Button, Form } from 'semantic-ui-react';
import { Form as FinalForm, Field } from 'react-final-form';
import TextInput from '../../app/common/form/TextInput';
import TextAreaInput from '../../app/common/form/TextAreaInput';
import { combineValidators, isRequired, composeValidators, hasLengthBetween } from 'revalidate';
import { IProfile } from '../../app/models/profile';

const validate = combineValidators({
    displayName: isRequired({ message: 'The Display Name cannot be empty' }),
    bio: composeValidators(
        hasLengthBetween(0, 512)({ message: 'Biography should to be less than 512 characters' })
    )()
});

interface IProps {
    editProfile: (profile: IProfile) => void;
    profile: IProfile;
}

const ProfileEditForm: React.FC<IProps> = ({ editProfile, profile }) => {
    return (
        <FinalForm
            onSubmit={editProfile}
            validate={validate}
            initialValues={profile!}
            render={({ handleSubmit, invalid, pristine, submitting }) => (
                <Form onSubmit={handleSubmit} error>
                    <Field
                        name='displayName'
                        placeholder='Display Name'
                        value={profile?.displayName}
                        component={TextInput}
                    />
                    <Field
                        name='bio'
                        rows={3}
                        placeholder='Bio'
                        value={profile?.bio}
                        component={TextAreaInput}
                    />
                    <Button
                        loading={submitting}
                        disabled={pristine || invalid}
                        floated='right'
                        positive
                        type='submit'
                        content='Update Profile'
                    />
                </Form>
            )}
        />
    );
};

export default observer(ProfileEditForm);
