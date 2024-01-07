import React, { useState, useEffect } from 'react';

const DogBreedSelect = () => {
    const [breeds, setBreeds] = useState([]);
    const [selectedBreed, setSelectedBreed] = useState('');
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const fetchBreeds = async () => {
            try {
                const response = await fetch('https://dog.ceo/api/breeds/list/all');
                const data = await response.json();
                const breedList = Object.keys(data.message);
                setBreeds(breedList);
                setIsLoading(false);
            } catch (error) {
                console.error('Error fetching dog breeds:', error);
            }
        };

        fetchBreeds();
    }, []);

    const handleSelectChange = (e) => {
        setSelectedBreed(e.target.value);
    };

    return (
        <div>
            <h1>Dog Breeds</h1>
            {isLoading ? (
                <p>Loading...</p>
            ) : (
                <div>
                    <label>Select a breed:</label>
                    <select value={selectedBreed} onChange={handleSelectChange}>
                        <option value="">Select a breed</option>
                        {breeds.map((breed, index) => (
                            <option key={index} value={breed}>
                                {breed}
                            </option>
                        ))}
                    </select>
                    {selectedBreed && <p>You selected: {selectedBreed}</p>}
                </div>
            )}
        </div>
    );
};

export default DogBreedSelect;
