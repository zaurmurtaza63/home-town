import React, { createContext, useState, useContext } from "react";

const AuthModalContext = createContext(null);

export const AuthModalProvider = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [formType, setFormType] = useState("login");
  const [showForgot, setShowForgot] = useState(false);

  const openAuth = (type = "login") => {
    setFormType(type);
    setShowForgot(false);
    setIsOpen(true);
  };

  const closeAuth = () => {
    setIsOpen(false);
    setShowForgot(false);
  };

  return (
    <AuthModalContext.Provider
      value={{ isOpen, openAuth, closeAuth, formType, setFormType, showForgot, setShowForgot }}
    >
      {children}
    </AuthModalContext.Provider>
  );
};

export const useAuthModal = () => useContext(AuthModalContext);

export default AuthModalContext;
