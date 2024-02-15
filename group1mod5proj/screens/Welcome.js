import { View, Text, Pressable, Image } from "react-native";
import React from "react";
import { LinearGradient } from "expo-linear-gradient";
import COLORS from "../constants/colors";
import Button from "../components/Button";

const Welcome = ({ navigation }) => {
  return (
    <LinearGradient
      style={{
        flex: 1,
      }}
      colors={[COLORS.primary, COLORS.primary]}
    >
      <View style={{ flex: 1 }}>
        <View>
          <Image
            resizeMode="cover"
            source={require("../assets/splash.png")}
            style={{
              height: 400,
              width: 400,
              borderRadius: 20,
              position: "absolute",
              alignContent: "center",
              alignItems: "center",
              top: 60,
              left: 10.5,
            }}
          />
        </View>

        {/* content  */}

        <View
          style={{
            paddingHorizontal: 22,
            position: "absolute",
            top: 400,
            width: "100%",
          }}
        >
          {/* <Text
            style={{
              fontSize: 25,
              fontWeight: 800,
              color: COLORS.secondary,
            }}
          >
            Your Personal
          </Text>
          <Text
            style={{
              fontSize: 30,
              fontWeight: 800,
              color: COLORS.white,
            }}
          >
            Movie Curator
          </Text> */}

          <View
            style={{
              marginVertical: 100,
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Text
              style={{
                fontSize: 16,
                color: COLORS.beige,
                marginVertical: 4,
                textAlign: "center", // Optional: Center text within the width of the View
              }}
            >
              Ditch the endless scrolling drama
            </Text>
            <Text
              style={{
                fontSize: 16,
                color: COLORS.beige,
                textAlign: "center", // Optional: Center text within the width of the View
              }}
            >
              Swipe instead 😉
            </Text>
          </View>

          <Button
            title="Join Now"
            onPress={() => navigation.navigate("Signup")}
            style={{
              marginTop: 22,
              width: "100%",
            }}
          />

          <View
            style={{
              flexDirection: "row",
              marginTop: 12,
              justifyContent: "center",
            }}
          >
            <Text
              style={{
                fontSize: 16,
                color: COLORS.white,
              }}
            >
              Already have an account ?
            </Text>
            <Pressable onPress={() => navigation.navigate("Login")}>
              <Text
                style={{
                  fontSize: 16,
                  color: COLORS.secondary,
                  fontWeight: "bold",
                  marginLeft: 4,
                }}
              >
                Login
              </Text>
            </Pressable>
          </View>
        </View>
      </View>
    </LinearGradient>
  );
};

export default Welcome;
