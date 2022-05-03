import {LogBox, Keyboard} from 'react-native';
import React, {useState} from 'react';
import {
  VStack,
  Text,
  Input,
  FormControl,
  IconButton,
  CheckIcon,
} from 'native-base';

export const SettingsCard = () => {
  const [text, setText] = useState('');
  const handleChange = value => {
    setText(value);
  };
  const handleChangeLocation = () => {
    console.log(text); //change location logic
    Keyboard.dismiss();
  };
  LogBox.ignoreLogs([
    'Non-serializable values were found in the navigation state',
  ]);
  return (
    <VStack py="6" px="6" mt={4} borderRadius="20" bg="black.600">
      <Text color="black.400" fontFamily="regular" fontWeight="300">
        Settings
      </Text>
      <VStack pl={4} pt={4}>
        <FormControl w="75%" maxW="300px">
          <FormControl.Label>
            <Text color="primary.50">Set Location</Text>
          </FormControl.Label>
          <Input
            placeholder="city..."
            color="primary.30"
            value={text}
            variant="underlined"
            onChangeText={handleChange}
            InputRightElement={
              <IconButton
                bg="green.300"
                icon={<CheckIcon size="xs" />}
                disabled={text.length === 0}
                onPress={handleChangeLocation}
              />
            }
          />
        </FormControl>
      </VStack>
    </VStack>
  );
};
