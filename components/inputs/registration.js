import { useRef, useContext } from "react";
import NotificationContext from "../../store/notification.context";

import Button from "../ui/button/Button";
import classes from "./styles/input.module.css";

const NewsletterRegistration = () => {
  const inputRef = useRef();
  const notificationCtx = useContext(NotificationContext);

  const registrationHandler = async (e) => {
    e.preventDefault();

    const userInput = inputRef.current.value;

    notificationCtx.showNotification({
      title: "Signing up!",
      message: "Registering for newsletter",
      status: "pending",
    });

    fetch("/api/newsletter", {
      method: "POST",
      body: JSON.stringify({
        email: userInput,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => {
        if (response.ok) {
          return response.json();
        }
        return response.json().then((data) => {
          throw new Error(data.message || "Something went wrong!");
        });
      })
      .then((data) => {
        console.log(data);
        notificationCtx.showNotification({
          title: "Signed up!",
          message: "Succesfully registered for newsletter",
          status: "success",
        });
        inputRef.current.value = "";
      })
      .catch((error) => {
        notificationCtx.showNotification({
          title: "Error signing up!",
          message: error.message || "Error registering for newsletter",
          status: "error",
        });
      });
  };

  return (
    <section className={classes.newsletter}>
      <h2>Sign up to stay updated!</h2>
      <form onSubmit={registrationHandler}>
        <div className={classes.flex}>
          <div className={classes.relative}>
            <input
              type="email"
              id="email"
              placeholder="Your email"
              aria-label="Your email"
              ref={inputRef}
            />
            <div className={classes.border}></div>
          </div>
          <Button type="submit">Register</Button>
        </div>
      </form>
    </section>
  );
};

export default NewsletterRegistration;
