import React from 'react';
import { View, StyleSheet, Linking } from 'react-native';
import { Button, Icon } from 'react-native-elements';

const ThemedText = ({ navigation }: any) => {
  const openLink = (url: string) => {
    Linking.openURL(url).catch((err) => console.error("Couldn't load page", err));
  };

  return (
    <View style={styles.container}>
      <Button
        title="Noticias"
        onPress={() => navigation.navigate('Noticias')}
        icon={<Icon name="newspaper-outline" type="ionicon" color="#fff" />}
        buttonStyle={[styles.button, styles.noticiasButton]}
        containerStyle={styles.buttonContainer}
      />
      <Button
        title="Youtube"
        onPress={() => openLink('https://www.youtube.com/watch?v=bR7tGiJtkN4')}
        icon={<Icon name="logo-youtube" type="ionicon" color="#fff" />}
        buttonStyle={[styles.button, styles.youtubeButton]}
        containerStyle={styles.buttonContainer}
      />
      <Button
        title="Facebook"
        onPress={() => openLink('https://www.facebook.com/arturo.montalvo.3954')}
        icon={<Icon name="logo-facebook" type="ionicon" color="#fff" />}
        buttonStyle={[styles.button, styles.facebookButton]}
        containerStyle={styles.buttonContainer}
      />
      <Button
        title="Instagram"
        onPress={() => openLink('https://www.instagram.com/arturomontalvo2003/')}
        icon={<Icon name="logo-instagram" type="ionicon" color="#fff" />}
        buttonStyle={[styles.button, styles.instagramButton]}
        containerStyle={styles.buttonContainer}
      />
      <Button
        title="Whatsapp"
        onPress={() => openLink('https://web.whatsapp.com/')}
        icon={<Icon name="logo-whatsapp" type="ionicon" color="#fff" />}
        buttonStyle={[styles.button, styles.whatsappButton]}
        containerStyle={styles.buttonContainer}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    padding: 15,
  },
  buttonContainer: {
    width: '80%',
    marginVertical: 10,
  },
  noticiasButton: {
    backgroundColor: '#007AFF',
  },
  youtubeButton: {
    backgroundColor: '#FF0000',
  },
  facebookButton: {
    backgroundColor: '#4267B2',
  },
  instagramButton: {
    backgroundColor: '#C13584',
  },
  whatsappButton: {
    backgroundColor: '#25D366',
  },
});

export default ThemedText;
