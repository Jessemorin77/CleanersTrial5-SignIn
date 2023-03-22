import React, { useState } from 'react';
import { SearchBar } from 'react-native-elements';

const SearchBarComponent = ({ onSearch }) => {
    const [search, setSearch] = useState('');

    const handleSearch = (value) => {
        setSearch(value);
        onSearch(value);
    };

    const handleClear = () => {
        setSearch('');
        onSearch('');
    };

    const handleFocus = () => {
        // Manually focus the search bar input field
        searchInput.focus();
    };

    let searchInput;

    return (
        <SearchBar
            placeholder="Type Here..."
            onChangeText={handleSearch}
            onClear={handleClear}
            value={search}
            lightTheme
            round
            returnKeyType= "search"
            onSubmitEditing={() => onSearch(search)}
            onFocus={handleFocus}
            ref={(ref) => {
                searchInput = ref;
            }}
        />
    );
};

export default SearchBarComponent;

