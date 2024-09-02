import { Box, Heading } from '@chakra-ui/react';
import Button from './components/Button';
import Text from './components/Text';

function App() {
  return (
    <Box p={5}>
      <Heading mb={4}>Hello Chakra UI</Heading>
      <Button />

      <Text text="Hello" />
    </Box>
  );
}

export default App;
