import Link from "next/link";
import EventList from "../components/events/Event-list";
import { getFeaturedEvents } from "../dummy-data";

const HomePage = () => {
  const featuredEvents = getFeaturedEvents();
  return (
    <div>
      {/*<h1>This is a homepage</h1> */}
      <EventList items={featuredEvents} />
    </div>
  );
};

export default HomePage;
