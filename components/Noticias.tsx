import React from 'react';
import { View, ScrollView, StyleSheet, Image } from 'react-native';
import { Button, Card, Text } from '@rneui/themed';
import * as Animatable from 'react-native-animatable';


export function Noticias({ navigation }: any) {
  const data = [
    { 
      titulo: 'AMLO detalla cómo será la primera reunión que tendrá hoy con Claudia Sheinbaum: “La invitaré a salir de la capital”', 
      contenido: 'El presidente recalcó que invitará a la virtual presidenta de México a salir a eventos fuera de la Ciudad', 
      imagen: 'https://www.infobae.com/new-resizer/20QkDLB1Hgy295cJijzXe5NQBLw=/1200x675/filters:format(webp):quality(85)/cloudfront-us-east-1.images.arcpublishing.com/infobae/YRUKR2JCTFE33FDIB7S2LRXMMM.jpg',
    },
    { 
      titulo: 'CHECO PÉREZ SANCIONADO CON TRES POSICIONES EN PARRILLA PARA ESPAÑA', 
      contenido: 'El piloto mexicano Sergio Pérez perderá tres posiciones en la parrilla de salida del Gran Premio de España luego de que los comisarios decidieran sancionarlo por un regreso inseguro tras su accidente en el Gran Premio de Canadá. ', 
      imagen: 'https://cdn-8.motorsport.com/images/amp/0oO3m4x0/s1200/sergio-perez-red-bull-racing-r.webp',
    },
    { 
      titulo: 'iOS 18 cambiará tu iPhone para siempre: pantalla de inicio nueva, mucha IA y más', 
      contenido: 'Después de tanta espera, iOS 18 es oficial. Apple acaba de anunciar todas las novedades de la próxima versión de su sistema operativo para el iPhone en la keynote inaugural de la WWDC 2024.', 
      imagen: 'https://i0.wp.com/imgs.hipertextual.com/wp-content/uploads/2024/06/iOS-18-1-scaled.jpg?w=2340&quality=55&strip=all&ssl=1',
    },
    { 
      titulo: 'WhatsApp cambia sus normas: tendrás que hacer esto para seguir usando el servicio', 
      contenido: 'Meta, la antigua Facebook, vuelve a la carga con las restricciones de uso de WhatsApp y sus diferentes redes sociales. La protagonista es la app de mensajería, un servicio que está cambiando su forma de actuar dependiendo de la edad de sus usuarios.', 
      imagen: 'https://i0.wp.com/imgs.hipertextual.com/wp-content/uploads/2024/02/Encuestas-WhatsApp.jpg?w=1920&quality=55&strip=all&ssl=1',
    },
    { 
      titulo: 'El primer hospital impulsado completamente por IA, una realidad en China', 
      contenido: 'Agent Hospital es el nombre propio detrás del complejo hospitalario capaz de diagnosticar enfermedades y tratar alrededor de 3.000 pacientes por día gracias a la inteligencia artificial.', 
      imagen: 'https://www.cio.com/wp-content/uploads/2024/06/iStock-1489956013.jpg?resize=2048%2C1221&quality=50&strip=all',
    },
    { 
      titulo: 'Samsung Galaxy S24 Ultra, análisis: la IA era el ingrediente secreto para volver a ser el mejor Android del mercado', 
      contenido: 'Una de las grandes bazas de los Samsung Galaxy S24 es la inteligencia artificial. Galaxy AI es el nombre que Samsung ha dado a sus nuevas funciones de IA que permiten, entre otras cosas, traducir llamadas en tiempo real, transcribir audio o editar fotos de diferentes maneras (y con resultados diversos).', 
      imagen: 'https://i.blogs.es/c4f60a/samsung-galaxy-s24-ultra_2281-mejorado-nr-en-tamano-grande/1366_2000.jpeg',
    },
  ];

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Noticias del Mundo</Text>
      </View>
      <ScrollView>
        {data.map((d, index) => (
          <Animatable.View
            key={index}
            animation="fadeInUp"
            delay={index * 400}
            style={styles.cardContainer}
          >
            <Card containerStyle={styles.card}>
              <Card.Title style={styles.cardTitle}>{d.titulo}</Card.Title>
              <Card.Divider />
              {d.imagen !== '' && (
                <Image source={{ uri: d.imagen }} style={styles.cardImage} />
              )}
              <Text style={styles.cardContent}>{d.contenido}</Text>
              <Button
                title="Ver más..."
                onPress={() => navigation.navigate('Home')}
                buttonStyle={styles.button}
                containerStyle={styles.buttonContainer}
              />
            </Card>
          </Animatable.View>
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#f0f0f0'
  },
  header: {
    marginTop: 45,
    marginBottom: 20,
  },
  headerText: {
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: 24,
  },
  cardContainer: {
    marginBottom: 20,
  },
  card: {
    borderRadius: 8,
    padding: 15,
    backgroundColor: '#fff',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 5,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  cardContent: {
    fontSize: 14,
    marginBottom: 10,
  },
  cardImage: {
    width: '100%',
    height: 200,
    borderRadius: 8,
    marginTop: 10,
  },
  button: {
    backgroundColor: '#007AFF',
    padding: 10,
  },
  buttonContainer: {
    marginTop: 10,
  },
});

export default Noticias;
