import React, { useState } from "react";
import { View, StyleSheet, TouchableOpacity } from "react-native";
import DateTimePicker from "@react-native-community/datetimepicker";
import { Text } from "react-native";
import moment from "moment";

export default DPicker = (props) => {
  const [date, setDate] = useState(new Date());
  const [show, setShow] = useState(false);
  const [textValue, setTextValue] = useState(
    moment(new Date()).format("DD/MM/YYYY")
  );
  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setShow(false);
    setDate(currentDate);
    setTextValue(moment(currentDate).format("DD/MM/YYYY"));
  };
  const showDatepicker = () => {
    setShow(true);
  };
  return (
    <View>
      <Text style={styles.txt1}>Select DOB</Text>
      <View style={{ width: "80%" }}>
        <TouchableOpacity style={styles.buttonStyle} onPress={showDatepicker}>
          <Text style={{ alignSelf: "center" }}>{textValue}</Text>
        </TouchableOpacity>
      </View>
      {show && (
        <DateTimePicker
          testID="dateTimePicker"
          value={date}
          mode={"date"}
          is24Hour={true}
          display="default"
          onChange={onChange}
        />
      )}
    </View>
  );
};
const styles = StyleSheet.create({
  buttonStyle: {
    /* elevation: 8,
    backgroundColor: "#009688", */
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 12,
    marginBottom: 10,
  },
  txt1: {
    fontSize: 15,
    //fontWeight: 'bold',
}
});
