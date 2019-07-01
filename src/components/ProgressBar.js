import React from 'react';

class ProgressBar extends React.Component {
  percentNumber = () => {
    const { todoItems } = this.props;
    let temp = 0;
    todoItems.map(item => {
      if (item.isCompleted) {
        temp++;
      }
    });
    return ((temp / todoItems.length) * 100).toFixed(0);
  };

  render() {
    return (
      <div className="Wrapper-progress">
        <span className="number-percent">{this.percentNumber()}%</span>
        <div className="block-percent">
          <div
            className="run-percent"
            style={{
              width: `${this.percentNumber()}%`,
              background: `${this.percentNumber() > 99 ? '#25ae88' : '#5ba4cf'}`
            }}
          />
        </div>
      </div>
    );
  }
}

export default ProgressBar;
