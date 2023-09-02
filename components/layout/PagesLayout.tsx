"use client";

import { useEffect, useState } from "react";
import { Footer, Navbar } from "../sections";
import LoadingModal from "../modals/LoadingModal";

interface PagesLayoutProps {
  children: React.ReactNode;
}
const PagesLayout: React.FC<PagesLayoutProps> = ({ children }) => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [isLoadingComplete, setIsLoadingComplete] = useState<boolean>(false);

  const handleLoadingComplete = () => {
    setIsLoadingComplete(true);
  };

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    // Set the modalClosed flag to false when the modal is closed
    localStorage.setItem("modalClosed", "false");
  };

  useEffect(() => {
    // Check if the modalClosed flag is false on initial load or page refresh
    const modalClosed = localStorage.getItem("modalClosed");
    if (modalClosed === "false") {
      openModal();
    }

    // Add a beforeunload event listener to reset modalClosed when the browser is refreshed
    const handleBeforeUnload = () => {
      localStorage.setItem("modalClosed", "false");
    };

    window.addEventListener("beforeunload", handleBeforeUnload);

    return () => {
      // Remove the beforeunload event listener when the component is unmounted
      window.removeEventListener("beforeunload", handleBeforeUnload);
    };
  }, []);
  return (
    <>
      <LoadingModal
        closeModal={closeModal}
        isOpen={isModalOpen}
        onComplete={handleLoadingComplete}
      />
      {isLoadingComplete && (
        <>
          <Navbar />
          <main>{children}</main>
          <Footer />
        </>
      )}
    </>
  );
};

export default PagesLayout;
