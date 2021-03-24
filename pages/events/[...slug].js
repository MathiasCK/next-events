import { url } from "../../utils/api-utils";
import EventList from "../../components/events/Event-list";
import ResultsTitle from "../../components/events/results-title";
import Button from "../../components/ui/button/Button";
import { useEffect, useState } from "react";
import useSWR from "swr";
import { useRouter } from "next/router";

const FilteredEvents = () => {
  const [loadedEvents, setLoadedEvents] = useState();
  const router = useRouter();

  const filterData = router.query.slug;

  const { data, error } = useSWR(url);

  useEffect(() => {
    if (data) {
      const events = [];
      for (const key in data) {
        events.push({
          id: key,
          ...data[key],
        });
      }
      setLoadedEvents(events);
    }
  }, [data]);

  if (!loadedEvents) {
    return (
      <div className="full-page">
        <p>Loading ...</p>
      </div>
    );
  }

  const filterYear = filterData[0];
  const filterMonth = filterData[1];

  const numYear = +filterYear;
  const numMonth = +filterMonth;

  if (
    isNaN(numYear) ||
    isNaN(numMonth) ||
    numYear > 2030 ||
    numYear < 2021 ||
    numMonth < 1 ||
    numMonth > 12 ||
    error
  ) {
    return (
      <div className="full-page">
        <p>No events found</p>
        <Button link="/events">Back to all events</Button>
      </div>
    );
  }

  const filteredEvents = loadedEvents.filter((event) => {
    const eventDate = new Date(event.date);
    return (
      eventDate.getFullYear() === numYear &&
      eventDate.getMonth() === numMonth - 1
    );
  });

  if (!filteredEvents || filteredEvents.length === 0) {
    return (
      <div className="full-page">
        <p>No events found for the choosen filter</p>
        <Button link="/events">Back to all events</Button>
      </div>
    );
  }

  const date = new Date(numYear, numMonth - 1);

  return (
    <div>
      <ResultsTitle date={date} />
      <EventList items={filteredEvents} />
    </div>
  );
};

export default FilteredEvents;

//xport const getServerSideProps = async (context) => {
// const { params } = context;
//
// const filterData = params.slug;
//
// const filterYear = filterData[0];
// const filterMonth = filterData[1];
//
// const numYear = +filterYear;
// const numMonth = +filterMonth;
//
// if (
//   isNaN(numYear) ||
//   isNaN(numMonth) ||
//   numYear > 2030 ||
//   numYear < 2021 ||
//   numMonth < 1 ||
//   numMonth > 12
// ) {
//   return {
//     props: {
//       hasErrored: true,
//     },
//   };
// }
//
// const filteredEvents = await getFilteredEvents({
//   year: numYear,
//   month: numMonth,
// });
// return {
//   props: {
//     events: filteredEvents,
//   },
// };
//;
