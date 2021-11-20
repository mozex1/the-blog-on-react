import React from 'react';
import { Component } from 'react/cjs/react.production.min';
import { Button } from 'reactstrap';
import "./post-status-filter";

export default class PostStatusfilter extends Component {
    constructor(props) {
        super(props);
        this.buttons = [
            {name: 'all', label: 'Все'},
            {name: 'like', label: 'Понравилось'},
        ]
    }
    render() {
        const buttons = this.buttons.map(({name, label}) => {
            const {filter, onFilterSelect} = this.props;
            const active = filter === name;
            const clazz = active ? 'success' : 'secondary';
            let outline = false;
            if (clazz === 'secondary') {
                outline = true;
            }
            return (
                <Button 
                key={name} 
                color={clazz} 
                outline={outline} 
                type ="button"
                onClick={() => onFilterSelect(name)}>
                {label}</Button>
            )
        });
        return (
            <div className = "btn-group">
                {buttons}
            </div>
        )
    }
}

