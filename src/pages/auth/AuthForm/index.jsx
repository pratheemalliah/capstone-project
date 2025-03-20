import React, { useState } from "react";
import Field from "./Field";

const AuthForm = ({ fields, submitButtonLabel, onSubmit }) => {
  const [values, setValues] = useState(() => {
    const initialState = {};
    for (let field of fields) {
      initialState[field.label] = "";
    }
    return initialState;
  });

  const [loading, setLoading] = useState(false);

  return (
    <form
      className="bg-white border border-slate-200 rounded-lg m-4 p-4"
      onSubmit={async (e) => {
        e.preventDefault();
        setLoading(true);
        await onSubmit(values);
        setLoading(false);
      }}
    >
      {fields.map((field) => (
        <Field
          key={field.label}
          label={field.label}
          type={field.type}
          value={values[field.label]}
          onChange={(e) => {
            setValues({ ...values, [field.label]: e.target.value });
          }}
        />
      ))}
      <button className="relative w-full py-2 rounded-lg text-white bg-emerald-700 mt-4">
        {submitButtonLabel}
        {loading && (
          <div className="absolute top-0 right-9 flex items-center h-full right-4">
            <div className="fa-solid fa-spinner-third animate-spin text-green-300 text-xl"></div>
          </div>
        )}
      </button>
    </form>
  );
};

export default AuthForm;
