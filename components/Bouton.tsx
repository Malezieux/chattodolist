import { Modal } from "./Modal";
import { useState } from "react";

type ButtonProps = {
  onClickAction: ()=>void;
};
export const Bouton = ({ onClickAction }: ButtonProps) => {
  return (
    <>

      <button className="btn btn-outline w-96 h-50 bg-red-500" onClick={onClickAction}>toto</button>
    </>

  )
}
