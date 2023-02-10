import React, {useEffect, useState} from 'react';
import { Modal, View, Text, TextInput, TouchableOpacity } from 'react-native';
import {Ionicons} from "@expo/vector-icons";

const Objectifs = ({handleRemoveGoal,setSelectedItem,setVisible }) => {
    return (
        ({item, index}) => (
            <View style={{flexDirection: 'row', alignItems: 'center', width: '100%'}}>
                <TouchableOpacity onPress={() => handleRemoveGoal(index)}>
                    <Ionicons name="ios-close-circle" size={20} color="red" />
                </TouchableOpacity>
                <Text style={{marginLeft: 10}} onPress={() => {
                    setSelectedItem(item);
                    setVisible(true);
                }}>{item}</Text>
            </View>
        )
    );
};

export default EditModal;