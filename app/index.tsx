import { useEffect, useState } from "react";
import { Text, View, StyleSheet, Pressable } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import moment from "moment";
import { FontAwesome } from "@expo/vector-icons";

export default function Index() {
  const [isPugFedBrunch, setIsPugFedBrunch] = useState(false);
  const [isPugFedDinner, setIsPugFedDinner] = useState(false);
  const [isPugFedForTheDay, setIsPugFedForTheDay] = useState(false);
  const [brunchTime, setBrunchTime] = useState("");
  const [dinnerTime, setDinnerTime] = useState("");

  useEffect(() => {
    if (isPugFedBrunch && isPugFedDinner) {
      setIsPugFedForTheDay(true);
    } else {
      setIsPugFedForTheDay(false);
    }
  }, [isPugFedBrunch, isPugFedDinner]);

  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container}>
        <View>
          <Text style={styles.header}>
            {isPugFedForTheDay
              ? "The pug has been fed all meals for today. \uD83C\uDF89\nHave a nice day pug owner!\n"
              : "\uD83D\uDC4B Have you fed the pug?\nSelect mealtime fed to the pug"}
          </Text>
          {isPugFedForTheDay && (
            <Text style={styles.subHeader}>Buttons will reset at midnight</Text>
          )}
          <View style={styles.fixToText}>
            <Pressable
              disabled={isPugFedBrunch}
              style={
                isPugFedBrunch ? styles.disabledButton : styles.positiveButton
              }
              onPressIn={() => {
                setIsPugFedBrunch(true);
                setBrunchTime(moment().format("LTS"));
              }}
            >
              <Text style={styles.text}>{"Brunch \uD83C\uDF1E"}</Text>
            </Pressable>
            {isPugFedBrunch && (
              <Pressable
                style={styles.undoButton}
                onPressIn={(isPugFedBrunch) => {
                  if (isPugFedBrunch) {
                    setIsPugFedBrunch(false);
                  }
                }}
              >
                <FontAwesome name="undo" size={24} color="black" />
              </Pressable>
            )}
          </View>
          <View>
            {isPugFedBrunch && (
              <Text
                style={styles.title}
              >{`The pug has been fed brunch at ${brunchTime}\nDon't let him scam you!`}</Text>
            )}
          </View>
          <View style={styles.fixToText}>
            <Pressable
              disabled={isPugFedDinner}
              style={
                isPugFedDinner ? styles.disabledButton : styles.positiveButton
              }
              onPressIn={() => {
                setIsPugFedDinner(true);
                setDinnerTime(moment().format("LTS"));
              }}
            >
              <Text style={styles.text}>{"Dinner \uD83C\uDF1A"}</Text>
            </Pressable>
            {isPugFedDinner && (
              <Pressable
                style={styles.undoButton}
                onPressIn={(isPugFedBrunch) => {
                  if (isPugFedDinner) {
                    setIsPugFedDinner(false);
                  }
                }}
              >
                <FontAwesome name="undo" size={24} color="black" />
              </Pressable>
            )}
          </View>
          <View>
            {isPugFedDinner && (
              <Text
                style={styles.title}
              >{`The pug has been fed dinner at ${dinnerTime}\nDon't let him scam you!`}</Text>
            )}
          </View>
        </View>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  fixToText: {
    flexDirection: "row",
    justifyContent: "center",
  },
  title: {
    textAlign: "center",
    marginVertical: 8,
  },
  header: {
    textAlign: "center",
    marginVertical: 8,
    fontSize: 24,
  },
  subHeader: {
    textAlign: "center",
    marginVertical: 8,
    fontSize: 20,
  },
  container: {
    flex: 1,
    justifyContent: "center",
    marginHorizontal: 16,
  },
  positiveButton: {
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 4,
    elevation: 3,
    backgroundColor: "green",
    marginTop: 8,
    marginBottom: 8,
  },
  negativeButton: {
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 4,
    elevation: 3,
    backgroundColor: "red",
    marginTop: 8,
    marginBottom: 8,
  },
  disabledButton: {
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 4,
    elevation: 3,
    backgroundColor: "grey",
    marginTop: 8,
    marginBottom: 8,
  },
  text: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: "bold",
    letterSpacing: 0.25,
    color: "white",
  },
  undoButton: {
    alignItems: "center",
    paddingVertical: 12,
    paddingHorizontal: 12,
    elevation: 3,
    marginTop: 8,
    marginBottom: 8,
  },
});
