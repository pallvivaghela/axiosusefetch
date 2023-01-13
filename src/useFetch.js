import { useState, useEffect } from "react";
import axios from "axios";

const useFetch = (url) => {
  const [data, setchar] = useState(null);

  // useEffect(() => {
  //   axios.get(url)
  //   .then(res => {
  //     const persons = res.data;
  //     this.setState({ persons });
  //   })
  // }, [url]);

  useEffect(() => {

    axios.get(url)
      .then(function (res) {
        // handle success
        setchar(res.data.users)
        console.log(res.data);
      })


     .catch(function (error) {
        // handle error
        console.log(error);
      })
  },[url]);
 

  return [data];
};

export default useFetch;