import BookCard from "@/components/book-card";
import { books } from "@/data/books";
import { Link } from "expo-router";
import { StyleSheet, Text, View } from "react-native";

function Library() {
  return (
    <View style={styles.container}>
      <Text style={styles.titleContainer}>Welcome to the Library</Text>
      <Link href="/">Go back Home</Link>
      <View>
        {books.map((book) => (
          <BookCard
            key={book.id}
            title={book.title}
            author={book.author}
            image={book.image}
          />
        ))}
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
  },
  titleContainer: {
    color: "white",
    fontSize: 24,
    fontWeight: "bold",
  },
});
export default Library;
