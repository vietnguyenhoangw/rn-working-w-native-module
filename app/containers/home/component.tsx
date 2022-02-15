import React from 'react';
import { requireNativeComponent } from 'react-native'

export const NativeBtnRAW = requireNativeComponent('NativeTextView');

export const NativeBtn: React.FC<any> = (...props) => {
    return <NativeBtnRAW {...props}/>
}