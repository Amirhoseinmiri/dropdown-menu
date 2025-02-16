import { useState } from "react";
import { DropdownItem } from "../types";

export const useDropdown = (initialItems: DropdownItem[]) => {
  const [items, setItems] = useState<DropdownItem[]>(initialItems);
  const [inputValue, setInputValue] = useState<string>("");
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && inputValue.trim()) {
      const newItem = {
        id: Date.now(), // Generate a unique ID using date
        text: inputValue.trim(),
      };
      setItems([...items, newItem]); // add to the list
      setInputValue("");
      setIsOpen(true);
    }
  };

  const toggleDropdown = () => {
    setIsOpen((prev) => !prev);
  };

  return {
    items,
    inputValue,
    isOpen,
    setIsOpen,
    handleInputChange,
    handleKeyDown,
    toggleDropdown,
  };
};
