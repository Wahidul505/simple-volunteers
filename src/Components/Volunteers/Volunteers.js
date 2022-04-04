import React, { useEffect, useState } from 'react';
import useVolunteers from '../../hooks/useVolunteers';
import Activity from '../Activity/Activity';
import './Volunteers.css';

const Volunteers = () => {
    // const [volunteers, setVolunteers] = useVolunteers();
    const [searchResults, setSearchResults] = useState([]);
    const [searchText, setSearchText] = useState('');
    // const handleSearchResult = event =>{
    //     const searchText = (event.target.value);
    //     const match = volunteers.filter(element => element.title.toLowerCase().includes(searchText));
    //     setSearchResults(match);
    // }
    useEffect(()=>{
        fetch('data.json')
        .then(res => res.json())
        .then(data => {
            const results = data.filter(element => element.title.toLowerCase().includes(searchText));
            setSearchResults(results);
        })
    },[searchText])
    const handleSearchResult = event =>{
        setSearchText(event.target.value);
    }
    return (
        <div>
            <div className='search-field'>
                <input onChange={handleSearchResult} type="text" placeholder='search'/>
            </div>
            <div className='volunteers-container'>
                {
                    searchResults.map(activity => <Activity 
                        key={activity._id}
                        activity={activity}
                    />)
                }
            </div>
        </div>
    );
};

export default Volunteers;