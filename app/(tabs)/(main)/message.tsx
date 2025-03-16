import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, FlatList, Image, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';

// Définition du type pour un message
interface Message {
  id: string;
  text: string;
  sender: 'bot' | 'user';
}

const ChatScreen = () => {
  const router = useRouter(); // Utilisation du hook useRouter à l'intérieur du composant fonctionnel
  const [messages, setMessages] = useState<Message[]>([
    { id: '1', text: 'Bonjour, comment puis-je vous aider ?', sender: 'bot' },
    { id: '2', text: 'Bonjour, j\'ai commandé deux burgers au poulet frit. Puis-je savoir combien de temps cela prendra pour arriver ?', sender: 'user' },
    { id: '3', text: 'D\'accord, laissez-moi vérifier !', sender: 'bot' },
    { id: '4', text: 'Bien sûr...', sender: 'user' },
    { id: '5', text: 'Cela prendra 25 minutes pour arriver à votre adresse.', sender: 'bot' },
    { id: '6', text: 'D\'accord, merci pour votre aide.', sender: 'user' }
  ]);
  
  const [inputText, setInputText] = useState('');

  const sendMessage = () => {
    if (inputText.trim() === '') return;
    const newMessage: Message = { id: Date.now().toString(), text: inputText, sender: 'user' };
    setMessages([...messages, newMessage]);
    setInputText('');
  };

  const renderMessage = ({ item }: { item: Message }) => (
    <View style={[
      styles.messageContainer,
      item.sender === 'user' ? styles.userMessageContainer : styles.botMessageContainer
    ]}>
      {item.sender === 'bot' && (
        <View style={styles.avatar}>
          <Ionicons name="person" size={24} color="#fff" />
        </View>
      )}
      <View style={[
        styles.messageBubble,
        item.sender === 'user' ? styles.userBubble : styles.botBubble
      ]}>
        <Text style={[
          styles.messageText,
          item.sender === 'user' ? styles.userText : styles.botText
        ]}>
          {item.text}
        </Text>
      </View>
      {item.sender === 'user' && (
        <Image source={require('../../../assets/images/profile.jpg')} style={styles.avatar} />
      )}
    </View>
  );

  return (
    <View style={styles.container}>
      {/* En-tête */}
      <View style={styles.header}>
        <TouchableOpacity style={styles.iconButton} onPress={() => router.push('/Accueil')}>
          <Ionicons name="arrow-back" size={24} color="#333" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.iconButton}>
          <Ionicons name="ellipsis-horizontal" size={24} color="#333" />
        </TouchableOpacity>
      </View>
      
      {/* Liste des messages */}
      <FlatList
        data={messages}
        renderItem={renderMessage}
        keyExtractor={(item) => item.id}
        contentContainerStyle={{ flexGrow: 1, justifyContent: 'flex-end', paddingBottom: 60 }}
      />
      
      {/* Barre d'entrée de message */}
      <View style={styles.inputContainer}>
        <View style={styles.inputBar}>
          <TextInput 
            style={styles.input}
            placeholder="Tapez votre message..."
            value={inputText}
            onChangeText={setInputText}
          />
          <TouchableOpacity style={styles.sendButton} onPress={sendMessage}>
            <Ionicons name="send" size={24} color="#fff" />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { 
    flex: 1, 
    backgroundColor: '#F8F8F8'
  },
  header: {
    flexDirection: 'row', 
    justifyContent: 'space-between', 
    alignItems: 'center', 
    padding: 10,
    marginTop: 20,
  },
  iconButton: {
    padding: 10,
  },
  messageContainer: { 
    flexDirection: 'row', 
    alignItems: 'center', 
    marginVertical: 5, 
    paddingHorizontal: 10
  },
  botMessageContainer: {
    justifyContent: 'flex-start',
  },
  userMessageContainer: {
    justifyContent: 'flex-end',
    flexDirection: 'row', 
    marginHorizontal: 15, 
    marginTop: 25, // Correction de la marge supérieure
  },
  avatar: { 
    width: 40, 
    height: 40,
    borderRadius: 20, 
    backgroundColor: '#333', 
    alignItems: 'center', 
    justifyContent: 'center',
    marginHorizontal: 5
  },
  messageBubble: {
    padding: 10,
    borderRadius: 20, 
    maxWidth: '70%'
  },
  botBubble: {
    backgroundColor: '#EAEAEA'
  },
  userBubble: { 
    backgroundColor: '#EF2A39'
  },
  messageText: { 
    fontSize: 16
  },
  botText: { 
    color: '#000'
  },
  userText: {
    color: '#fff'
  },
  inputContainer: {
    padding: 5,
    marginVertical: 20,
  },
  inputBar: {
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 20,
    backgroundColor: '#FFFFFF',
    paddingHorizontal: 8,
  },
  input: { 
    flex: 1,
    height: 40,
    fontSize: 16,
  },
  sendButton: { 
    marginLeft: 10,
    padding: 10,
    backgroundColor: '#EF2A39',
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center'
  }
});

export default ChatScreen;
