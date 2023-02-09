import { View, Text, Image, ScrollView } from 'react-native'
import React from 'react'

export default function ProductScreen() {
  return (
    <View>
        <Image source={{uri: 'toDo'}} style={styles.image}></Image>
        <ScrollView>
{/* https://dribbble.com/shots/15307319-Pet-Service-App/attachments/7063341?mode=media */}
        </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
    image: {},
})