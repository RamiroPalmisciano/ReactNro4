import React, { useState } from 'react';
import { View, Text, TextInput, Button, Alert } from 'react-native';
import axios from 'axios';

const LoginScreen = ({ navigation }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = async () => {
        try {
            const response = await axios.post('http://localhost:5000/api/usuarios/login', { email, password });
            // Almacenar token en AsyncStorage
            Alert.alert('Bienvenido');
        } catch (error) {
            Alert.alert('Error al iniciar sesión');
        }
    };

    return (
        <View>
            <Text>Correo Electrónico</Text>
            <TextInput value={email} onChangeText={setEmail} />
            <Text>Contraseña</Text>
            <TextInput secureTextEntry value={password} onChangeText={setPassword} />
            <Button title="Iniciar Sesión" onPress={handleLogin} />
        </View>
    );
};

export default LoginScreen;
