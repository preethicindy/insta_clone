import { React, useState, useEffect } from "react";
import "./Post.css";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Input from "@mui/material/Input";
import { db } from "./firebase";
import firebase from "firebase/compat/app";

function Post(props) {
  const [comment, setComment] = useState("");
  const [comments, setComments] = useState([]);

  const postComment = (event) => {
    event.preventDefault();
    db.collection("posts").doc(props.postId).collection("comments").add({
      text: comment,
      username: props.user.displayName,
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
    });
    setComment("");
  };

  useEffect(() => {
    if (props.postId) {
      db.collection("posts")
        .doc(props.postId)
        .collection("comments")
        .orderBy("timestamp", "desc")
        .onSnapshot((snapshot) => {
          setComments(snapshot.docs.map((doc) => doc.data()));
        });
    }
  }, [props.postId]);

  return (
    <div className="post">
      <div className="post__header">
        <Avatar
          className="post__avatar"
          alt="Preethi"
          src="/static/images/avatar/1.jpg"
        />
        <h3> {props.username} </h3>
      </div>
      <img className="post__image" src={props.imageUrl} />
      <h4 className="post__text">
        {" "}
        <strong>{props.username}</strong> {props.caption}
      </h4>

      <div className="comment_section">
        {comments.map((comment) => (
          <p>
            <strong>{comment.username}</strong> {comment.text}
          </p>
        ))}
      </div>

      <div className="comment_Box">
        <Input
          className="comment__text"
          type="text"
          placeholder="Add a comment.."
          value={comment}
          onChange={(e) => {
            setComment(e.target.value);
          }}
        />
        <Button className="comment__post" type="submit" onClick={postComment}>
          {" "}
          Post{" "}
        </Button>
      </div>
    </div>
  );
}

export default Post;
