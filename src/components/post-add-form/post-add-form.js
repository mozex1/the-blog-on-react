import React from 'react';
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

const PostAddFrom = () => {
    return (
        <FormPanel>
            <input
            type="text"
            placeholder="О чем вы думаете сейчас?"
            className="form-control new-post-label"
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