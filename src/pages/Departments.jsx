import { useEffect, useState } from "react";
import api from "../api";

export default function Departments() {
  const [departments, setDepartments] = useState([]);

  useEffect(() => {
    api.get("/departments")
      .then(res => setDepartments(res.data))
      .catch(err => console.error(err));
  }, []);

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">Church Departments</h2>
      <ul className="space-y-2">
        {departments.map(d => (
          <li key={d.id} className="p-2 border rounded">
            {d.name}
          </li>
        ))}
      </ul>
    </div>
  );
}
