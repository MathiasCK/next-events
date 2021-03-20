import { getAllEvents } from "../../dummy-data";
import EventList from "../../components/events/Event-list";
import EventSearch from "../../components/events/Event-search";
import { useRouter } from "next/router";

const EventPage = () => {
  const router = useRouter();
  const events = getAllEvents();

  const findEventHandler = (year, month) => {
    const fullPath = `/events/${year}/${month}`;
    router.push(fullPath);
  };
  return (
    <div>
      <EventSearch onSearch={findEventHandler} />
      <EventList items={events} />
    </div>
  );
};

export default EventPage;
