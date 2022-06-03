import { View, Text as RnText ,StyleSheet} from 'react-native'
import React from 'react'
import { presets } from './text.preset';

export default function Text({children,preset='default',styles}) {
    const textStyle=StyleSheet.compose(presets[preset],styles);
  return (
    <View>
      <RnText style={textStyle}>{children}</RnText>
    </View>
  )
}