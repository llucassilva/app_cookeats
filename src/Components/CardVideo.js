import React, { useState, useRef } from "react";
import { View, StyleSheet } from "react-native";
import YoutubePlayer from "react-native-youtube-iframe";

export default function CardVideo({ data }) {
  const [playing, setPlaying] = useState(false);
  const controlRef = useRef();

  const onStateChange = (state) => {
    if (state === "ended") {
      setPlaying(false);
    }
  };
  return (
    <View style={style.containervideo}>
        <View style={style.container}>
          <View style={style.modalContainer}>
            <YoutubePlayer
            height={205}
            ref={controlRef}
            play={playing}
            videoId={data}
            onChangeState={onStateChange}
            />
          </View>
        </View>
    </View>
  );
}

const style = StyleSheet.create({
	containervideo: {
		width: 350,
		height: 100,
		marginLeft: "auto",
		marginRight: "auto",
	},
	container: {
		marginLeft: 10,
		marginRight: 10,
		marginBottom: 10,
		flex: 1,
		alignItems: "center",
		justifyContent: "center",
	},
	modalContainer: {
		width: "100%",
		height: "auto",
		backgroundColor: "#fff",
		borderTopLeftRadius: 5,
		borderTopRightRadius: 5,
	},
});