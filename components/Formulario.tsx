import React, { useState } from 'react';
import { View, StyleSheet, Alert } from 'react-native';
import { Input, Button, Card, Text } from '@rneui/themed';
import Icon from 'react-native-vector-icons/Ionicons';
import { ScrollView } from 'react-native-gesture-handler';

const Form = ({ navigation }: any) => {
  const [liked, setLiked] = useState('');
  const [opinion, setOpinion] = useState('');
  const [recommend, setRecommend] = useState('');
  const [feeling, setFeeling] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [rating, setRating] = useState('');
  const [comments, setComments] = useState('');

  const handleSubmit = () => {
    const ratingValue = parseInt(rating);
    if (ratingValue < 1 || ratingValue > 5) {
      Alert.alert('Error', 'La calificación debe ser un número entre 1 y 5');
      return;
    }
    console.log('Liked:', liked);
    console.log('Opinion:', opinion);
    console.log('Recommend:', recommend);
    console.log('Feeling:', feeling);
    console.log('Name:', name);
    console.log('Email:', email);
    console.log('Rating:', ratingValue);
    console.log('Comments:', comments);
  };

  return (
    <ScrollView>
    <View style={styles.container}>
      <Card containerStyle={styles.card}>
        <Card.Title style={styles.cardTitle}>Formulario de Satisfacción</Card.Title>
        <Card.Divider />
        
        <Text style={styles.question}>¿Te gustó desarrollar en React Native?</Text>
        <Input
          placeholder="Sí, No, Quizás"
          leftIcon={<Icon name="thumbs-up-outline" size={24} color="gray" />}
          value={liked}
          onChangeText={setLiked}
        />
        
        <Text style={styles.question}>¿Qué opinas de React Native?</Text>
        <Input
          placeholder="Tu opinión"
          leftIcon={<Icon name="chatbubble-ellipses-outline" size={24} color="gray" />}
          value={opinion}
          onChangeText={setOpinion}
        />

        <Text style={styles.question}>¿Recomendarías React Native para desarrollo móvil?</Text>
        <Input
          placeholder="Sí, No, Quizás"
          leftIcon={<Icon name="heart-outline" size={24} color="gray" />}
          value={recommend}
          onChangeText={setRecommend}
        />

        <Text style={styles.question}>¿Cómo te sentiste desarrollando en React Native?</Text>
        <Input
          placeholder="Tu sentimiento"
          leftIcon={<Icon name="happy-outline" size={24} color="gray" />}
          value={feeling}
          onChangeText={setFeeling}
        />

        <Text style={styles.question}>Datos personales</Text>
        <Input
          placeholder="Nombre"
          leftIcon={<Icon name="person-outline" size={24} color="gray" />}
          value={name}
          onChangeText={setName}
        />
        <Input
          placeholder="Correo Electrónico"
          leftIcon={<Icon name="mail-outline" size={24} color="gray" />}
          value={email}
          onChangeText={setEmail}
          keyboardType='email-address'
        />
        <Input
          placeholder="Calificación (1-5)"
          leftIcon={<Icon name="star-outline" size={24} color="gray" />}
          value={rating}
          onChangeText={setRating}
          keyboardType="numeric"
        />
        <Input
          placeholder="Comentarios"
          leftIcon={<Icon name="chatbubble-ellipses-outline" size={24} color="gray" />}
          value={comments}
          onChangeText={setComments}
        />
        
        <Button
          title="Enviar"
          onPress={handleSubmit}
          buttonStyle={styles.button}
          icon={<Icon name="send-outline" size={24} color="white" />}
          iconRight
        />
      </Card>
    </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#E5DA00',
    padding: 40,
  },
  card: {
    borderRadius: 8,
    padding: 16,
    width: '100%',
    maxWidth: 400,
  },
  cardTitle: {
    fontSize: 20,
    marginBottom: 16,
  },
  question: {
    fontSize: 16,
    marginVertical: 8,
  },
  button: {
    backgroundColor: '#BFB605',
    marginTop: 16,
  },
});

export default Form;
