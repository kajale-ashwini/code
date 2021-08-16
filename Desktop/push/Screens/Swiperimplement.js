import React, { Component } from 'react'
import { View, Image, StatusBar, Dimensions } from 'react-native'
import Onboarding from './Onboarding'
import Chat from './Chat'
import Perfect from './Perfect'
import Swiper from 'react-native-swiper'

const { width, height } = Dimensions.get('window')

const styles = {
  wrapper: {
    // backgroundColor: '#f00'
  },

  slide: {
    flex: 1,
    backgroundColor: 'transparent'
  },
  container: {
    flex: 1
  },

  /*imgBackground: {
    width,
    height,
    backgroundColor: 'transparent',
    position: 'absolute'
  },

  image: {
    width,
    height
  }*/
}

export default class Swiperimplement extends Component {
  render() {
    return (
      <View style={styles.container}>
        <StatusBar barStyle="light-content" />
        <Swiper
          style={styles.wrapper}

          buttonWrapperStyle={
              <View>
                 style={{
                    backgroundColor: 'transparent', 
                    flexDirection: 'row', 
                    position: 'absolute',
                    top: 0, 
                    left: 0, 
                    flex: 1, 
                    paddingHorizontal: 10, 
                    paddingVertical: 10, 
                    justifyContent: 'space-between', 
                    alignItems: 'center'
                  }}
              </View>
          }
          paginationStyle={{
            bottom: 40
          }}
          loop={false}
        >
          <View style={styles.slide}>
            <Onboarding/>
          </View>
          <View style={styles.slide}>
            <Chat/>
          </View>
          <View style={styles.slide}>
           <Perfect/>
          </View>
        </Swiper>
      </View>
    )
  }
}


//link of this swiper
//https://github.com/leecade/react-native-swiper