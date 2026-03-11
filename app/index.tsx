import { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { CustomTextInput, NIMInput } from "./input";

export default function Index() {
  const [name, setName] = useState("");
  const [nim, setNim] = useState("");

  const handleChangeMyName = (value: string) => {
    setName(value);
  };

  const handleChangeMyNIM = (value: string) => {
    setNim(value);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{name}'s Information</Text>
      <View style={styles.card}>
        <CustomTextInput input={name} onChange={handleChangeMyName} />
        <NIMInput input={nim} onChange={handleChangeMyNIM} />
      </View>
      <Text style={styles.result}>
        {name} - {nim}
      </Text>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fc035a',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },

  title: {
    fontSize: 22,
    fontWeight: "bold",
    color: "white",
    marginBottom: 20
  },

  card: {
    width: "100%",
    maxWidth: 300,
    backgroundColor: "white",
    padding: 20,
    borderRadius: 12,
    gap: 15,
  },

  result: {
    marginTop: 20,
    fontSize: 18,
    fontWeight: "600",
    color: "white"
  }
});