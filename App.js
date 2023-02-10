import { StatusBar } from 'expo-status-bar';
import {StyleSheet, Text, View, FlatList, TextInput, Button, TouchableOpacity} from 'react-native';
import {useState} from "react";
import { TouchableNativeFeedback } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import EditModal from './Composants/EditModal';

const sampleGoals = [
  "Faire les courses",
  "Aller à la salle de sport 3 fois par semaine",
  "Monter à plus de 5000m d altitude",
  "Acheter mon premier appartement",
  "Perdre 5 kgs",
  "Gagner en productivité",
  "Apprendre un nouveau langage",
  "Faire une mission en freelance",
  "Organiser un meetup autour de la tech",
  "Faire un triathlon",
]

export default function App() {
  const [goals, setGoals] = useState(sampleGoals);
  const [newGoal, setNewGoal] = useState('');
  const [visible, setVisible] = useState(false);
  const [selectedItem, setSelectedItem] = useState({});

  const handleAddGoal = () => {
    if (newGoal.trim() === '') {
      return;
    }
    setGoals([...goals, newGoal]);
    setNewGoal('');
  };

  const handleRemoveGoal = (index) => {
    setGoals(goals.filter((goal, i) => i !== index));
  };

  const updateItem = updatedItem => {
    console.log("updated item :", updatedItem);
    setGoals(prevData =>
        prevData.map(item => {
          if (item === selectedItem) {
            return updatedItem;
          }
          console.log("item : ",item);
          return item;
        })
    );
    setSelectedItem({});
    setVisible(false);
  };

  const closeModal = () => setVisible(false);

  return (
    <View style={{
      backgroundColor: 'white',
      position: 'absolute', left: '15%', top: '30%',
      alignItems: 'center',
      width: '70%'
    }}>
      <StatusBar style="auto" />
      <FlatList
          data={goals}
          renderItem={({item, index}) => (
              <View style={{flexDirection: 'row', alignItems: 'center', width: '100%'}}>
                <TouchableOpacity onPress={() => handleRemoveGoal(index)}>
                  <Ionicons name="ios-close-circle" size={20} color="red" />
                </TouchableOpacity>
                <Text style={{marginLeft: 10}} onPress={() => {
                  console.log("text item ",item);
                  setSelectedItem(item);
                  setVisible(true);
                }}>{item}</Text>
              </View>
          )}
      />
      <View style={{
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        width: '100%',
        marginTop: 20
      }}>
        <TextInput
            style={{ width: '70%', padding: 10 }}
            value={newGoal}
            onChangeText={setNewGoal}
            placeholder="Ajouter un objectif"
        />
        <TouchableNativeFeedback
            onPress={handleAddGoal}
            background={TouchableNativeFeedback.Ripple('#fff', false)}>
          <View style={styles.button}>
            <Text style={styles.text}>Ajouter</Text>
          </View>
        </TouchableNativeFeedback>
      </View>
      <EditModal
          visible={visible}
          closeModal={closeModal}
          item={selectedItem}
          updateItem={updateItem}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    width: 100,
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#333',
    borderRadius: 5,
  },
  text: {
    color: '#fff',
    fontWeight: 'bold',
  },
});
