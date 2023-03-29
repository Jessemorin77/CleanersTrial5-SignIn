import React from 'react';
import {Container, Header, Content, Button, Text } from 'native-base';

const BlockButton= () => {
    return(
        <Container>
            <Header />
            <Content>
                <Button block light>
                    <Text>Light</Text>
                </Button>
                <Button block>
                    <Text>Primary</Text>
                </Button>
                <Button block success>
                    <Text>Success</Text>
                </Button>
            </Content>
        </Container>
    )
}

export default BlockButton;