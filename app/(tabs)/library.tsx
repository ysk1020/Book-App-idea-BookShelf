import { Link } from "expo-router";
import { Text, View } from "react-native";

function Library() {
  return (
    <View>
      <Text>Welcome to the Library</Text>
      <Link href="/">Go back Home</Link>
    </View>
  );
}

export default Library;
