'use client';
import { useSession, signOut } from 'next-auth/react';

export default function Dashboard() {
  const { data: session, status } = useSession();

  if (status === 'loading') {
    return <p>Loading...</p>;
  }

  if (!session) {
    return (
      <div>
        <h2>You are not signed in</h2>
        <a href="/signin">Sign in</a>
      </div>
    );
  }

  return (
    <div>
      <h2>Welcome, {session.user.name}</h2>
      <img src={session.user.image} alt={session.user.name} />
      <button onClick={() => signOut()}>Sign Out</button>
    </div>
  );
}