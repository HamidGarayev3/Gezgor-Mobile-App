import React, { useState } from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';

interface AboutMeProps {
  text: string;
}

const AboutMe: React.FC<AboutMeProps> = ({ text }) => {
  const [showFullText, setShowFullText] = useState(false);

  const toggleShowFullText = () => {
    setShowFullText((prev) => !prev);
  };

  const truncatedText = text.split(' ').splice(0, 30).join(' ');
  const fullText = text;

  return (
    <View>
      <Text style={styles.aboutMeText}>{showFullText ? fullText : truncatedText}</Text>
      {text.split(' ').length > 50 && (
        <TouchableOpacity onPress={toggleShowFullText}>
          <Text style={styles.readMoreText}>{showFullText ? 'Read less' : 'Read more'}</Text>
        </TouchableOpacity>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  aboutMeText: {
    fontSize: 16,
    lineHeight: 24,
    marginBottom: 16,
  },
  readMoreText: {
    fontSize: 16,
    color: '#007aff',
    fontWeight: 'bold',
  },
});

export default AboutMe;