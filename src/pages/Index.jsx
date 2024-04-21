import { Box, Flex, Heading, Text, Image, VStack, HStack, Button, Spacer } from "@chakra-ui/react";
import { FaRegNewspaper, FaRegHeart, FaRegComments } from "react-icons/fa";

const Index = () => {
  return (
    <Box p={5}>
      <Flex direction="column" maxW="1200px" mx="auto">
        {/* Header */}
        <Flex justify="space-between" align="center" mb={10}>
          <Heading as="h1" size="xl">
            NewsToday
          </Heading>
          <Button colorScheme="blue" leftIcon={<FaRegNewspaper />}>
            Subscribe
          </Button>
        </Flex>

        {/* Main News Section */}
        <VStack spacing={8} align="stretch">
          <Box p={5} shadow="md" borderWidth="1px">
            <HStack spacing={4}>
              <Image borderRadius="md" boxSize="150px" src="https://images.unsplash.com/photo-1485115905815-74a5c9fda2f5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxicmVha2luZyUyMG5ld3N8ZW58MHx8fHwxNzEzNzExODk1fDA&ixlib=rb-4.0.3&q=80&w=1080" alt="Main news image" />
              <VStack align="stretch">
                <Heading size="md">Breaking News: Major Event Shakes the Nation</Heading>
                <Text mt={4}>In a surprising turn of events, the nation woke up to a major political and social upheaval...</Text>
                <HStack mt={2}>
                  <Button size="sm" leftIcon={<FaRegHeart />}>
                    Like
                  </Button>
                  <Button size="sm" leftIcon={<FaRegComments />}>
                    Comment
                  </Button>
                </HStack>
              </VStack>
            </HStack>
          </Box>

          {/* Other News Articles */}
          <Box p={5} shadow="md" borderWidth="1px">
            <HStack spacing={4}>
              <Image borderRadius="md" boxSize="150px" src="https://images.unsplash.com/photo-1461749280684-dccba630e2f6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHx0ZWNobm9sb2d5JTIwbmV3c3xlbnwwfHx8fDE3MTM3MTE4OTZ8MA&ixlib=rb-4.0.3&q=80&w=1080" alt="Technology news image" />
              <VStack align="stretch">
                <Heading size="md">Tech Update: New Innovations in AI</Heading>
                <Text mt={4}>The tech industry has seen a rapid evolution in AI technologies, with new startups emerging...</Text>
                <HStack mt={2}>
                  <Button size="sm" leftIcon={<FaRegHeart />}>
                    Like
                  </Button>
                  <Button size="sm" leftIcon={<FaRegComments />}>
                    Comment
                  </Button>
                </HStack>
              </VStack>
            </HStack>
          </Box>

          <Box p={5} shadow="md" borderWidth="1px">
            <HStack spacing={4}>
              <Image borderRadius="md" boxSize="150px" src="https://images.unsplash.com/photo-1597649475360-955f18d9d277?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxzcG9ydHMlMjBuZXdzfGVufDB8fHx8MTcxMzcxMTg5N3ww&ixlib=rb-4.0.3&q=80&w=1080" alt="Sports news image" />
              <VStack align="stretch">
                <Heading size="md">Sports Roundup: Local Team Wins Championship</Heading>
                <Text mt={4}>In an exciting final match, the local team clinched the championship trophy after a dramatic...</Text>
                <HStack mt={2}>
                  <Button size="sm" leftIcon={<FaRegHeart />}>
                    Like
                  </Button>
                  <Button size="sm" leftIcon={<FaRegComments />}>
                    Comment
                  </Button>
                </HStack>
              </VStack>
            </HStack>
          </Box>
        </VStack>

        {/* Footer */}
        <Spacer />
        <Flex py={5} justify="center" mt={10}>
          <Text fontSize="sm">© 2023 NewsToday. All rights reserved.</Text>
        </Flex>
      </Flex>
    </Box>
  );
};

export default Index;
