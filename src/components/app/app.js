import React, { useState } from 'react';

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
    const [data, setData ] = useState([
        {label: "Going to learn HTML & CSS", important: false, like: false, id: 1,}, 
        {label: "Step JavaScript", important: false, like: false, id: 2},
        {label: "Step React", important: false, like: false, id: 3},
        {label: "Step Redux", important: false, like: false, id: 4},
    ]);
    const [ term, setTerm ] = useState('');
    const [ filter, setFilter ] = useState('all');
    let maxId = 5;

    const deleteItem = (id) => {
        const index = data.findIndex((elem) => elem.id === id);
        const newArr = [...data.slice(0, index), ...data.slice(index + 1)];
        setData(newArr);
    };

    const addItem = (body) => {
        const newItem = {
            label: body,
            important: false,
            id: maxId++,
        };
        const newArr = [...data, newItem];
        setData(newArr)
    };

    const onToggleImportant = (id) => {
        const index = data.findIndex(elem => elem.id === id);
        const old = data[index];
        const newItem = {...old, important: !old.important};
        const newArr = [...data.slice(0, index), newItem, ...data.slice(index + 1)];
        setData(newArr);
    };

    const onToggleLiked = (id) => {
        const index = data.findIndex(elem => elem.id === id);
        const old = data[index];
        const newItem = {...old, like: !old.like};
        const newArr = [...data.slice(0, index), newItem, ...data.slice(index + 1)];
        setData(newArr);
    };

    const searchPost = (items, term) => {
        if (term.length === 0){
            return items;
        }

        return items.filter((item) => {
            return item.label.indexOf(term) > -1;
        });
    };

    const filterPost = (items, filter) => {
        if (filter === 'like'){
            return items.filter(item => item.like);
        } else {
            return items;
        }
    };

    const onUpdateSearch = (term) => {
        setTerm(term);
    };

    const onFilterSelect = (filter) => {
        setFilter(filter);
    };

    const liked = data.filter(item => item.like).length;
    const allPosts = data.length;
    const visiblePosts = filterPost(searchPost(data, term), filter);

    return (
        <AppBlock>
            <AppHeader
            liked={liked}
            allPosts={allPosts}/>
            <div className="search-panel d-flex">
                <SearchPanel
                    onUpdateSearch={onUpdateSearch}/>
                <PostStatusfilter
                filter={filter}
                onFilterSelect={onFilterSelect}/>
            </div>
            <PostList 
            posts={visiblePosts}
            onDelete={deleteItem}
            onToggleImportant={onToggleImportant}
            onToggleLiked={onToggleLiked}/>
            <PostAddFrom
            onAdd={addItem}/>
        </AppBlock>
        )
}

export default App;

