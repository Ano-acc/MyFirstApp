import React, {useEffect, useState} from 'react';
import { Modal, View, Text, TextInput, TouchableOpacity } from 'react-native';

const EditModal = ({ visible, closeModal, item, updateItem }) => {
    const [text, setText] = useState('');
useEffect(()=>{setText(item)},[item])
    return (
        <Modal visible={visible} animationType="slide">
            <View style={{ padding: 20 }}>
                <TextInput
                    style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
                    onChangeText={text => setText(text)}
                    value={text}
                />
                <TouchableOpacity
                    style={{ marginTop: 20 }}
                    onPress={() => {
                        updateItem(text);
                        closeModal();
                    }}
                >
                    <Text>Save</Text>
                </TouchableOpacity>
            </View>
        </Modal>
    );
};

export default EditModal;