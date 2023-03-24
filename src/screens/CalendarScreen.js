import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { Calendar, Layout, Text } from '@ui-kitten/components';

const CalendarScreen = () => {
    const [date, setDate] = useState(new Date());

    const renderHeader = () => (
        <View style={styles.header}>
            <Text style={styles.headerText}>{date.toLocaleString('default', { month: 'long' })}</Text>
        </View>
    );

    const onSelect = (nextDate) => {
        setDate(nextDate);
    };

    return (
        <Layout style={styles.container}>
            <Calendar date={date} onSelect={onSelect} renderHeader={renderHeader} />
        </Layout>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
    },
    header: {
        justifyContent: 'center',
        alignItems: 'center',
        paddingVertical: 10,
    },
    headerText: {
        fontSize: 20,
        fontWeight: 'bold',
    },
});

export default CalendarScreen;
