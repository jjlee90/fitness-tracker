import React, { useEffect, useState } from "react"
import { Link } from "react-router-dom"

const Record = (props) => (
  <tr>
    <td>{props.record.name}</td>
    <td>{props.record.exerciseName}</td>
    <td>{props.record.maxRep}</td>
    <td>
      <Link to={`/edit/${props.record._id}`}>Edit</Link> |
      <button onClick={() => props.deleteRecord(props.record._id)}>
        Delete
      </button>
    </td>
  </tr>
)
export default function RecordList() {
  const [records, setRecords] = useState([])
  console.log({ records })
  // This method fetches the records from the data base.
  useEffect(() => {
    async function getRecords() {
      const response = await fetch(`http://localhost:3000/record`)

      if (!response.ok) {
        console.log("doink")
        const message = `An error occurred: ${response.statusText}`
        window.alert(message)
        return
      }

      const records = await response.json()
      setRecords(records)
    }
    getRecords()

    return
  }, [records.length])

  // This will delete a record
  async function deleteRecord(id) {
    await fetch(`http://localhost:3000/${id}`, {
      method: "DELETE",
    })

    const newRecords = records.filter((el) => el._id !== id)
    setRecords(newRecords)
  }

  // This method will map out the records on the table
  function recordList() {
    return records.map((record) => {
      return (
        <Record
          record={record}
          deleteRecord={() => deleteRecord(record._id)}
          key={record._id}
        />
      )
    })
  }

  // This following seection will display the table with the records of individuals.
  return (
    <div>
      <h3>Record List</h3>
      <table>
        <thead>
          <tr>
            <th>Name </th>
            <th>Exercise Name</th>
            <th>Max Rep</th>
          </tr>
        </thead>
        <tbody>{recordList()}</tbody>
      </table>
    </div>
  )
}
