import React from "react";
import { Fragment } from "react";
import { useDispatch, useSelector } from "react-redux";
import { commentEdit } from "../../store/actions/user/comment";
import CommentForm from "./Form";
import { useRouter } from "next/router";
const EditComment = ({ open, setOpen, comment, haldeClickClose }) => {
  const router = useRouter();
  const { posts } = router.query;
  const dispatch = useDispatch();
  const comments = useSelector((state) => state.comment);
  return (
    <Fragment>
      <CommentForm
        open={open}
        setOpen={setOpen}
        commentData={comment}
        haldeClickClose={haldeClickClose}
        onSubmit={async (formData) => {
          setOpen(false);
          dispatch(commentEdit(formData, comment._id, posts, comments.limit));
        }}
      />
    </Fragment>
  );
};

export default EditComment;
