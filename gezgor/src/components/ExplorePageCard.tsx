import { View, Text, Image, StyleSheet } from 'react-native'
import React from 'react'

interface CardProps {
    image: string;
    date: string;
    title: string;
    location: string;
  }

const ExplorePageCard = ({ image, date, title, location }: CardProps) => {
  return (
    <View style={styles.card}>
    <Image source={{ uri: image }} style={styles.image} />
    <View style={styles.content}>
      <Text style={styles.date}>{date}</Text>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.location}>{location}</Text>
    </View>
  </View>
  )
}


const styles = StyleSheet.create({
    card: {
      backgroundColor: '#fff',
      borderRadius: 8,
      marginBottom: 16,
      overflow: 'hidden',
      width:237
    },
    image: {
      width: 237,
      height: 200,
    },
    content: {
      padding: 16,
    },
    date: {
      fontSize: 14,
      color: '#777',
    },
    title: {
      fontSize: 18,
      fontWeight: 'bold',
      marginBottom: 8,
    },
    location: {
      fontSize: 16,
      color: '#555',
    },
  });

export default ExplorePageCard