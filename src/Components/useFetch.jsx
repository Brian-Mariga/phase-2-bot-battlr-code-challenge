import { useEffect, useState } from "react";

function useFetch(url) {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [army, setArmy] = useState([]);

  function addToArmy(bot) {
    if (!army.find((b) => b.id === bot.id)) {
      setArmy([...army, bot]);
      console.log(army);
    }
  }

  function removeFromArmy(id) {
    setArmy(army.filter((bot) => bot.id !== id));
  }

  useEffect(() => {
    fetch(url)
      .then((res) => {
        if (!res.ok) {
          throw Error("Could not fetch the data for that resource");
        }
        return res.json();
      })
      .then((data) => {
        setData(data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, [url]);

  return { data, loading, error, army, addToArmy, removeFromArmy };
}

export default useFetch;
