import Dropdown from "./components/dropdown";
import { initialData } from "./data/initial-data";
import { useStyles } from "./hook/use-style";

const App = () => {
  const classes = useStyles();
  return (
    <div className={classes.container}>
      <Dropdown initialItems={initialData} />
    </div>
  );
};

export default App;
