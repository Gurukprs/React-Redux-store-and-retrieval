import { useSelector } from 'react-redux';

export default function StudentList() {
  const students = useSelector((state) => state.students.students);

  return (
    <div>
      <h2>Student List</h2>
      <ul>
        {students.map((s, i) => (
          <li key={i}>{s.name} ({s.email})</li>
        ))}
      </ul>
    </div>
  );
}
