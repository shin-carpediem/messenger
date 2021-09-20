import React from "react";
import * as Api from "../service/api";
import { makeStyles } from "@material-ui/core";
import {
  ListItem,
  ListItemIcon,
  ListItemText,
  ListItemSecondaryAction,
  IconButton,
  Checkbox,
} from "@material-ui/core";
import DeleteIcon from "@material-ui/icons/Delete";

const useStyles = makeStyles(() => ({
  root: {
    maxWidth: 360,
    margin: "auto",
  },
  ul: {
    paddingLeft: 0,
    listStyle: "none",
  },
}));

const ToDoList = (props) => {
  const classes = useStyles();
  const deleteHandle = (id) => {
    Api.todoDelete(id);
    props.fetch();
  };
  const checkHandle = async (id) => {
    // API経由でisCompltedの値を更新
    await Api.toggleComplte(id);
    props.fetch();
  };
  // propsを元にliタグを作る
  const todoList = props.todos.map((todo) => {
    return (
      <ListItem key={todo.id}>
        <Checkbox
          checked={todo.isComplete}
          onChange={() => checkHandle(todo.id)}
        />
        <ListItemIcon></ListItemIcon>
        <ListItemText primary={todo.content} />
        <ListItemSecondaryAction>
          <IconButton
            edge="end"
            aria-label="delete"
            onClick={() => deleteHandle(todo.id)}
          >
            <DeleteIcon />
          </IconButton>
        </ListItemSecondaryAction>
      </ListItem>
    );
  });
  return (
    <div className={classes.root}>
      <h2>あなたのToDo</h2>
      <ul className={classes.ul}>{todoList}</ul>
    </div>
  );
};
export default ToDoList;
