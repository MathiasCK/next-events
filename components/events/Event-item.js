import Button from "../ui/button/Button";
import classes from "./styles/event.module.css";
import DateIcon from "../icons/date-icon";
import AddressIcon from "../icons/address-icon";
import ArrowRightIcon from "../icons/arrow-right-icon";
import Image from "next/image";

const EventItem = (props) => {
  const { title, image, date, location, id } = props;

  const redableDate = new Date(date).toLocaleDateString("en-US", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  const formatedAdress = location.replace(", ", "\n");

  const exploreLink = `/events/${id}`;
  return (
    <li className={classes.item}>
      <Image src={"/" + image} alt="Event" width={340} height={160} />
      <div className={classes.content}>
        <div className={classes.summary}>
          <h2>{title}</h2>
          <div className={classes.information}>
            <DateIcon />
            <time>{redableDate}</time>
          </div>
          <div className={classes.information}>
            <AddressIcon />
            <p>{formatedAdress}</p>
          </div>
        </div>
        <div className={classes.actions}>
          <Button link={exploreLink}>
            <span>Explore Event</span>
            <span className={classes.icon}>
              <ArrowRightIcon />
            </span>
          </Button>
        </div>
      </div>
    </li>
  );
};

export default EventItem;
