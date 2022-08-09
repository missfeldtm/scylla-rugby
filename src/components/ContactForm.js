import React from 'react';
import { useForm, ValidationError } from '@formspree/react';

export default function ContactForm({ open, setOpen }) {
  const [state, handleSubmit] = useForm('xvoypjbe');

  if (state.succeeded) {
    return (
      <div className="modal-success">
        <p>
          Thanks for your submission! Our recruiting officer will reply back to
          you within 48 hours!
        </p>
        <button
          onClick={() => setOpen(!open)}
          onKeyDown={() => setOpen(!open)}
          // eslint-disable-next-line jsx-a11y/no-noninteractive-element-to-interactive-role
          type="button"
          className="hero-box__cta"
        >
          Click Here to close this window
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="name">
        Name:
        <input type="name" name="name" required />
      </label>

      <label htmlFor="email">
        Email:
        <input id="email" type="email" name="email" required />
        <ValidationError prefix="Email" field="email" errors={state.errors} />
      </label>

      <label htmlFor="message">
        Message:
        <textarea id="message" name="message" required />
        <ValidationError
          prefix="Message"
          field="message"
          errors={state.errors}
        />
      </label>

      <button type="submit" disabled={state.submitting}>
        Submit
      </button>
      <ValidationError errors={state.errors} />
    </form>
  );
}
