import { Tabs } from 'expo-router';
import React from 'react';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { HapticTab } from '@/components/HapticTab';
import TabBarBackground from '@/components/ui/TabBarBackground';

export default function MainLayout() {
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: 'white',
        tabBarInactiveTintColor: 'white',
        headerShown: false,
        tabBarButton: HapticTab,
        tabBarBackground: TabBarBackground,
        tabBarStyle: { backgroundColor: '#EF2A39', height: 50 },
      }}
    >
      {/* ✅ Afficher la barre de navigation SEULEMENT sur Accueil */}
      <Tabs.Screen
        name="Accueil"
        options={{
          title: 'Home',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons size={24} name="bank" color={color} />
          ),
        }}
      />

      {/* ❌ Cacher la barre de navigation sur toutes les autres pages */}
      <Tabs.Screen
        name="contact"
        options={{
          title: 'Contact',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons size={24} name="account" color={color} />
          ),
          tabBarStyle: { display: 'none' }, // Masquer la barre
        }}
      />
      <Tabs.Screen
        name="message"
        options={{
          title: 'Message',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons size={24} name="note-text" color={color} />
          ),
          tabBarStyle: { display: 'none' }, // Masquer la barre
        }}
      />
      <Tabs.Screen
        name="like"
        options={{
          title: 'Like',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons size={24} name="cards-heart" color={color} />
          ),
          tabBarStyle: { display: 'none' }, // Masquer la barre
        }}
      />

      {/* 🔹 Cacher les pages Accueil1, Accueil2, Accueil3, Accueil4 */}
      <Tabs.Screen name="(hidden)/Accueil1" options={{ href: null, tabBarStyle: { display: 'none' } }} />
      <Tabs.Screen name="(hidden)/Accueil2" options={{ href: null, tabBarStyle: { display: 'none' } }} />
     <Tabs.Screen name="(hidden)/Accueil3" options={{ href: null, tabBarStyle: { display: 'none' } }} />
     <Tabs.Screen name="(hidden)/Accueil4" options={{ href: null, tabBarStyle: { display: 'none' } }} />
     <Tabs.Screen name="(hidden)/Accueil5" options={{ href: null, tabBarStyle: { display: 'none' } }} />
     <Tabs.Screen name="(hidden)/profile" options={{ href: null, tabBarStyle: { display: 'none' } }} />
     <Tabs.Screen name="(hidden)/payement" options={{ href: null, tabBarStyle: { display: 'none' } }} />
     <Tabs.Screen name="(hidden)/succes" options={{ href: null, tabBarStyle: { display: 'none' } }} />




      
    </Tabs>
  );
}
