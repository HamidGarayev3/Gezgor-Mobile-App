import React, { useState } from 'react';
import { View, StyleSheet, TouchableOpacity, Text, Image, TextInput } from 'react-native';

interface EditProfileProps {
  name: string;
  aboutMe: string;
  photoUri: string;
}

const EditProfileScreen: React.FC<EditProfileProps> = ({ name, aboutMe, photoUri,navigation }:any) => {
  const text='Just like Sharp Solid and the Sharp Regular icons, Sharp Light favors a clean, modern elegance when looking for an on-trend design that portrays a serious but delicate feel. Not sure when using Light is the right call? Take a look at other elements in your project like typography and UI elements. '
  const namee='Ashfak Sayem'
  const [newName, setNewName] = useState(name);
  const [newAboutMe, setNewAboutMe] = useState(aboutMe);

  
  const [newPhotoUri, setNewPhotoUri] = useState(photoUri);

  const handleSaveChanges = () => {
    // TODO: save changes to backend
  };

  const handleChoosePhoto = () => {
    // TODO: allow user to choose a new profile photo
  };

  return (
    <View style={styles.container}>
      
      <View style={{flex:0.0001,justifyContent:'center',alignContent:'center',alignItems:'center',marginTop:150}}>
      <Image style={{width:96,height:96,borderRadius:50}} source={{uri:'https://images.unsplash.com/photo-1629941181242-7e3f06c9257d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80'}}></Image>
      </View>
      <TouchableOpacity onPress={handleChoosePhoto}>
        <Image source={{ uri: newPhotoUri }} style={styles.profilePhoto} />
        <Text style={styles.changePhotoText}>Change Photo</Text>
      </TouchableOpacity>

      <View style={styles.inputContainer}>
        <Text style={styles.label}>Name:</Text>
        <TextInput
          style={styles.input}
          value={namee}
          onChangeText={setNewName}
        />
      </View>

      <View style={styles.inputContainer}>
        <Text style={styles.label}>About Me:</Text>
        <TextInput
          style={styles.input}
          value={text}
          onChangeText={setNewAboutMe}
          multiline={true}
          numberOfLines={4}
        />
      </View>

      <TouchableOpacity onPress={handleSaveChanges} style={styles.saveButton}>
        <Text style={styles.saveButtonText}>Save Changes</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  profilePhoto: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 16,
  },
  changePhotoText: {
    color: '#007aff',
    fontSize: 16,
  },
  inputContainer: {
    width: '80%',
    marginBottom: 16,
  },
  label: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ddd',
    padding: 8,
    borderRadius: 4,
    fontSize: 16,
  },
  saveButton: {
    backgroundColor: '#007aff',
    paddingHorizontal: 32,
    paddingVertical: 16,
    borderRadius: 8,
  },
  saveButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default EditProfileScreen;