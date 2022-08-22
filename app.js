const roots = document.querySelector("#root");

const MyButton = () => (
  <button>click</button>
)

const App = (
  <MyButton />
);

ReactDOM.render(<MyButton/>, roots);


