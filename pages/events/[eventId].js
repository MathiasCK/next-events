import { useRouter } from "next/router";

const SingeEvent = () => {
  const router = useRouter();
  return (
    <div>
      <h1>Single event for {router.query.eventId}</h1>
    </div>
  );
};

export default SingeEvent;
