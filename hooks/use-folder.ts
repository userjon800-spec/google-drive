import { create } from "zustand";
type FolderStore = {
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
};
export const useFolder = create<FolderStore>((set) => {
  return {
    isOpen: false,
    onOpen() {
      return set({ isOpen: true });
    },
    onClose() {
      return set({ isOpen: false });
    },
  };
});
