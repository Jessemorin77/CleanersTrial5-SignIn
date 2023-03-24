import React from 'react';
import { Box, Pressable, HStack, Badge, Spacer, Flex, Text } from 'native-base';

const ToDoBoxComponent = () => {
    return (
        <Box alignItems="center">
            <Pressable
                onPress={() => console.log("I'm Pressed")}
                rounded="10"
                overflow="hidden"
                borderWidth="1"
                borderColor="coolGray.300"
                maxW="96"
                shadow="3"
                bg="coolGray.100"
                p="10"
            >
                <Box>
                    <HStack alignItems="center">
                        <Badge
                            colorScheme="darkBlue"
                            _text={{
                                color: "white"
                            }}
                            variant="solid"
                            rounded="4"
                        >
                            ToDo
                        </Badge>
                        <Spacer />
                        <Text fontSize={10} color="coolGray.800">
                            1 month ago
                        </Text>
                    </HStack>
                    <Text color="coolGray.800" mt="3" fontWeight="medium" fontSize="xl">
                        ToDo Lists
                    </Text>
                    <Text mt="2" fontSize="sm" color="coolGray.700">
                        Save time by creating ToDo lists for you and your properties
                    </Text>
                    <Flex>
                        <Text mt="2" fontSize={12} fontWeight="medium" color="darkBlue.600">
                            Create a new ToDo list
                        </Text>
                    </Flex>
                </Box>
            </Pressable>
        </Box>
    );
};

export default ToDoBoxComponent;