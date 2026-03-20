import { Image, StyleSheet, Text, View } from "react-native";

type Props = {
  title: string;
  author: string;
  image: any;
};

export default function BookCard({ title, author, image }: Props) {
  return (
    <View style={styles.cardContainer}>
      {/* dummy data */}
      <Image source={{ uri: image }} style={styles.image} />
      <View style={styles.textContainer}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.author}>{author}</Text>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  cardContainer: {
    width: "100%",
    flexDirection: "row",
    padding: 10,
    borderRadius: 10,
    backgroundColor: "#fff",
    marginBottom: 10,
    alignItems: "center",
  },
  image: {
    width: 100,
    height: 150,
    borderRadius: 8,
  },
  textContainer: {
    marginLeft: 12,
    flex: 1,
  },
  title: {
    fontWeight: "600",
    fontSize: 16,
  },
  author: {
    color: "#555",
    marginTop: 4,
  },
});
