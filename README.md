# react-chakra-editable-label

A library that allows you to switch between a text label and an input field. The library utlizes [Chakara UI](https://chakra-ui.com/docs/components) under the hood.

## Table of Contents

- [react-chakra-editable-label](#react-chakra-editable-label)
  - [Table of Contents](#table-of-contents)
  - [Installation](#installation)
  - [Usage](#usage)

## Installation

`$ npm install react-chakra-editable-label`
`$ yarn add react-chakra-editable-label`

## Usage

The `react-chakra-editable-label` object requires two props:

- `text` which is the initial text to display
- `onSave` which is the function called when the is updated.

Example:

```
import React from 'react';

import { EditableLabel } from 'react-chakra-editable-label';

const App = () => {
    return (
            <EditableLabel
                text='World'
                onSave={value => {
                    console.log(value);
                }}
            />
    );
}
```
