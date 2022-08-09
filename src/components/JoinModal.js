import React from 'react';
import styled from 'styled-components';
import { useForm, ValidationError } from '@formspree/react';
import Arrow from '../assets/images/arrow.svg';
import ContactForm from './ContactForm';

const JoinModalStyles = styled.div`
  padding: 0;
  position: absolute;
  left: 0;
  top: 0;
  /* z-index: ${({ open }) => (open ? 5 : -1)}; */
  width: 100%;
  z-index: 3;
  transform: ${({ open }) => (open ? 'translateY(0)' : 'translateY(-100%)')};
  transition: transform 0.3s ease-in-out;

  @media (min-width: 760px) {
    width: 100%;
    height: 100vh;
    z-index: 10;
    transform: none;

    display: flex;
    justify-content: center;
    align-items: center;

    background-color: rgba(240, 240, 240, 0.65);

    visibility: ${({ open }) => (open ? 'visible' : 'hidden')};
    opacity: ${({ open }) => (open ? '1' : '0')};

    transition: visibility 0s linear ${({ open }) => (open ? '0ms' : '350ms')},
      opacity 300ms;
    /* transition: visibility 0s linear 0s, opacity 300ms; */
  }

  .join-modal {
    width: 100%;
    box-shadow: 3px 3px 3px 0px rgba(0, 0, 0, 0.75);

    @media (min-width: 760px) {
      width: 65%;
      position: relative;
    }
  }
  div.join {
    position: relative;
    width: 100%;

    background-color: var(--black);
    display: flex;
    align-items: center;
    justify-content: space-between;
    box-shadow: 3px 3px 3px 0px rgba(0, 0, 0, 0.75);
  }
  h2 {
    color: #fff;
    margin: 1em auto 0;
    font-size: calc(28em / 16);
    @media (min-width: 760px) {
      font-size: calc(40em / 16);
      margin: 0.5em auto 0;
    }
  }
  .join-container {
    width: 100%;
    background-color: var(--blackT);
    display: flex;
    flex-direction: column;
    align-items: center;

    @media (min-width: 760px) {
      padding: 2% 0;
    }

    form {
      display: flex;
      flex-direction: column;

      width: 85%;
    }
    label {
      color: #fff;
      margin: 0.5em 0;
      line-height: 1.75;
    }
    input,
    textarea {
      display: block;
      border: none;
      box-shadow: inset 0px 3px 6px 0px rgba(0, 0, 0, 0.47);
      width: 100%;
    }
    input {
      height: 2em;
    }
    textarea {
      height: calc(145em / 16);
      padding: 0.5em;
      font-size: 0.875em;
      line-height: 1.25;
      ::placeholder {
        font-size: 1em;
      }
    }

    button {
      width: 50%;
      background-color: var(--scyllaBlue);
      border: none;
      border-radius: 0.5em;
      margin: 1em auto;
      padding: 0.75em 0;
      font-size: 1em;
      font-family: 'Rubik';
      text-transform: uppercase;
    }
  }
  button.join-footer {
    width: 100%;
    background-color: var(--scyllaBlue);
    padding: 1em 0;
    border-radius: 0;
    display: flex;
    justify-content: center;
    margin: 0;

    @media (min-width: 760px) {
      width: auto;
      padding: 0;
      background-color: transparent;

      position: absolute;
      top: 7%;
      right: 2%;
    }

    P {
      font-family: 'Rubik';
      color: #000;
      text-transform: uppercase;
      display: inline;
    }

    span {
      width: 1.25em;
      margin: 0 0 0 0.5em;
      @media (min-width: 760px) {
        margin: 0;
        padding: 0;
        border: 0;
        background: none;
        position: relative;
        width: 2em;
        height: 2em;

        &:before,
        &:after {
          content: '';
          position: absolute;
          top: 50%;
          left: 0;
          right: 0;
          height: 0.2em;
          background: var(--scyllaBlue);
          border-radius: 0.2em;
        }
        &:before {
          transform: rotate(45deg);
        }

        &:after {
          transform: rotate(-45deg);
        }
      }
    }
    svg {
      width: 1.25em;
    }
  }

  .modal-success {
    display: flex;
    flex-direction: column;
    align-items: center;

    p {
      font-size: 1em;
      text-align: center;
      width: 90%;
      margin: 1em 0;
      line-height: 1.5;
      @media (min-width: 760px) {
        font-size: 1.25em;
        width: 65%;
      }
    }
    button {
      font-size: 0.875em;
      width: 70%;
      @media (min-width: 760px) {
        width: 40%;
        font-size: 1em;
      }
    }
  }
`;
const JoinBTN = styled.div`
  .join-container form button {
    cursor: pointer;
    margin: 1em auto 2em;
  }
  .hero-box {
    &__cta {
      background-color: var(--black);
      width: 100%;
      padding: 0.75em 2em;
      border-radius: 0.5em;
      border: none;

      @media (min-width: 760px) {
        padding: 0.75em 2em;
      }
    }
    &__cta p {
      text-transform: uppercase;
      font-family: 'Rubik';
      font-weight: 700;
      text-align: center;
      font-size: calc(18em / 16);
      color: var(--scyllaBlue);

      @media (min-width: 760px) {
        font-size: 1em;
      }
    }
  }
`;

const Modal = ({ open, setOpen }) => (
  <JoinModalStyles className="join" open={open}>
    <div className="join-modal">
      <div className="join-container">
        <h2>Join Scylla</h2>
        <ContactForm open={open} setOpen={setOpen} />
        <button
          className="join-footer"
          onClick={() => setOpen(!open)}
          onKeyDown={() => setOpen(!open)}
          // eslint-disable-next-line jsx-a11y/no-noninteractive-element-to-interactive-role
          type="button"
        >
          <p className="mobile--only">
            Close
            <span>
              <Arrow />
            </span>
          </p>
          <span className="desktop--only" />
        </button>
      </div>
    </div>
  </JoinModalStyles>
);

const OpenBTN = ({ open, setOpen }) => (
  <button
    onClick={() => setOpen(!open)}
    onKeyDown={() => setOpen(!open)}
    // eslint-disable-next-line jsx-a11y/no-noninteractive-element-to-interactive-role
    type="button"
    className="hero-box__cta"
  >
    <p>Play Rugby</p>
  </button>
);

export default function JoinModal() {
  const [open, setOpen] = React.useState(false);
  const node = React.useRef();
  return (
    <div ref={node}>
      <JoinBTN>
        <OpenBTN open={open} setOpen={setOpen} />

        <Modal open={open} setOpen={setOpen} />
      </JoinBTN>
    </div>
  );
}
