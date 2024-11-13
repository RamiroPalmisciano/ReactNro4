import React from 'react';
import { View, Button } from 'react-native';
import { RNCamera } from 'react-native-camera';

const CameraScreen = () => {
    let camera;

    const takePicture = async () => {
        if (camera) {
            const options = { quality: 0.5, base64: true };
            const data = await camera.takePictureAsync(options);
            console.log(data.uri);
        }
    };

    return (
        <View style={{ flex: 1 }}>
            <RNCamera
                ref={(ref) => { camera = ref; }}
                style={{ flex: 1 }}
                type={RNCamera.Constants.Type.back}
            />
            <Button title="Tomar Foto" onPress={takePicture} />
        </View>
    );
};

export default CameraScreen;
