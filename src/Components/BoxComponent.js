import React from 'react';
import { Box, Pressable, HStack, Badge, Spacer, Flex, Text } from 'native-base';

const BoxComponent = () => {
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
                            Schedule
                        </Badge>
                        <Spacer />
                        <Text fontSize={10} color="coolGray.800">
                            1 month ago
                        </Text>
                    </HStack>
                    <Text color="coolGray.800" mt="3" fontWeight="medium" fontSize="xl">
                        Schedule Cleaning
                    </Text>
                    <Text mt="2" fontSize="sm" color="coolGray.700">
                        Unlock powerful time-saving tools for finding cleaners near you!
                    </Text>
                    <Flex>
                        <Text mt="2" fontSize={12} fontWeight="medium" color="darkBlue.600">
                            Find Cleaners
                        </Text>
                    </Flex>
                </Box>
            </Pressable>
        </Box>
    );
};

export default BoxComponent;