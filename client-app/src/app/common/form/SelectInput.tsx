import React from 'react';
import { FieldRenderProps } from 'react-final-form';
import { FormFieldProps, Form, Label, Select } from 'semantic-ui-react';

interface IProps extends FieldRenderProps<string, HTMLSelectElement>, FormFieldProps {}

const SelectInput = (props: IProps) => {
    const { touched, error, width, input, placeholder, options } = props;

    return (
        <Form.Field error={touched && !!error} width={width}>
            <Select
                value={input.value}
                onChange={(e, data) => input.onChange(data.value)}
                placeholder={placeholder}
                options={options}
            />
            {touched && error && (
                <Label basic color='red'>
                    {error}
                </Label>
            )}
        </Form.Field>
    );
};

export default SelectInput;
