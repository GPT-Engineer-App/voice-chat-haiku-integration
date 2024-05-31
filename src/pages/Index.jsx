import React, { useState } from "react";
import { Container, VStack, Text, Button, Box, IconButton, HStack } from "@chakra-ui/react";
import { FaMicrophone, FaStop } from "react-icons/fa";

const Index = () => {
  const [isRecording, setIsRecording] = useState(false);
  const [transcriptions, setTranscriptions] = useState([]);

  const handleStartRecording = () => {
    setIsRecording(true);
    // Placeholder for starting audio recording and processing
  };

  const handleStopRecording = () => {
    setIsRecording(false);
    // Placeholder for stopping audio recording and processing
  };

  return (
    <Container centerContent maxW="container.md" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
      <VStack spacing={4}>
        <Text fontSize="2xl">Voice Chat with Claude 3 Haiku</Text>
        <HStack spacing={4}>
          <IconButton aria-label="Start Recording" icon={<FaMicrophone />} size="lg" colorScheme="teal" onClick={handleStartRecording} isDisabled={isRecording} />
          <IconButton aria-label="Stop Recording" icon={<FaStop />} size="lg" colorScheme="red" onClick={handleStopRecording} isDisabled={!isRecording} />
        </HStack>
        <Box width="100%" padding={4} borderWidth={1} borderRadius="md" overflowY="auto" maxHeight="50vh">
          {transcriptions.length === 0 ? <Text>No transcriptions yet. Start a voice chat to see the conversation here.</Text> : transcriptions.map((transcription, index) => <Text key={index}>{transcription}</Text>)}
        </Box>
      </VStack>
    </Container>
  );
};

export default Index;
