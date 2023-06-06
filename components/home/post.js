import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import React, { useState, useEffect } from "react";
import { Divider } from "react-native-elements";
import { firebase, db } from "../../firebase";
const Post = ({ post }) => {
  const handlelike = (post) => {
    const currentLikeStatus = !post.likes_by_users.includes(
      firebase.auth().currentUser.email
    );

    db.collection("users")
      .doc(post.owner_email)
      .collection("posts")
      .doc(post.id)
      .update({
        likes_by_users: currentLikeStatus
          ? firebase.firestore.FieldValue.arrayUnion(
              firebase.auth().currentUser.email
            )
          : firebase.firestore.FieldValue.arrayRemove(
              firebase.auth().currentUser.email
            ),
      })
      .then(() => {
        console.log("doc updated");
      })
      .catch((error) => {
        console.error("error updating", error);
      });
  };
  return (
    <View style={{ marginBottom: 30 }}>
      <Divider width={1} orientation="vertical" />
      <PostHeader post={post} />
      <PostImage post={post} />
      <View style={{ marginHorizontal: 15, marginTop: 15 }}>
        <PostFooter post={post} handlelike={handlelike} />
        <Likes post={post} />
        <Captions post={post} />
        <Commentsect post={post} />
        <CommentSection post={post} />
      </View>
    </View>
  );
};
const postFooterIcons = [
  {
    name: "like",
    imageUrl: require("../../assets/like.png"),
    likedImageUrl: require("../../assets/icons8-red-heart-48.png"),
  },
  {
    name: "comment",
    imageUrl: require("../../assets/chat-bubble.png"),
  },
  {
    name: "share",
    imageUrl: require("../../assets/send.png"),
  },
  {
    name: "save",
    imageUrl: require("../../assets/bookmark.png"),
  },
];

const PostHeader = ({ post }) => (
  <View
    style={{
      flexDirection: "row",
      justifyContent: "space-between",
      margin: 5,
      alignItems: "center",
    }}
  >
    <View style={{ flexDirection: "row", alignItems: "center" }}>
      <Image source={{ uri: post.profile_picture }} style={styles.story} />
      <Text
        style={{
          color: "white",
          marginLeft: 5,
          fontWeight: "700",
        }}
      >
        {post.user}
      </Text>
    </View>
    <Text style={{ color: "white", fontWeight: "900" }}>...</Text>
  </View>
);

const PostImage = ({ post }) => (
  <View
    style={{
      width: "100%",
      height: 350,
    }}
  >
    <Image
      source={{ uri: post.imageUrl }}
      style={{ height: "100%", resizeMode: "cover" }}
    />
  </View>
);

const PostFooter = ({ handlelike, post }) => (
  <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
    <View style={styles.leftFooterIconcont}>
      <TouchableOpacity onPress={() => handlelike(post)}>
        <Image style={styles.footerIcon} source={postFooterIcons[0].imageUrl} />
      </TouchableOpacity>
      <Icon imgStyle={styles.footerIcon} imgUrl={postFooterIcons[1].imageUrl} />
      <Icon imgStyle={styles.footerIcon} imgUrl={postFooterIcons[2].imageUrl} />
    </View>
    <View>
      <Icon imgStyle={styles.footerIcon} imgUrl={postFooterIcons[3].imageUrl} />
    </View>
  </View>
);
const Icon = ({ imgStyle, imgUrl }) => (
  <TouchableOpacity>
    <Image style={imgStyle} source={imgUrl} />
  </TouchableOpacity>
);
const Likes = ({ post }) => (
  <View style={{ flexDirection: "row", marginTop: 5 }}>
    <Text style={{ color: "white", fontWeight: 600 }}>
      {post.likes_by_users.toLocaleString("en")} likes
    </Text>
  </View>
);
const Captions = ({ post }) => (
  <View style={{ marginTop: 5 }}>
    <Text style={{ color: "white" }}>
      <Text style={{ fontWeight: "bold" }}>{post.user}</Text>
      <Text> {post.caption}</Text>
    </Text>
  </View>
);

const Commentsect = ({ post }) => (
  <View style={{ marginTop: 5 }}>
    {!!post.comments.length && (
      <Text style={{ color: "gray" }}>
        View{post.comments.length > 1 ? " all" : ""} {post.comments.length}
        {post.comments.length > 1 ? " comments" : " comment"}
      </Text>
    )}
  </View>
);
const CommentSection = ({ post }) =>
  post.comments.map((comment, index) => (
    <View key={index} style={{ flexDirection: "row", marginTop: 5 }}>
      <Text style={{ color: "white" }}>
        <Text style={{ fontWeight: "bold" }}>{comment.user}</Text>{" "}
        {comment.comment}
      </Text>
    </View>
  ));
const styles = StyleSheet.create({
  story: {
    width: 35,
    height: 35,
    borderRadius: 50,
    marginLeft: 6,
    borderWidth: 1.6,
    borderColor: "#ff8501",
  },
  footerIcon: {
    width: 33,
    height: 33,
  },

  leftFooterIconcont: {
    flexDirection: "row",
    width: "35%",
    justifyContent: "space-between",
    alignItems: "center",
  },
});

export default Post;
