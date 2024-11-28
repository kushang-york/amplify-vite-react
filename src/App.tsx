import { useEffect, useState } from "react";
import type { Schema } from "../amplify/data/resource";
import { generateClient } from "aws-amplify/data";
import { Divider, useAuthenticator } from "@aws-amplify/ui-react";
import { AddProduct, Product } from "../ui-components"
import "./App.css"
const client = generateClient<Schema>();

function App() {
  const [todos, setTodos] = useState<Array<Schema["Todo"]["type"]>>([]);
  
  const [productName, setProductName] = useState("");
  const [price, setPrice] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const { user, signOut } = useAuthenticator()
  
  useEffect(() => {
    client.models.Todo.observeQuery().subscribe({
      next: (data) => setTodos([...data.items]),
    });
  }, []);

  function createTodo() {
    client.models.Todo.create({ content: window.prompt("Todo content") });
  }

  function deleteTodo(id: string){
    client.models.Todo.delete({ id })
  }

  function createProduct(){
    console.log(productName, price, imageUrl);
    client.models.Product.create({
      name: productName,
      price: price,
      imageUrl: imageUrl
    })
  }
  const ActionCardOverrides = {
    "image":{
      src: "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg"
    },
    "Button":{
      onClick: () =>{window.location.href = "https://google.com";}
    }
  }
  const AddProductOverrides = {
    "TextField29766922":{
      onChange: (event) => {
        setProductName(event.target.value)
      }
    },
    "TextField29766923":{
      onChange: (event) => {
        setPrice(event.target.value)
      }    
    },
    "TextField29766924": {
      onChange: (event) => {
        setImageUrl(event.target.value)
      }
    },
    "Button": {
      onClick:createProduct
    }
  }


  // Submit handler
  const handleAddProduct = () => {
    console.log("Product Added:", {
      productName,
      price,
      imageUrl,
    });
    // Add your submission logic here (e.g., API call)
  };
  return (
    <main>
      {/* <NavBarHeader width="1000%"/> */}
      <h1>Hello {user?.signInDetails?.loginId}</h1>
      <button onClick={signOut} >Sign out</button>

      {/* <button onClick={createTodo}>+ new</button>
      <ul>
        {todos.map((todo) => (
          <li 
          onClick={() => deleteTodo(todo.id)}
          key={todo.id}>{todo.content}</li>
        ))}
      </ul> */}
      {/* <div>
        🥳 App successfully hosted. Try creating a new todo.
        <br />
        <a href="https://docs.amplify.aws/react/start/quickstart/#make-frontend-updates">
          Review next step of this tutorial.
        </a>
      </div> */}
      <AddProduct overrides={AddProductOverrides} style={{ margin: "10px" }} />
<Divider />
<Product />
      {/* <ActionCard overrides={ActionCardOverrides}/> */}
    </main>
  );
}

export default App;
