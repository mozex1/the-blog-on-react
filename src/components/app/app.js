import React from 'react';

import AppHeader from '../app-header/app-header.js';
import SearchPanel from '../search-panel/search-panel.js';
import PostStatusfilter from '../post-status-filter/post-status-filter.js';
import PostList from '../post-list/post-list.js';
import PostAddFrom from '../post-add-form/post-add-form.js';
import "./app";
import styled from 'styled-components';

const AppBlock = styled.div`
    margin: 0 auto;
    max-width: 900px;
`;

const App = () => {

    const data = [
        {label: "Going to learn HTML & CSS", important: false, id: "qw",}, 
        {label: "Next learn JavaScript", important: true, id: "we"},
        {label: "Learn ReactReactReact", important: false, id: "er"},
        {label: "Congratulations! End learn!", important: false, id: "rt"},
    ];   
    

    return (
        <AppBlock className="test">
            <AppHeader/>
            <div className="search-panel d-flex">
                <SearchPanel/>
                <PostStatusfilter/>
            </div>
            <PostList posts={data}/>
            <PostAddFrom/>
        </AppBlock>
    )
}

export default App;