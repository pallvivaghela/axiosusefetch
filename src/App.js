import './App.css';
import useFetch from "./useFetch";

function App() {
  // const [data] = useFetch("https://jsonplaceholder.typicode.com/posts");
  // const [data] = useFetch("https://jsonplaceholder.typicode.com/photos");
  // const [data] = useFetch("https://dummyjson.com/carts");
  const [data] = useFetch("https://dummyjson.com/users");
  return (
    <div className="flex App">
      {data &&
        data.map((i) => {
      
          return(
            <>
              {/* <p>{i.userId}</p>
              <p>{i.id}</p>
              <p>{i.title}</p>
              <p>{i.body}</p> */}

              {/* <p>{i.id}</p>
              <p>{i.title}</p>
              <img src={i.url} alt=""/> */}

              {/* <p>{i.id}</p>
              <p>{i.products}</p>
              <p>{i.title}</p>
              <p>{i.carts}</p>
              <p>{i.total}</p> */}


              <p>{i.id}</p>
              <p>{i.firstName}</p>
              <p>{i.lastName}</p>
              <p>{i.maidenName}</p>
              <p>{i.age}</p>
              <p>{i.gender}</p>
              <p>{i.email}</p>
              <p>{i.phone}</p>
              <p>{i.username}</p>
              <p>{i.password}</p>
              <p>{i.birthDate}</p>
              <img src={i.image} alt=""/>
              
            </>
          )
        })}
    </div>
  );
}

export default App;
