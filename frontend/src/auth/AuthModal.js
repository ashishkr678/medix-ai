import React from "react";
import Login from "./Login";
import Register from "./Register";

const AuthModal = ({ setIsOpen, authModalType, setAuthModalType, setIsLoggedIn }) => {
  return (
    <>
      <div className="fixed inset-0 z-40 bg-gray-900 bg-opacity-50"></div>
      <div className="fixed inset-0 z-50 flex items-center justify-center">
        <div className="relative bg-white rounded-lg shadow-lg w-full max-w-md mx-auto p-4">
          {authModalType === "login" && (
            <Login
              setIsLoggedIn={setIsLoggedIn}
              setIsAuthModalOpen={setIsOpen}
              setAuthModalType={setAuthModalType}
            />
          )}
          {authModalType === "register" && (
            <Register
              setIsLoggedIn={setIsLoggedIn}
              setIsAuthModalOpen={setIsOpen}
              setAuthModalType={setAuthModalType}
            />
          )}
        </div>
      </div>
    </>
  );
};

export default AuthModal;
