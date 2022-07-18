import React, { useState, useEffect } from "react"
import { useParams, useNavigate } from "react-router"

export default function Edit() {
  const [form, setForm] = useState({
    name: "",
    exerciseName: "",
    maxRep: "",
    records: [],
  })

  const params = useParams()
  const navigate = useNavigate()

  useEffect(() => {
    async function fetchData() {
      const id = params.id.toString()
      const response = await fetch(
        `http://localhost:3000/record/${params.id.toString()}`
      )

      if (!response.ok) {
        const message = `An error has occurred: ${response.statusText}`
        window.alert(message)
        return
      }
      const record = await response.json()
      if (!record) {
        window.alert(`Record with id ${id} not found`)
        navigate("/")
        return
      }

      setForm(record)
    }
    fetchData()
    return
  }, [params.id, navigate])

  // These methods will update the state properties
  function updateForm(value) {
    return setForm((prev) => {
      return { ...prev, ...value }
    })
  }

  async function onSubmit(e) {
    e.preventDefault()
    const editedPerson = {
      name: form.name,
      exerciseName: form.exerciseName,
      maxRep: form.maxRep,
    }

    // This will send a post request to update the data in the database.
    await fetch(`http://localhost:3000/update/${params.id}`, {
      method: "POST",
      body: JSON.stringify(editedPerson),
      headers: {
        "Content-Type": "application/json",
      },
    })
    navigate("/")
  }

  // This following section will display the form that takes input from the user to update the data
  return (
    <div>
      <h3>Update Record</h3>

      <form onSubmit={onSubmit}>
        <div>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            value={form.name}
            onChange={(e) => updateForm({ name: e.target.value })}
          />
        </div>

        <div>
          <label htmlFor="name">Exercise Name:</label>
          <input
            type="text"
            id="name"
            value={form.exerciseName}
            onChange={(e) => updateForm({ name: e.target.value })}
          />
        </div>

        <div>
          <label htmlFor="name">Max Rep:</label>
          <input
            type="text"
            id="name"
            value={form.maxRep}
            onChange={(e) => updateForm({ name: e.target.value })}
          />
        </div>

        <div>
          <input type="submit" value="Update Record" />
        </div>
      </form>
    </div>
  )
}
