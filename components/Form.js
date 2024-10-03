import { Button, StyleSheet, TextInput, View } from "react-native";
import { globalStyle } from "../styles/style";
import { Formik } from "formik";

export default function Form({ addArticle }) {
  return (
    <View style={styles.form}>
      <Formik
        initialValues={{ name: "", anons: "", full: "", img: "" }}
        onSubmit={(values, action) => {
          addArticle(values);
          action.resetForm();
        }}
      >
        {(props) => (
          <View>
            <TextInput
              style={styles.input}
              value={props.values.name}
              placeholder="Enter article name"
              onChangeText={props.handleChange("name")}
            />
            <TextInput
              style={styles.input}
              value={props.values.anons}
              placeholder="Enter article anons"
              onChangeText={props.handleChange("anons")}
            />
            <TextInput
              style={styles.input}
              value={props.values.full}
              multiline
              placeholder="Enter article full description"
              onChangeText={props.handleChange("full")}
            />
            <TextInput
              style={styles.input}
              value={props.values.img}
              placeholder="Enter article image url"
              onChangeText={props.handleChange("img")}
            />
            <Button title="Add" onPress={props.handleSubmit} color="#353535" />
          </View>
        )}
      </Formik>
    </View>
  );
}

const styles = StyleSheet.create({
  form: {
    padding: 10,
  },
  input: {
    borderWidth: 1,
    padding: 10,
    marginBottom: 10,
  },
});
