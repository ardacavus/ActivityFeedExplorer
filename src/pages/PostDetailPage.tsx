import { useParams } from 'react-router-dom';

export default function PostDetailPage() {
  const { id } = useParams<{ id: string }>();

  return (
    <div>
      <h1>Post Detail Page</h1>
      <p>Post ID: {id}</p>
    </div>
  );
}
