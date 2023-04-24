import { useState } from "react";
import { useGetGoodsQuery } from "./redux";

const App = () => {
  const [ count, setCount ] = useState('');
  const { data = [], isLoading } = useGetGoodsQuery(count);

  if (isLoading) {
    return <h2>Loading ...</h2>
  }

  return (
    <div className="container">
      <h1>RTK Query</h1>

      <div className="select-count">
        <select value={ count } onChange={ e => setCount(e.target.value) }>
          <option value="" selected>all</option>
          <option value="1" selected>1</option>
          <option value="2" selected>2</option>
          <option value="3" selected>3</option>
        </select>
      </div>

      <ul>
        {
          data.map(item => <li key={ item.id }>{ item.name }</li>)
        }
      </ul>
    </div>
  );
}

export default App;
