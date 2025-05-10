// src/contexts/ProductionDialogContext.tsx
import React, { createContext, useContext, useState } from 'react';

const ProductionDialogContext = createContext(null);

export const useProductionDialog = () => useContext(ProductionDialogContext);

export const ProductionDialogProvider = ({ children }) => {
  const [isOrderPanelOpen, setIsOrderPanelOpen] = useState(false);
  const [entryMethod, setEntryMethod] = useState("manual")
  const [showFileUpload, setShowFileUpload] = useState(false)
  const openDialog = () => setIsOrderPanelOpen(true);
  const closeDialog = () => setIsOrderPanelOpen(false);

  return (
    <ProductionDialogContext.Provider 
    value={{ 
      isOrderPanelOpen, 
      openDialog, 
      closeDialog,
      entryMethod,
      setEntryMethod,
      showFileUpload,
      setShowFileUpload
      }}>
      {children}
    </ProductionDialogContext.Provider>
  );
};
