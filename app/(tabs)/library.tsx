import BookCard from "@/components/book-card";
import { books } from "@/data/books";
import { Link } from "expo-router";
import { FlatList, StyleSheet, Text } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";

const DATA = books;

function Library() {
  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.contentContainer}>
        <Text style={styles.titleContainer}>Welcome to the Library</Text>
        <Link href="/">Go back Home</Link>
        <FlatList
          data={DATA}
          renderItem={({ item }) => (
            <BookCard
              key={item.id}
              title={item.title}
              author={item.author}
              image={item.image}
            />
          )}
          keyExtractor={(item) => item.id}
        />
      </SafeAreaView>
    </SafeAreaProvider>
  );
}
const styles = StyleSheet.create({
  contentContainer: { padding: 16 },
  titleContainer: {
    color: "purple",
    fontSize: 24,
    fontWeight: "bold",
  },
  listContainer: {
    margin: 10,
    padding: 10,
  },
});

export default Library;
