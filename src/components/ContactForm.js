import React from 'react';
import { useForm, ValidationError } from '@formspree/react';
import styled from 'styled-components';

const FormStyles = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 2em 0;
  background-color: var(--white);
  border-radius: 0.25em;
  margin: 0;
  box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.25);
  width: 90%;
  @media (min-width: 760px) {
    width: 100%;
  }

  .scylla-form__heading {
    margin: 0 0 1em;
    align-self: flex-start;
    font-size: 1.75em;
    color: var(--black);
    text-transform: uppercase;
    @media (min-width: 760px) {
      font-size: calc(50em / 16);
    }
  }
  .scylla-form__field {
    margin-bottom: 1.2em;
    span {
      margin-left: 0.25em;
    }
  }

  .scylla-form__wrapper {
    width: 90%;
    @media (min-width: 760px) {
      width: 80%;
    }
  }

  .scylla-form__label {
    display: block;
    font-weight: 700;

    font-size: 0.68em;
    color: var(--black);
    margin-bottom: 0.5em;
    @media (min-width: 760px) {
      font-size: 1em;
    }
  }

  .scylla-form__input {
    width: 100%;
    padding: 1em 0;
    margin: 0.5em 0 0;
    text-indent: 0.75em;
    border-radius: 0.68em;
    border: 0.0625em solid var(--black);
    background: white;
    font-weight: 400;
    font-size: 1em;
    color: var(--black);
    outline: none;
    resize: none;
    @media (min-width: 760px) {
      font-size: 1em;
    }
    &::placeholder {
      font-size: 0.875em;
    }
  }
  .scylla-form__input:focus {
    border-color: var(--black);
    box-shadow: 0px 3px 8px rgba(0, 0, 0, 0.05);
  }

  .scylla-form__button {
    font-size: 0.68em;
    border: none;
    border-radius: 0.5em;
    padding: 0.75em;
    background-color: var(--black);
    color: var(--white);
    letter-spacing: 0.08em;
    text-transform: uppercase;
    font-weight: 700;
    @media (min-width: 760px) {
      font-size: 1em;
    }
  }
  .scylla-form__message {
    padding: 2em 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    h2 {
      width: 100%;
      margin: 0.5em auto;
      font-size: 4em;
      text-align: center;
    }

    p {
      width: 100%;
      margin: 0.5em auto;
      font-size: 1.5em;
      font-weight: 500;
      text-transform: uppercase;
      text-align: center;
    }
  }
`;

export default function ContactForm() {
  const [state, handleSubmit] = useForm('xvoypjbe');

  if (state.succeeded) {
    return (
      <div className="modal-success">
        <p>
          Thanks for your submission! Our recruiting officer will reply back to
          you within 48 hours!
        </p>
      </div>
    );
  }

  return (
    <FormStyles>
      <div className="scylla-form__wrapper">
        <h2 className="scylla-form__heading">Join Scylla</h2>
        <form onSubmit={handleSubmit}>
          <div className="scylla-form__field">
            <label htmlFor="name" className="scylla-form__label">
              <span>Name:</span>
              <input
                type="name"
                name="name"
                required
                className="scylla-form__input"
                placeholder="Full Name"
              />
            </label>
          </div>
          <div className="scylla-form__field">
            <label htmlFor="pronouns" className="scylla-form__label">
              <span>Preferred Pronouns:</span>
              <input
                type="pronouns"
                name="pronouns"
                required
                className="scylla-form__input"
                placeholder="Preferred Pronouns"
              />
            </label>
          </div>

          <div className="scylla-form__field">
            <label htmlFor="email" className="scylla-form__label">
              <span>Email:</span>
              <input
                id="email"
                type="email"
                name="email"
                required
                className="scylla-form__input"
                placeholder="Enter a Valid Email"
              />
              <ValidationError
                prefix="Email"
                field="email"
                errors={state.errors}
              />
            </label>
          </div>
          <div className="scylla-form__field">
            <label htmlFor="message" className="scylla-form__label">
              <span>Message:</span>
              <textarea
                rows="10"
                id="message"
                name="message"
                required
                className="scylla-form__input"
                placeholder="Tell Us a bit about yourself"
              />
              <ValidationError
                prefix="Message"
                field="message"
                errors={state.errors}
              />
            </label>
          </div>

          <button
            type="submit"
            disabled={state.submitting}
            className="scylla-form__button"
          >
            Submit
          </button>
          <ValidationError errors={state.errors} />
        </form>
      </div>
    </FormStyles>
  );
}
