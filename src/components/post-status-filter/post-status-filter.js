import React from 'react';
import { Button } from 'reactstrap';
import "./post-status-filter";

const PostStatusfilter = () => {
    return (
        <div className = "btn-group">
            <Button color="success" type ="button">Все</Button>
            <Button color="secondary" outline type ="button">Понравилось</Button>
        </div>
    )
}

export default PostStatusfilter;