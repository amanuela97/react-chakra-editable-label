import { useState } from 'react';
import { Box, Input, Text } from '@chakra-ui/react';
import * as React from 'react';

type Props = {
  text: string;
  onSave: (value: string) => void;
};

const EditableLabel = ({ text, onSave }: Props) => {
  const [editing, setEditing] = useState<boolean>(false);
  const [value, setValue] = useState<string>(text);

  const handleEdit = () => {
    setEditing(true);
  };

  const handleSave = () => {
    onSave(value);
    setEditing(false);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  if (editing) {
    return (
      <Input
        value={value}
        onChange={handleChange}
        onBlur={handleSave}
        autoFocus
      />
    );
  }

  return (
    <Box onClick={handleEdit}>
      <Text>{text}</Text>
    </Box>
  );
};

export default EditableLabel;
