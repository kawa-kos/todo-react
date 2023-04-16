import React from "react";

const style = {
  backgroundColor: "#c6ff8f",
  width: "400px",
  height: "30px",
  padding: "8px",
  margin: "8px",
  borderRadius: "8px"
};

export const InputTodo = (props) => {
  const { todoText, onChangeTodoText, onCliclAdd, disabled } = props;
  return (
    <div style={style}>
      <input
        placeholder="TODOを入力"
        value={todoText}
        onChange={onChangeTodoText}
        disabled={disabled}
      />
      <button onClick={onCliclAdd}>追加</button>
    </div>
  );
};
