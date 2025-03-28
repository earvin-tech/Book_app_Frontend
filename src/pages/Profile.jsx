import React, { useEffect, useState } from 'react';

function Profile() {
    const [userData, setUserData] = useState({
        userName: "",
        booksCount: 0,
        friendsCount: 0,
        recentActivity: [],
        currentlyReading: []
    });
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    // Function to fetch user data
    const fetchUserData = async () => {
        try {
            const response = await fetch('https://book-application-d96a.onrender.com/user/profile'); // Adjust this endpoint as needed
            const data = await response.json();
            if (response.ok) {
                setUserData({
                    userName: data.userName,
                    booksCount: data.booksCount,
                    friendsCount: data.friendsCount,
                    recentActivity: data.recentActivity,
                    currentlyReading: data.currentlyReading
                });
            } else {
                throw new Error(data.message || "Unable to fetch user data");
            }
        } catch (error) {
            setError(error.message);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchUserData();
    }, []);

    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error: {error}</div>;

    return (
        <div className="profile-page">
            <div className="profile-header">
                <div className="profile-pic"></div>
                <h1>{userData.userName}</h1>
                <div className="user-stats">
                    <span>{userData.booksCount} Books</span>
                    <span>{userData.friendsCount} Friends</span>
                </div>
            </div>
            <div className="recent-activity">
                <h2>Recent Activity</h2>
                {userData.recentActivity.map((activity, index) => (
                    <p key={index}>{activity}</p>
                ))}
            </div>
            <div className="currently-reading">
                <h2>Currently Reading</h2>
                {userData.currentlyReading.map((book, index) => (
                    <p key={index}>{book.title} - {book.progress}</p>
                ))}
            </div>
        </div>
    );
}

export default Profile;
