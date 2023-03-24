import React from 'react';
import { StyleSheet } from 'react-native';
import {
    Icon,
    Input,
    Layout,
    List,
    ListItem,
    Text,
    TopNavigation,
    TopNavigationAction,
} from '@ui-kitten/components';

const data = [
    { id: 1, title: 'Message 1' },
    { id: 2, title: 'Message 2' },
    { id: 3, title: 'Message 3' },
];

const BackIcon = (props) => <Icon {...props} name='arrow-back' />;

const InboxScreen = ({ navigation }) => {
    const renderItem = ({ item }) => (
        <ListItem
            title={item.title}
            description='Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
        />
    );

    const renderHeader = () => (
        <React.Fragment>
            <TopNavigation
                accessoryLeft={() => (
                    <TopNavigationAction  onPress={() => navigation.goBack()} />
                )}
                title='Messages'
            />
            <Input style={styles.input} placeholder='Type a message' />
        </React.Fragment>
    );

    return (
        <Layout style={styles.container}>
            <List data={data} renderItem={renderItem} ListHeaderComponent={renderHeader} />
        </Layout>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    input: {
        margin: 10,
    },
});

export default InboxScreen;
