import React, { Fragment } from "react";
import { Button } from "@mui/material";
import CommentForm from "./Form";
import { useDispatch, useSelector } from "react-redux";
import { commentCreate } from "../../store/actions/user/comment";
import { useRouter } from "next/router";

const CreateComment = ({ id }) => {
  const [open, setOpen] = React.useState(false);
  const handleClickOpen = () => {
    setOpen(true);
  };
  const haldeClickClose = () => {
    setOpen(false);
  };
  const comment = useSelector((state) => state.comment);
  const dispatch = useDispatch();
  const router = useRouter();
  const { posts } = router.query;
  const view = (
    <Fragment>
      <Button
        style={{ marginTop: 40, marginBottom: 20 }}
        color="primary"
        variant="contained"
        onClick={handleClickOpen}
      >
        Post your comment
      </Button>
      <CommentForm
        open={open}
        id={id}
        haldeClickClose={haldeClickClose}
        setOpen={setOpen}
        onSubmit={async (formData) => {
          setOpen(false);
          dispatch(commentCreate(formData, posts, comment.limit));
        }}
      />
    </Fragment>
  );

  return <Fragment>{view}</Fragment>;
};
export default CreateComment;
