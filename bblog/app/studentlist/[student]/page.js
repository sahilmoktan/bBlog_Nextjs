'use client'

export default function student({params}) {
    console.log(params)
  return (
    <div>
        <h1>Student Details</h1>
        <br/>
        <h3> Name:{params.student}</h3>

    </div>
  )
}
