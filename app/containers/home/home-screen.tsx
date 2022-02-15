import React, {createRef, useRef, useState} from 'react';
import { NativeModules, requireNativeComponent, TouchableOpacity } from 'react-native';
const {ToastModule} = NativeModules


// Styles
import styles from './styles';

// Components
import {
  CBaseView,
  CButton,
  CMediaSlider,
  CScreenHeader,
  CText,
  CView,
} from '@/components';
import {useDispatch} from 'react-redux';
import {ProductActions} from '@/redux';
import { StatusBar, View } from 'react-native';
import {NativeBtnRAW} from './component'

const STATUSBAR_HEIGHT = StatusBar.currentHeight;

function HomeScreen({}) {
  
  /*** NATIVE MODULE */
  const onPress = async (): Promise<void> => {
    ToastModule.cbMyName((s: any) => {
      console.log(s) // Daniel Nguyen
    })

    // Show native toast.
    ToastModule.showText("Show test", ToastModule.LENGTH_LONG)
  }


  /*** NATIVE COMPONENT */
  return (
    <CBaseView>
      <CView p20 col centerHorizontal fillHeight>
        <NativeBtnRAW
          // button's title
          title={'Show toast'}
          // pass isOn's value from React Native to Native
          isOn={false}
          // Style is default's property.
          style={{
            backgroundColor: 'red',
            width: 100,
            height: 100,
            align: 'center',
            alignSelf: 'center',
          }}
          // get value from Native to React Native
          // with native's button.
          onStatusChange={(i: any) => {
            console.log('nativeEvent: ', i?.nativeEvent); // {isOn: 'false'}
          }}
        />
      </CView>
    </CBaseView>
  );
}

export default HomeScreen;
