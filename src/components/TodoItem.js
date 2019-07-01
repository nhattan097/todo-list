import React from 'react';
import './TodoItemStyle.css';
import classNames from 'classnames';
import checkImg from '../images/circle-outline.svg';
import checkDoneImg from '../images/check-done.svg';

class TodoItem extends React.Component {
  render() {
    const { item, onItemClicked, delItem } = this.props;
    const { title } = this.props.item;
    return (
      <div
        className={classNames('TodoItem', {
          'TodoItem-completed': item.isCompleted
        })}>
        <img
          src={item.isCompleted ? checkDoneImg : checkImg}
          alt=""
          onClick={() => onItemClicked(item.id)}
        />
        <p>{title}</p>
        <button className="btn-del" onClick={() => delItem(item.id)} />
      </div>
    );
  }
}

export default TodoItem;
