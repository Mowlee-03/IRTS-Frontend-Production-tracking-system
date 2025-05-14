import React from 'react'
import { Dialog, DialogTitle, DialogContent, DialogActions, Button } from '@mui/material'
import { X } from 'lucide-react'

const ConfirmModal = ({
  open,
  onClose,
  onConfirm,
  title = 'Confirm Action',
  message = 'Are you sure you want to proceed?',
  confirmText = 'Confirm',
  cancelText = 'Cancel',
  confirmButtonColor = 'primary',
}) => {
  return (
    <Dialog
      open={open}
      onClose={onClose}
      PaperProps={{
        sx: {
          borderRadius: '12px',
          boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)',
          maxWidth: '400px',
          width: '100%',
        },
      }}
    >
      <div className="relative bg-white">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-gray-400 hover:text-gray-600 transition-colors"
        >
          <X size={20} />
        </button>

        {/* Title */}
        <DialogTitle
          sx={{
            fontSize: '1.25rem',
            fontWeight: 600,
            color: '#1E293B',
            padding: '16px 24px',

          }}
        >
          {title}
        </DialogTitle>

        {/* Content */}
        <DialogContent sx={{ padding: '20px 24px' }}>
          <p className="text-sm text-gray-600">{message}</p>
        </DialogContent>

        {/* Actions */}
        <DialogActions
          sx={{
            padding: '16px 24px',

            display: 'flex',
            justifyContent: 'space-between',
          }}
        >
          <Button
            onClick={onClose}
            variant="outlined"
            sx={{
              textTransform: 'none',
              borderRadius: '8px',
              color: '#6B7280',
              borderColor: '#D1D5DB',
              '&:hover': { borderColor: '#9CA3AF', backgroundColor: '#F9FAFB' },
            }}
          >
            {cancelText}
          </Button>
          <Button
            onClick={onConfirm}
            variant="contained"
            color={confirmButtonColor}
            sx={{
              textTransform: 'none',
              borderRadius: '8px',
            //   backgroundColor: '#8B5CF6',
            //   '&:hover': { backgroundColor: '#7C3AED' },
            }}
          >
            {confirmText}
          </Button>
        </DialogActions>
      </div>
    </Dialog>
  )
}

export default ConfirmModal
