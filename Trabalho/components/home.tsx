import React from 'react';
import { Text, View, StyleSheet, TouchableOpacity, Image } from 'react-native';

import Sobre from './sobre';

export default function App() { 
    const [page, setPage] = React.useState('home');

    const renderPage = () => {
        if (page === 'home') {
            return (
                <View style={styles.container}>
                 <Text style={styles.title}>LocaFind</Text>
                  <Text style={styles.titlee}>Bem-Vindo! 
                  Sua ferramenta de localização confiável. Explore o mundo ao seu redor, obtenha sua 
                  localização atual com precisão e descubra novos lugares com facilidade. </Text>
                  <Image style={styles.imagem} source={require('../assets/images/biaa.png')} />
                   <TouchableOpacity style={styles.button} onPress={() => setPage('sobre')}>
                    <Text style={styles.buttonText}>  <Image style={styles.imagemm} source={require('../assets/images/beatriz.png')} />Localizar</Text>
                   </TouchableOpacity>
                </View>
                );
        } else if (page === 'sobre') {
    return <Sobre/>;
                }
            };
                return <View style={styles.container}>{renderPage()}</View>;
        } 
                const styles = StyleSheet.create({
                container: {
            
                flex: 1,
                justifyContent: 'center',
                alignItems: 'center',
                backgroundColor: '#20C8EC',
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
                    marginBottom: 20,
                    },
                button: {
                alignItems: 'center',
                backgroundColor: '#808080',
                padding: 10,
                borderRadius: 5,
                },
                buttonText: {
                color: '#FFFFFF',
                fontSize: 16,
                },
                imagemm: {
                    height: 20,
                    width: 20,
                },
            });
  