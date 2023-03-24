
import React, { useState } from 'react';
import { View, FlatList, StyleSheet, Text, ScrollView } from 'react-native';
import SearchBarComponent from '../Components/SearchBar';
import { Box, Pressable, HStack, Badge, Spacer, Flex } from 'native-base';
import BoxComponent from "../Components/BoxComponent";
import ToDoBoxComponent from "../Components/ToDoBoxComponent";
import CalenderBoxComponent from "../Components/CalenderBoxComponent";

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
        <ScrollView>
            <View style={styles.container}>
                <SearchBarComponent onSearch={handleSearch} />
                <BoxComponent style={{ marginBottom: 20 }} />
                <ToDoBoxComponent style={{ marginBottom: 20 }} />
                <CalenderBoxComponent style={{ marginBottom: 20 }} />
                <Text style={styles.text}>Scheduled Cleanings: </Text>
            </View>
        </ScrollView>
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
    text: {
        fontSize: 20,
        marginTop: 20,
        marginBottom: 20,
    },
});

export default HomeScreen;
