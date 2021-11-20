import React from 'react';
import { ListGroup } from 'reactstrap';
import "./post-list";

import PostListItem from '../post-list-item/post-list-item';

const PostList = ({posts, onDelete, onToggleImportant, onToggleLiked}) => {
    const elements = posts.map((item) => {
        const {label, important, like, id} = item;
        return (
            <li key={id}className="list-group-item">
                <PostListItem 
                label={label}
                important={important}
                like={like}
                onDelete={() => onDelete(id)}
                onToggleImportant={() => onToggleImportant(id)}
                onToggleLiked={() => onToggleLiked(id)}/>
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