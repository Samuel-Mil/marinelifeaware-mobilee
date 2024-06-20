import { View, ScrollView, Text, StyleSheet } from 'react-native';
import {WebView} from "react-native-webview";
import Header from "./Header";

const YouTubeVideo = (videoId: any) => {
    
    const videoUrl = `https://www.youtube.com/watch?v=${videoId}`;
    return (
      <WebView
        style={styles.video}
        javaScriptEnabled={true}
        source={{ uri: videoUrl }}
      />
    );
  };

export default function HomeScreen() {      
  return (
    <View>
        <Header title="Videos" />
        <View style={styles.video_box}>
            <View style={styles.video_single}>
                <YouTubeVideo videoId="dQw4w9WgXcQ"/>
                <Text style={styles.video_title}>Titulo do video</Text>
            </View>
            <View style={styles.video_single}>
                <YouTubeVideo videoId="dQw4w9WgXcQ"/>
                <Text style={styles.video_title}>Titulo do video</Text>
            </View>
            <View style={styles.video_single}>
                <YouTubeVideo videoId="dQw4w9WgXcQ"/>
                <Text style={styles.video_title}>Titulo do video</Text>
            </View>
        </View>
    </View>
  );
}

const styles = StyleSheet.create({
    video_box: {
        padding: 10
    },

    video_single: {
        marginBottom: 10
    },

    video_title: {
        fontSize: 30
    },

    video:{
        width: '100%',
        height: 150,
        backgroundColor: "black"
    }

});