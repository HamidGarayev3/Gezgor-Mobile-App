import React, { useState, useRef } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
  Modal,
  Animated,
  ScrollView,
} from 'react-native';

type MenuItem = {
  text: string;
  onPress: () => void;
};

type ModalMenuProps = {
  items: MenuItem[];
  isVisible: boolean;
  onClose: () => void;
};

const ModalMenu: React.FC<ModalMenuProps> = ({
  items,
  isVisible,
  onClose,
}) => {
  const windowWidth = Dimensions.get('window').width;
  const windowHeight = Dimensions.get('window').height;
  const [menuVisible, setMenuVisible] = useState(false);
  const animatedValue = useRef(new Animated.Value(0)).current;

  const toggleMenu = () => {
    setMenuVisible(!menuVisible);
    Animated.timing(animatedValue, {
      toValue: menuVisible ? 0 : 1,
      duration: 300,
      useNativeDriver: true,
    }).start();
  };

  const translateY = animatedValue.interpolate({
    inputRange: [0, 1],
    outputRange: [windowHeight, 0],
  });

  const handleMenuItemPress = (onPress: () => void) => {
    onClose();
    onPress();
  };

  return (
    <Modal visible={isVisible} transparent>
      <TouchableOpacity
        style={styles.modalBackground}
        activeOpacity={1}
        onPress={onClose}
      >
        <Animated.View
          style={[styles.menuContainer, { transform: [{ translateY }] }]}
        >
          <ScrollView contentContainerStyle={styles.menuItems}>
            {items.map((item, index) => (
              <TouchableOpacity
                key={index}
                style={styles.menuItem}
                onPress={() => handleMenuItemPress(item.onPress)}
              >
                <Text style={styles.menuItemText}>{item.text}</Text>
              </TouchableOpacity>
            ))}
          </ScrollView>
        </Animated.View>
      </TouchableOpacity>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalBackground: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  menuContainer: {
    backgroundColor: '#fff',
    borderRadius: 20,
    width: Dimensions.get('window').width * 0.8,
    maxHeight: Dimensions.get('window').height * 0.7,
    overflow: 'hidden',
  },
  menuItems: {
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
  menuItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 15,
    borderBottomColor: '#e3e3e3',
    borderBottomWidth: 1,
  },
  menuItemText: {
    marginLeft: 10,
    fontSize: 16,
  },
});

export default ModalMenu;
