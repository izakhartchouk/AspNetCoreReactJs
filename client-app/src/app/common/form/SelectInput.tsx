import React from 'react';
import { FieldRenderProps } from 'react-final-form';
import { FormFieldProps, Form, Label, Select } from 'semantic-ui-react';

interface IProps extends FieldRenderProps<string, HTMLElement>, FormFieldProps {}

const SelectInput: React.FC<IProps> = ({
    width,
    input,
    placeholder,
    options,
    meta: { touched, error }
}) => {
    return (
        <Form.Field error={touched && !!error} width={width}>
            <Select
                value={input.value}
                onChange={(e, data) => input.onChange(data.value)}
                placeholder={placeholder}
                options={options}
            />
            {touched && error && (
                <Label basic color='red' style={{ marginTop: '5px' }}>
                    {error}
                </Label>
            )}
        </Form.Field>
    );
};

export default SelectInput;
