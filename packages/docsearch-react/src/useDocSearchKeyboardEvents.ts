import React from 'react';

export interface UseDocSearchKeyboardEventsProps {
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
  onInput?: (event: KeyboardEvent) => void;
  searchButtonRef?: React.RefObject<HTMLButtonElement>;
}

export function useDocSearchKeyboardEvents({
  isOpen,
  onOpen,
  onClose,
  onInput,
  searchButtonRef,
}: UseDocSearchKeyboardEventsProps) {
  React.useEffect(() => {}, [
    isOpen,
    onOpen,
    onClose,
    onInput,
    searchButtonRef,
  ]);
}
