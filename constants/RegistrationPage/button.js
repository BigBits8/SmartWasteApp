import react from "react"

import { TouchableOpacity, StyleSheet, Text} from "react-native"
import { COLORS } from "../themes";


const Button = ({title, onPress = () =>{}}) =>{
    return (
    <TouchableOpacity style={styles.buttons} onPress={onPress}>
        <Text style={{color: COLORS.white, fontWeight: 'bold', fontSize: 18}}>{title}</Text>
    </TouchableOpacity>
    
    )
}
const styles = StyleSheet.create({
  container: {},

  buttons: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    height: 40,
    backgroundColor: "rgb(2, 102, 178)",
    borderRadius: 5,
    marginBottom: 40,
  },
});
export default Button