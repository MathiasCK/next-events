import { useRouter } from "next/router";
import Link from "next/link";
const EvenPage = () => {
  const events = [
    {
      name: "Event1",
      location: "Location 1",
      description: "Lorem ipsum dolor",
      id: 1,
    },
    {
      name: "Event2",
      location: "Location 2",
      description: "Lorem ipsum dolor",
      id: 1,
    },
    {
      name: "Event3",
      location: "Location 3",
      description: "Lorem ipsum dolor",
      id: 1,
    },
  ];
  return (
    <div>
      <h1>This is an event page</h1>
      <ul>
        {events.map((event) => (
          <li key={event.id}>
            <Link href={`events/${event.name}`}>{event.location}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default EvenPage;
