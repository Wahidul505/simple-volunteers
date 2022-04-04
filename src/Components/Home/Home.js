import React from 'react';
import useVolunteers from '../../hooks/useVolunteers';
import Activity from '../Activity/Activity';
import './Home.css';

const Home = () => {
    const [volunteers] = useVolunteers();
    return (
        <div>
            <div className='volunteers-container'>
                {
                    volunteers.map(activity => <Activity
                            key={activity._id}
                            activity={activity}
                         />)
                }
            </div>
            
        </div>
    );
};

export default Home;