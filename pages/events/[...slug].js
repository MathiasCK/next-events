import { getFilteredEvents } from "../../utils/api-utils";
import EventList from "../../components/events/Event-list";
import ResultsTitle from "../../components/events/results-title";
import Button from "../../components/ui/button/Button";

const FilteredEvents = (props) => {
  //const filterData = router.query.slug;
  //
  //if (!filterData) {
  //  return (
  //    <div className="full-page">
  //      <p>Loading ...</p>
  //    </div>
  //  );
  //}
  //
  //const filterYear = filterData[0];
  //const filterMonth = filterData[1];
  //
  //const numYear = +filterYear;
  //const numMonth = +filterMonth;

  if (props.hasErrored) {
    return (
      <div className="full-page">
        <p>No events found</p>
        <Button link="/events">Back to all events</Button>
      </div>
    );
  }

  const filteredEvents = props.events;

  if (!filteredEvents || filteredEvents.length === 0) {
    return (
      <div className="full-page">
        <p>No events found for the choosen filter</p>
        <Button link="/events">Back to all events</Button>
      </div>
    );
  }

  const date = new Date(props.date.year, props.date.month - 1);

  return (
    <div>
      <ResultsTitle date={date} />
      <EventList items={filteredEvents} />
    </div>
  );
};

export const getServerSideProps = async (context) => {
  const { params } = context;

  const filterData = params.slug;

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
    return {
      props: {
        hasErrored: true,
      },
    };
  }

  const filteredEvents = await getFilteredEvents({
    year: numYear,
    month: numMonth,
  });
  return {
    props: {
      events: filteredEvents,
      date: {
        year: numYear,
        month: numMonth,
      },
    },
  };
};

export default FilteredEvents;
