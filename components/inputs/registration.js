import { useRef } from "react";
import Button from "../ui/button/Button";
import classes from "./styles/input.module.css";

const NewsletterRegistration = () => {
  const inputRef = useRef();

  const registrationHandler = (e) => {
    e.preventDefault();

    const userInput = inputRef.current.value;

    fetch("/api/newsletter", {
      method: "POST",
      body: JSON.stringify({
        email: userInput,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => console.log(data));

    // fetch user input (state or refs)
    // optional: validate input
    // send valid data to API
    alert("Signed up!");
    inputRef.current.value = "";
  };

  return (
    <section className={classes.newsletter}>
      <h2>Sign up to stay updated!</h2>
      <form onSubmit={registrationHandler}>
        <div className={classes.flex}>
          <input
            type="email"
            id="email"
            placeholder="Your email"
            aria-label="Your email"
            ref={inputRef}
          />
          <Button type="submit">Register</Button>
        </div>
      </form>
    </section>
  );
};

export default NewsletterRegistration;
