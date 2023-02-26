import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {
  SafeAreaView,
  Text,
  StyleSheet,
  TextInput,
  Button,
  Alert,
  View,
  FlatList,
} from "react-native";
import { useAuthStore } from "../store/auth.store";


function ProfilePage() {
  const Bye = useAuthStore((state) => state.logout);
  const navigate = useNavigate();
  const email = useAuthStore((state) => state.profile.username.email);
  const name = useAuthStore((state) => state.profile.username.name);
  const lastName = useAuthStore((state) => state.profile.username.last_Name);


  const edit = async () => {
    navigate("/EditProfile");
  };
  return (
    <SafeAreaView>
      <Text>Perfil</Text>
      <Text>Correo: {email}</Text>
      <Text>Name: {name}</Text>
      <Text>Apellido: {lastName}</Text>

      <View></View>

      <Button title="EditarPerfil" onPress={edit} />
      <Button
        title="Logout"
        onPress={() => {
          Bye(), navigate("/");
        }}
      />
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,

    borderBottomColor: "#000000",
    borderBottomWidth: 1,
  },
});
export default ProfilePage;
