import * as Y from "yjs"
import { create } from "zustand"
import { IndexeddbPersistence } from "y-indexeddb"

const ROOM_NAME = "patients-room"

const useYdoc = create((set, get) => {
  const yDoc = new Y.Doc()

  const persistence = new IndexeddbPersistence(ROOM_NAME, yDoc)

  persistence.whenSynced.then(() => {
    console.log("Local Yjs data restored")
  })

  return {
    yDoc,
    persistence,

    getDoc: () => get().yDoc,

    resetDoc: () => {
      const { yDoc, persistence } = get()

      persistence.destroy()
      yDoc.destroy()

      const newDoc = new Y.Doc()
      const newPersistence = new IndexeddbPersistence(ROOM_NAME, newDoc)

      set({
        yDoc: newDoc,
        persistence: newPersistence,
      })
    },
  }
})

export { useYdoc }