import React, { useState } from "react";
import { useMultiStepForm } from "./useMultiStepForm";
import UserForm from "./UserForm";
import AddressForm from "./AddressForm";
import AccountForm from "./AccountForm";

const ContractForms = ({ onDone }) => {
  const [data, setData] = useState({
    firstName: "",
    lastName: "",
    age: "",
    street: "",
    city: "",
    state: "",
    zip: "",
    email: "",
    password: "",
  });

  function updateFields(fields) {
    setData((prev) => ({ ...prev, ...fields }));
  }

  const { steps, step, currentStepIndex, isFirstStep, isLastStep, back, next } =
    useMultiStepForm([
      <UserForm {...data} updateFields={updateFields} />,
      <AddressForm {...data} updateFields={updateFields} />,
      <AccountForm {...data} updateFields={updateFields} />,
    ]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!isLastStep) return next();
    // final submit — you can replace with real submit logic
    console.log("Form submitted", data);
    if (onDone) onDone(data);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="mb-4">
        <div className="text-sm text-gray-500 mb-2">
          Step {currentStepIndex + 1} of {steps.length}
        </div>
        {step}
      </div>

      <div className="flex gap-2 justify-end mt-4">
        {!isFirstStep && (
          <button type="button" onClick={back} className="px-4 py-2 rounded-md border">
            Back
          </button>
        )}

        <button type="submit" className="px-4 py-2 rounded-md bg-teal-600 text-white">
          {isLastStep ? "Finish" : "Next"}
        </button>
      </div>
    </form>
  );
};

export default ContractForms;
