import { useDispatch } from 'react-redux';
import { addStudent } from './StudentSlice';
import { useState } from 'react';

export default function StudentForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addStudent({ name, email }));
    setName('');
    setEmail('');
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-2">
      <input
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Name"
        required
      />
      <input
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Email"
        type="email"
        required
      />
      <button type="submit">Add Student</button>
    </form>
  );
}
