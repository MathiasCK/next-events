import Link from "next/link";

const HomePage = () => {
  return (
    <div>
      <h1>This is a homepage</h1>
      <Link href="/events">Events</Link>
    </div>
  );
};

export default HomePage;
