import React from 'react';
import { Button } from 'reactstrap';
import "./post-status-filter";

const PostStatusfilter = ({filter, onFilterSelect}) => {
    const buttons = [
        {name: 'all', label: 'Все'},
        {name: 'like', label: 'Понравилось'},
    ];

    const renderButtons = buttons.map(({name, label}) => {
        const active = filter === name;
        const clazz = active ? 'success' : 'secondary';
        let outline;
        clazz === 'secondary' ? outline = true : outline = false;

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
            {renderButtons}
        </div>
    )
};

export default PostStatusfilter;


