import axios from "axios";


const accessToken='eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2NjQxYzkzZjEzMmFmMmIxMmMzYjE2OTQiLCJ1c2VybmFtZSI6ImQiLCJpYXQiOjE3MTU2NjQyNDB9.EpxS8ieG8N81XWcZq90yw19tmS7oZ20a6D8IBZqeps8'

const authAxios=axios.create({
  baseURL:'https://d623-2401-4900-52be-c5f4-1995-8b38-5aa3-21a7.ngrok-free.app',
  headers:{"ngrok-skip-browser-warning": "skip-browser-warning",Authorization:`Bearer ${accessToken}`}
})

export default authAxios