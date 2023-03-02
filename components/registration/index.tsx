/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import { Fragment, useEffect, useRef, useState } from "react";
import { ReactNode } from "react";

type Children = {
  form: ReactNode;
  closeModal: Function;
};

export const Registration = ({ form, closeModal }: Children) => {
  return (
    <>
      <div className="flex justify-center items-center w-full">{form}</div>
      <br />
      <div className="w-full flex justify-center mt-[-1rem]">
        <a href="https://rzp.io/l/INSTINCTS-2023">
          <button className="button">Payment</button>
        </a>
      </div>
      <button className="button" onClick={() => {
        closeModal();
      }}>Back</button>
    </>
  );
};
