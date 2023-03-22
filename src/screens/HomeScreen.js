
import React, { useState } from 'react';
import { View, FlatList, StyleSheet, Text,  } from 'react-native';
import SearchBarComponent from '../Components/SearchBar';

const DATA = [
    { id: '1', title: 'Item 1' },
    { id: '2', title: 'Item 2' },
    { id: '3', title: 'Item 3' },
    // ...
];

const HomeScreen = () => {
    const [searchQuery, setSearchQuery] = useState('');
    const [filteredData, setFilteredData] = useState(DATA);

    const handleSearch = (query) => {
        setSearchQuery(query);
        const filtered = DATA.filter((item) =>
            item.title.toLowerCase().includes(query.toLowerCase())
        );
        setFilteredData(filtered);
    };

    const renderItem = ({ item }) => (
        <View style={styles.item}>
            <Text>{item.title}</Text>
        </View>
    );

    return (
        <View style={styles.container}>
            <SearchBarComponent onSearch={handleSearch} />
            
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
    },
    item: {
        padding: 20,
        borderBottomWidth: 1,
        borderBottomColor: '#ccc',
    },
});

export default HomeScreen;