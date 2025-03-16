import React, { useState } from 'react';
import { View, Text, TextInput, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';

const ProfileScreen = () => {
    const router = useRouter();

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [address, setAddress] = useState('');
    const [password, setPassword] = useState('');

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                {/* Contenu du Header */}
                <View style={styles.headerContent}>
                    <TouchableOpacity onPress={() => router.push('/Accueil')}>
                        <Ionicons name="arrow-back" size={24} color="white" />
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Ionicons name="settings" size={24} color="white" />
                    </TouchableOpacity>
                </View>

                {/* Image de profil */}
                <View style={styles.profileContainer}>
                    <Image source={require("../../../../assets/images/profile.jpg")} style={styles.profileImage} />
                </View>
            </View>

            {/* Formulaire d'informations */}
            <View style={styles.formContainer}>
                <Text style={styles.label}>Name</Text>
                <TextInput style={styles.input} value={name} onChangeText={setName} />

                <Text style={styles.label}>Email</Text>
                <TextInput style={styles.input} value={email} onChangeText={setEmail} />

                <Text style={styles.label}>Delivery address</Text>
                <TextInput style={styles.input} value={address} onChangeText={setAddress} />

                <Text style={styles.label}>Password</Text>
                <TextInput style={styles.input} value={password} onChangeText={setPassword} secureTextEntry />
            </View>

            {/* Liens supplémentaires */}
            <TouchableOpacity style={styles.linkContainer}>
                <Text style={styles.linkText}>Payment details</Text>
                <Ionicons name="chevron-forward" size={20} color="#aaa" />
            </TouchableOpacity>
            <TouchableOpacity style={styles.linkContainer}>
                <Text style={styles.linkText}>Order history</Text>
                <Ionicons name="chevron-forward" size={20} color="#aaa" />
            </TouchableOpacity>

            {/* Boutons */}
            <View style={styles.buttonContainer}>
                <TouchableOpacity style={styles.editProfileButton}>
                    <Ionicons name="create-outline" size={20} color="white" />
                    <Text style={styles.editProfileText}>Edit profile</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.logoutButton}>
                    <Text style={styles.logoutText}>Log out</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    header: {
        backgroundColor: '#EF2A39',
        height: 120, flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 20
    },
    headerContent: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: "100%",
        paddingHorizontal: 2,
        position: "absolute",
        top: 40,
        zIndex: 2,
    },
    profileContainer: {
        alignItems: 'center',
        position: "absolute",
        bottom: -50,
        left: "50%",
        transform: [{ translateX: -50 }],
    },
    profileImage: {
        width: 100,
        height: 100,
        borderRadius: 50,
        borderWidth: 3,
        borderColor: '#fff'
    },
    formContainer: {
        paddingHorizontal: 20,
        marginTop: 20
    },
    label: {
        fontWeight: 'bold',
        color: '#999',
        marginBottom: 5
    },
    input: {
        backgroundColor: '#f2f2f2',
        padding: 10,
        borderRadius: 10,
        marginBottom: 15,
        color: '#000'
    },
    linkContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 15, borderBottomWidth: 1,
        borderBottomColor: '#eee'
    },
    linkText: {
        fontSize: 16
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 20,
        paddingHorizontal: 20
    },
    editProfileButton: {
        flexDirection: 'row',
        backgroundColor: '#000',
        padding: 15,
        borderRadius: 10,
        alignItems: 'center'
    },
    editProfileText: {
        color: 'white',
        marginLeft: 5
    },
    logoutButton: {
        borderColor: '#E53935',
        borderWidth: 2,
        padding: 15,
        borderRadius: 10
    },
    logoutText: {
        color: '#E53935'
    }
});

export default ProfileScreen;
