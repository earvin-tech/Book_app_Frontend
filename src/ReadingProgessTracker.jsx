import React, { useEffect, useState } from 'react';

function ReadingProgressTracker({ userId, bookId }) {
    const [progress, setProgress] = useState(null);

    // Fetch progress
    const fetchProgress = async () => {
        const url = `https://book-application-d96a.onrender.com/progress/${userId}/${bookId}`;
        const response = await fetch(url);
        const data = await response.json();
        if (response.ok) {
            setProgress(data.readingProgress);
        } else {
            console.error('Failed to fetch progress:', data.message);
        }
    };

    // Update progress
    const updateProgress = async (newProgress) => {
        const url = `https://book-application-d96a.onrender.com/progress/${userId}/${bookId}`;
        const response = await fetch(url, {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ progress: newProgress })
        });
        const data = await response.json();
        if (response.ok) {
            setProgress(data.updatedReadingProgress);
        } else {
            console.error('Failed to update progress:', data.message);
        }
    };

    useEffect(() => {
        fetchProgress();
    }, [userId, bookId]);

    return (
        <div>
            {progress ? (
                <div>
                    <h1>Reading Progress for {progress.book.title}</h1>
                    <p>Current page: {progress.currentPage} of {progress.totalPages}</p>
                    <input
                        type="range"
                        min="1"
                        max={progress.totalPages}
                        value={progress.currentPage}
                        onChange={(e) => updateProgress(e.target.value)}
                    />
                </div>
            ) : (
                <p>Loading progress...</p>
            )}
        </div>
    );
}

export default ReadingProgressTracker;
