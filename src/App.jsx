import { useState } from "react";
import UpdateItem from "./components/UpdateItem";

function App() {
  const [itemId] = useState(1); // Set the item ID dynamically if needed

  return <UpdateItem itemId={itemId} />;
}

export default App;
