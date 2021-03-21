import { useRouter } from "next/router";
import { getFilteredEvents } from "../../dummy-data";
import ErrorPage from "../404";
import EventList from "../../components/events/Event-list";
import ResultsTitle from "../../components/events/results-title";
import { Fragment } from "react";
import Button from "../../components/ui/button/Button";

const FilteredEvents = () => {
  const router = useRouter();

  const filterData = router.query.slug;

  if (!filterData) {
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
    numMonth > 12
  ) {
    return <ErrorPage />;
  }

  const filteredEvents = getFilteredEvents({
    year: numYear,
    month: numMonth,
  });

  if (!filteredEvents || filteredEvents.length === 0) {
    return (
      <div className="full-page">
        <p>No events found</p>
        <Button link="/events">Back to all events</Button>
      </div>
    );
  }

  const date = new Date(numYear, numMonth - 1);

  return (
    <Fragment>
      <ResultsTitle date={date} />
      <EventList items={filteredEvents} />
    </Fragment>
  );
};

export default FilteredEvents;
