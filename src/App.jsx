import { useEffect } from "react";
import { useState } from "react";
import Movies from "./Movies";
import Button from "./Button";
import Characters from "./Characters";
function App() {
  const API_URL = "https://ghibliapi.vercel.app/";
  const [reqType, setReqType] = useState("films");
  const [items, setItems] = useState([]);

  useEffect(() => {
    const fetchGhibli = async () => {
      try {
        const response = await fetch(`${API_URL}${reqType}`);
        if (!response.ok) throw Error("Data is not fetched successfully");
        const data = await response.json();
        setItems(data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchGhibli();
  }, [reqType]);
  console.log(items)
  return (
    <div className="App ">
      <main className="p-5">
        <h1 className="text-3xl font-bold underline mb-10">Ghibli Studios!</h1>
        <Button reqType={reqType}  setReqType = {setReqType} items={items} setItems={setItems} />
        <Movies items={items} setItems={setItems} reqType={reqType} setReqType = {setReqType}/>
        {/* <Characters items={items} /> */}
      </main>
    </div>
  );
}

export default App;
