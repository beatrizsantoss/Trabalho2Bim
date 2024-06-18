import React from 'react';
import { Text, View, StyleSheet, TouchableOpacity, Image } from 'react-native';

import Home from './home';

export default function App() { 
    const [page, setPage] = React.useState('sobre');

    const renderPage = () => {
        if (page === 'sobre') {
            return (
                <View style={styles.container}>
                 <Text style={styles.title}>LocaFind</Text>
                 <Text style={styles.titlee}>Latitude: 00.00</Text>
                 <Text style={styles.titlee}>Longitude: 00.00</Text>ggg
                   <TouchableOpacity style={styles.button} onPress={() => setPage('home')}>
                   <Image style={styles.imagem} source={require('../assets/images/biaa.png')} />
                    <Text style={styles.buttonText}>Início</Text>
                   </TouchableOpacity>
                </View>
                );
        } else if (page === 'home') {
    return <Home/>;
    }
  };

  return <View style={styles.container}>{renderPage()}</View>;
} 
        const styles = StyleSheet.create({
        container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
        },
        title: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#000',
        marginBottom: 20,
        },
        titlee: {
          fontSize: 20,
          color: '#000',
          justifyContent: 'center',
          alignItems: 'center',
          marginBottom: 20,
          },
        button: {
        backgroundColor: '#007BFF',
        padding: 10,
        borderRadius: 5,
        },
        buttonText: {
        color: '#FFFFFF',
        fontSize: 16,
        },
    });

