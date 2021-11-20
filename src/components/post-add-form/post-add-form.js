import React from 'react';
import "./post-add-form";
import styled from 'styled-components';
import { Component } from 'react/cjs/react.production.min';

const FormPanel = styled.form`
    display: flex;
    margin-top: 20px;
    .new-post-label {
        width: auto;
        flex-grow: 1;
        margin-right: 3px;
      }
      
`

export default class PostAddFrom extends Component {
    constructor(props) {
        super(props);
        this.state = {
            text: '',
        }
        this.onValueChange = this.onValueChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    onValueChange(e){
        e.preventDefault();
        this.setState({
           text: e.target.value,
        });
    }

    onSubmit(e){
        e.preventDefault();
        this.props.onAdd(this.state.text);
        this.setState({
            text: '',
        })
    }
    
    render() {
        return (
            <FormPanel onSubmit={this.onSubmit}>
                <input
                type="text"
                placeholder="О чем вы думаете сейчас?"
                className="form-control new-post-label"
                onChange={this.onValueChange}
                value={this.state.text}
                />
                <button
                    type="submit"
                    className="btn btn-outline-success">
                    Добавить
                </button>
            </FormPanel>
        )
    }
}

