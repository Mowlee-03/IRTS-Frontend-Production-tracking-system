import React from 'react';
import { Dialog, DialogContent } from '@mui/material';
import AddOrderPanel from './AddOrderPanel';
import { useProductionDialog } from '../../context/ProductionDialogContext';

const ProductionOrderEntryPanelDialogue = () => {
  const { isOrderPanelOpen, closeDialog, } = useProductionDialog();

  return (
    <Dialog
      open={isOrderPanelOpen}
      onClose={closeDialog}
      maxWidth={false}
      sx={{ '& .MuiDialog-paper': { maxWidth: '1000px' } }}
      fullWidth
      PaperProps={{
        sx: {
          boxShadow: "-5px 5px 30px 0px #ffffff40",
          borderRadius: "20px"
        }
      }}
      BackdropProps={{
        sx: {
          backdropFilter: "blur(2.5px)",
        },
      }}
    >
      <DialogContent sx={{ padding: 0 }}>
        <AddOrderPanel isOpen={isOrderPanelOpen} onClose={closeDialog} />
      </DialogContent>
    </Dialog>
  );
};

export default ProductionOrderEntryPanelDialogue;
