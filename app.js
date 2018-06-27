// var GroceryList = (props) => {
//
//   var onListItemClick = (event) => {
//     console.log('I got clicked');
//   };
//
//   return (
//   <ul>
//       <li onClick={onListItemClick}>{props.groceries[0]}</li>
//       <li>{props.groceries[1]}</li>
//     </ul>
//   );
// };

class GroceryListItem extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      done: false,
      hover: false
    };
  }

  onGroceryItemClick() {
    this.setState({
      done: !this.state.done
    });
  }

  onGroceryItemHover() {
    this.setState({
      hover: true
    });
  };

  onGroceryItemLeave() {
    this.setState({
      hover: false
    });
  };


  render() {
    var style = {
      textDecoration: this.state.done ? 'line-through' : 'none',
      fontWeight: this.state.hover ? 'bold' : 'normal'
    };
    return (
      <li
        style={style}
        onClick={this.onGroceryItemClick.bind(this)}
        onMouseEnter={this.onGroceryItemHover.bind(this)}
        onMouseLeave={this.onGroceryItemLeave.bind(this)}
      >
        {this.props.item}
      </li>
    );
  }
}

var GroceryList = (props) => (
  <ul>
    {props.groceries.map(item =>
      <GroceryListItem item={item} />
    )}
  </ul>
);

var App = () => (
  <div>
    <h2>My Grocery List</h2>
    <GroceryList groceries={['list item 1', 'list item 2', 'list item 3']}/>
  </div>
);

ReactDOM.render(<App />, document.getElementById("app"));
