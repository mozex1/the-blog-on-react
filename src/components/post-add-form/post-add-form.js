import React, { useState } from 'react';
import "./post-add-form";
import styled from 'styled-components';

const FormPanel = styled.form`
    display: flex;
    margin-top: 20px;
    .new-post-label {
        width: auto;
        flex-grow: 1;
        margin-right: 3px;
      }
      
`

const PostAddFrom = ({ onAdd }) => {
    const [ text, setText ] = useState('');

    const onValueChange = (e) => {
        e.preventDefault();
        setText(e.target.value);  
    };

    const onSubmit = (e) => {
        e.preventDefault();
        onAdd(text);
        setText('');
    };

    return (
        <FormPanel onSubmit={onSubmit}>
            <input
            type="text"
            placeholder="О чем вы думаете сейчас?"
            className="form-control new-post-label"
            onChange={onValueChange}
            value={text}
            />
            <button
                type="submit"
                className="btn btn-outline-success">
                Добавить
            </button>
        </FormPanel>
    )
}


export default PostAddFrom;


