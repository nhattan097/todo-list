import React from "react";
import TodoItem from "./components/TodoItem";
import ProgressBar from "./components/ProgressBar";
import checkAll from "./images/list.svg";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      todoItems: [
        { id: 1, title: "Get to work", isCompleted: false },
        { id: 2, title: "Go home", isCompleted: false },
        { id: 3, title: "Self study at home", isCompleted: false },
      ],
      newItem: "",
    };
    this.isCheck = false;
  }

  createID = () => {
    return (
      Math.random().toString(36).substring(2) +
      new Date().getTime().toString(36)
    );
  };

  onItemClicked = (id) => {
    const { todoItems } = this.state;
    const result = todoItems.map((item) =>
      id === item.id ? { ...item, isCompleted: !item.isCompleted } : { ...item }
    );
    this.setState(
      {
        todoItems: result,
      },
      this.quantityItemCompleted
    );
  };

  isChecked = () => {
    this.isCheck = !this.isCheck;
  };

  onCheckAllClicked = () => {
    this.isChecked();
    const { todoItems } = this.state;
    todoItems.forEach((item) => {
      item.isCompleted = this.isCheck;
    });
    this.setState({
      todoItems: todoItems,
    });
  };

  addNewItem = (e) => {
    let text = e.target.value;
    if (!text) {
      return;
    }
    text = text.trim();
    if (!text) {
      return;
    }
    this.setState({
      todoItems: [
        { id: this.createID(), title: text, isCompleted: false },
        ...this.state.todoItems,
      ],
      newItem: "",
    });
  };

  onKeyDown = (e) => {
    if (e.keyCode === 13) {
      this.addNewItem(e);
    }
  };

  onChange = (e) => {
    this.setState({
      newItem: e.target.value,
    });
  };

  delItem = (id) => {
    const result = this.state.todoItems.filter((item) => id !== item.id);
    this.setState({
      todoItems: result,
    });
  };

  // quantityItemCompleted = () => {
  //   const { todoItems, itemsCompleted } = this.state;
  //   todoItems.filter(item => {
  //     if (item.isCompleted) {
  //       itemsCompleted.push(item);
  //     }
  //   });
  //   this.setState({
  //     itemsCompleted: todoItems.length - itemsCompleted.length
  //   });
  // };

  render() {
    const { todoItems, newItem } = this.state;
    return (
      <div className="App">
        <h1>todos</h1>
        <div className="wrapper">
          <div className="Header">
            <img src={checkAll} alt="" onClick={this.onCheckAllClicked} />
            <input
              type="text"
              value={newItem}
              onChange={this.onChange}
              placeholder="What needs to be done?"
              onKeyDown={this.onKeyDown}
            />
          </div>
          {todoItems.length !== 0 ? (
            <ProgressBar todoItems={todoItems} />
          ) : null}
          {todoItems.map((item, index) => (
            <TodoItem
              key={index}
              item={item}
              onItemClicked={this.onItemClicked}
              delItem={this.delItem}
            />
          ))}
          <div className="Footer">
            <div className="quantity-list">List items: {todoItems.length}</div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
