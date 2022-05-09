import React from 'react';
import {StyleSheet} from 'react-native';
import {HStack, Text, VStack, Badge, Image, Spinner} from 'native-base';
import LinearGradient from 'react-native-linear-gradient';

const WeatherWidget = ({weatherData, loading}) => {
  return (
    <VStack>
      {weatherData?.name ? (
        <LinearGradient
          start={{x: 0.5, y: 0}}
          end={{x: 0.6, y: 1}}
          style={styles.widgetContainer}
          colors={['#AB7EE3', '#DC8AAB']}>
          {loading ? (
            <HStack
              justifyContent="center"
              alignItems="center"
              py={4}
              space={2}>
              <Text
                color="primary.10"
                fontFamily="crimson"
                fontWeight={400}
                size="semi">
                Loading
              </Text>
              <Spinner />
            </HStack>
          ) : (
            <HStack justifyContent={'space-between'} alignItems="center">
              <VStack>
                <HStack alignItems="flex-start" space={1}>
                  <Text
                    color="primary.10"
                    fontFamily="crimson"
                    fontWeight={400}
                    size="semi">
                    {weatherData?.name}
                  </Text>
                  <Badge
                    _text={{
                      fontSize: '13',
                      fontFamily: 'crimson',
                      fontWeight: '400',
                    }}
                    borderRadius={8}
                    variant="solid">
                    {weatherData?.sys?.country}
                  </Badge>
                </HStack>

                <HStack alignItems="center" space={1}>
                  {weatherData?.weather[0]?.icon ? (
                    <Image
                      source={{
                        uri: `https://openweathermap.org/img/wn/${weatherData?.weather[0]?.icon}@2x.png`,
                      }}
                      alt={weatherData?.weather[0]?.description}
                      size="sm"
                      margin={-2}
                    />
                  ) : null}
                  <Text
                    color="primary.30"
                    size="md"
                    fontFamily="regular"
                    textTransform="capitalize"
                    fontWeight={200}>
                    {weatherData?.weather[0]?.description}
                  </Text>
                </HStack>
              </VStack>
              <Text
                color="primary.10"
                size="slg"
                fontFamily="crimson"
                fontWeight={200}>
                {Math.round(weatherData?.main?.temp)}°c
              </Text>
            </HStack>
          )}
        </LinearGradient>
      ) : null}
    </VStack>
  );
};

export default WeatherWidget;

const styles = StyleSheet.create({
  widgetContainer: {
    borderRadius: 22,
    paddingHorizontal: 32,
    paddingVertical: 16,
  },
});
