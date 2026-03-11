import { StyleSheet, Text, TextInput, View } from 'react-native';

interface CustomProps {
  input: string;
  onChange: (val: string) => void;
}

const CustomTextInput = ({ input, onChange }: CustomProps) => {
  return (
    <View style={styles.inputContainer}>
      <Text style={styles.label}>Name</Text>
      <TextInput
        placeholder="Input your name"
        value={input}
        style={styles.input}
        onChangeText={onChange}
      />
    </View>
  );
};

const NIMInput = ({ input, onChange }: CustomProps) => {
  return (
    <View style={styles.inputContainer}>
      <Text style={styles.label}>NIM</Text>
      <TextInput
        placeholder="Input your NIM / Student ID"
        value={input}
        style={styles.input}
        onChangeText={onChange}
        keyboardType="numeric"
      />
    </View>
  );
};

const styles = StyleSheet.create({

  inputContainer: {
    width: "100%"
  },

  label: {
    marginBottom: 6,
    fontWeight: "600"
  },

  input: {
    borderColor: "#ccc",
    borderWidth: 1,
    padding: 12,
    borderRadius: 8
  }

});

export { CustomTextInput, NIMInput };

