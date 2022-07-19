import React, { useState } from "react"
import { useNavigate, Link } from "react-router-dom"

export default function Create() {
  const [form, setForm] = useState({
    name: "",
    exerciseName: "",
    maxRep: "",
  })
  const navigate = useNavigate()

  // These methods will update the state properties.
  function updateForm(value) {
    return setForm((prev) => {
      return { ...prev, ...value }
    })
  }

  // This funciton will handle the submission
  async function onSubmit(e) {
    e.preventDefault()

    // When a post request is sent to the create url, we'll add a new record to the database
    const newPerson = { ...form }

    await fetch("http://localhost:3000/record/add", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newPerson),
    }).catch((error) => {
      window.alert(error)
      return
    })

    setForm({ name: "", exerciseName: "", maxRep: "" })
    navigate("/")
  }

  // This section will display the form that takes the input from the user

  return (
    <div>
      <Link to="/">Home</Link>
      <h3>Create New Record</h3>
      <form onSubmit={onSubmit}>
        <div>
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            value={form.name}
            onChange={(e) => updateForm({ name: e.target.value })}
          />
        </div>
        <div>
          <label htmlFor="exerciseName">Exercise Name</label>
          <input
            type="text"
            id="exerciseName"
            value={form.exerciseName}
            onChange={(e) => updateForm({ exerciseName: e.target.value })}
          />
        </div>
        <div>
          <label htmlFor="maxRep">Max Rep</label>
          <input
            type="text"
            id="maxRep"
            value={form.maxRep}
            onChange={(e) => updateForm({ maxRep: e.target.value })}
          />
        </div>
        <input type="submit" value="Add exercise" />
      </form>
    </div>
  )
}
