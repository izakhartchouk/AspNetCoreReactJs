import React from 'react';
import { FieldRenderProps } from 'react-final-form';
import { FormFieldProps, Form, Label } from 'semantic-ui-react';

interface IProps extends FieldRenderProps<string, HTMLElement>, FormFieldProps {}

const TextAreaInput: React.FC<IProps> = ({
    rows,
    width,
    input,
    placeholder,
    meta: { touched, error }
}) => {
    return (
        <Form.Field error={touched && !!error} width={width}>
            <textarea rows={rows} {...input} placeholder={placeholder} />
            {touched && error && (
                <Label basic color='red' style={{ marginTop: '5px' }}>
                    {error}
                </Label>
            )}
        </Form.Field>
    );
};

export default TextAreaInput;
