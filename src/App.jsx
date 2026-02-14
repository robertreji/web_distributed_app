import { useEffect, useRef, useState } from "react"
import * as Y from "yjs"
import * as sdk from "matrix-js-sdk"
import { MatrixProvider } from "@ixo/matrix-crdt"

export default function App() {

  const yTodoref = useRef(null)
  const [text, setText] = useState("")
  const [todos, setTodos] = useState([])

  // Add Todo
  function addTodoPressed() {
    if (!text.trim()) return
    if (!yTodoref.current) return
    const id=crypto.randomUUID()
    const newTodo = new Y.Map()
    newTodo.set("id", id)
    newTodo.set("todo", text)
    newTodo.set("completed", false)

    yTodoref.current.push([newTodo])
    setText("")
  }

  // Remove Todo
  function removeTodo(id) {
    const index = todos.findIndex(t => t.get("id") === id)
    if (index !== -1) {
      yTodoref.current.delete(index, 1)
    }
  }

  // Toggle Completed
  function toggleCompleted(id) {
    const index = todos.findIndex(t => t.get("id") === id)
    if (index !== -1) {
      const todo = yTodoref.current.get(index)
      todo.set("completed", !todo.get("completed"))
    }
  }

  useEffect(() => {
    async function setup() {
      try {

        const matrixClient = sdk.createClient({
          baseUrl: "https://matrix.org",
          accessToken: "mat_UOIp1Bq9VGWuBQmnsUouxVyuysMCMJ_iFSSg3",
          userId: "@oggy2005:matrix.org",
        })

        matrixClient.canSupportVoip = false
        matrixClient.clientOpts = { lazyLoadMembers: true }

        const yDoc = new Y.Doc()

        const provider = new MatrixProvider(yDoc, matrixClient, {
          type: "alias",
          alias: "#room-adarsh:matrix.org"
        })

        await provider.initialize()

        const yTodoArr = yDoc.getArray("todos")
        yTodoref.current = yTodoArr

        function syncUI() {
          setTodos(yTodoArr.toArray())
        }

        yTodoArr.observeDeep(syncUI)
        syncUI()

      } catch (err) {
        console.error("Matrix setup failed:", err)
      }
    }

    setup()
  }, [])

  return (
    <div style={styles.container}>

      <input
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Enter item"
        style={styles.input}
      />

      <button onClick={addTodoPressed} style={styles.button}>
        Add Item
      </button>

      <div style={styles.list}>
        {todos.map((item) => (
          <div key={item.get("id")} style={styles.todoItem}>

            <span
              onClick={() => toggleCompleted(item.get("id"))}
              style={{
                textDecoration: item.get("completed") ? "line-through" : "none",
                cursor: "pointer",
                flex: 1
              }}
            >
              {item.get("todo")}
            </span>

            <button
              onClick={() => removeTodo(item.get("id"))}
              style={styles.deleteBtn}
            >
              ❌
            </button>

          </div>
        ))}
      </div>

    </div>
  )
}

const styles = {
  container: {
    minHeight: "100vh",
    backgroundColor: "#111",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    paddingTop: "80px",
    color: "white"
  },
  input: {
    width: "300px",
    padding: "10px",
    borderRadius: "10px",
    border: "none",
    outline: "none"
  },
  button: {
    marginTop: "15px",
    padding: "10px 20px",
    borderRadius: "8px",
    border: "none",
    backgroundColor: "green",
    color: "white",
    fontWeight: "bold",
    cursor: "pointer"
  },
  list: {
    marginTop: "20px",
    width: "300px"
  },
  todoItem: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: "10px",
    padding: "8px",
    backgroundColor: "#222",
    borderRadius: "8px"
  },
  deleteBtn: {
    marginLeft: "10px",
    backgroundColor: "red",
    border: "none",
    borderRadius: "6px",
    color: "white",
    cursor: "pointer"
  }
}