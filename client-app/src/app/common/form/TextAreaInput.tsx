import React from 'react';
import { FieldRenderProps } from 'react-final-form';
import { FormFieldProps, Form, Label } from 'semantic-ui-react';

interface IProps extends FieldRenderProps<string, HTMLTextAreaElement>, FormFieldProps {}

const TextAreaInput = (props: IProps) => {
    const { touched, error, rows, width, input, placeholder } = props;

    return (
        <Form.Field error={touched && !!error} width={width}>
            <textarea rows={rows} {...input} placeholder={placeholder} />
            {touched && error && (
                <Label basic color='red'>
                    {error}
                </Label>
            )}
        </Form.Field>
    );
};

export default TextAreaInput;
