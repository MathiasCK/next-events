import { useRef } from "react";
import Button from "../ui/button/Button";
import classes from "./styles/input.module.css";

const NewsletterRegistration = () => {
  const inputRef = useRef();

  const registrationHandler = async (e) => {
    e.preventDefault();

    const userInput = inputRef.current.value;
    try {
      const snapshot = await fetch("/api/newsletter/", {
        method: "POST",
        body: JSON.stringify({
          email: userInput,
        }),
        headers: {
          "Content-Type": "application/json",
        },
      });
      const response = await snapshot.json();
      console.log(response);
      alert("Signed up!");
      inputRef.current.value = "";
    } catch (error) {
      console.error(error);
    }
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
