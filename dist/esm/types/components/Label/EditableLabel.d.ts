import React from 'react';
type Props = {
    text: string;
    onSave: (value: string) => void;
};
declare const EditableLabel: ({ text, onSave }: Props) => React.JSX.Element;
export default EditableLabel;
