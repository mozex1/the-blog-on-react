import React from 'react';
import { ListGroup } from 'reactstrap';
import "./post-list";

import PostListItem from '../post-list-item/post-list-item';

const PostList = ({posts}) => {
    const elements = posts.map((item) => {
        const {label, important, id} = item;
        return (
            <li key={id}className="list-group-item">
                <PostListItem 
                label={label}
                important={important}/>
            </li>
        )
    });

    return (
        <ListGroup className = "app-list">
            {elements}
        </ListGroup>
    )
}

export default PostList;