import React from 'react';
import { Box, Pressable, HStack, Badge, Spacer, Flex, Text } from 'native-base';

const CalenderBoxComponent = () => {
    return (
        <Box alignItems="center">
            <Box

                rounded="10"
                overflow="hidden"
                borderWidth="1"
                borderColor="coolGray.300"
                maxW="96"
                shadow="3"
                bg="coolGray.100"
                p="14"

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
                            Calenders
                        </Badge>
                        <Spacer />
                        <Text fontSize={10} color="coolGray.800">
                            1 month ago
                        </Text>
                    </HStack>
                    <Text color="coolGray.800" mt="3" fontWeight="medium" fontSize="xl">
                        Calenders
                    </Text>
                    <Text mt="2" fontSize="sm" color="coolGray.700">
                        Manage your cleaning schedule with a calender view!
                    </Text>
                    <Flex>
                        <Text mt="2" fontSize={12} fontWeight="medium" color="darkBlue.600">
                            View Your Calender
                        </Text>
                    </Flex>
                </Box>
            </Box>
        </Box>
    );
};

export default CalenderBoxComponent;