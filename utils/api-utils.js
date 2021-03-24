const url =
  "https://nextjs-course-4453b-default-rtdb.europe-west1.firebasedatabase.app/events.json";

export const getAllEvents = async () => {
  const response = await fetch(url);
  const data = await response.json();

  const events = [];
  for (const key in data) {
    events.push({
      id: key,
      ...data[key],
    });
  }
  return events;
};

export const getFeaturedEvents = async () => {
  const allEvents = await getAllEvents();
  return allEvents.filter((event) => event.isFeatured);
};
