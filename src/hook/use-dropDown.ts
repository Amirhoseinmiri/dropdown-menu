import { useEffect, useState } from "react";
import { DropdownItem } from "../types";

export const useDropdown = (initialItems: DropdownItem[]) => {
  const loadItems = (): DropdownItem[] => {
    const savedItems = localStorage.getItem("dropdownItems");
    if (savedItems) {
      return JSON.parse(savedItems); // Parse saved items from localStorage
    }
    return initialItems; // Fallback to initial items
  };

  const [items, setItems] = useState<DropdownItem[]>(loadItems());
  const [inputValue, setInputValue] = useState<string>("");
  const [isOpen, setIsOpen] = useState<boolean>(false);

  // Save items to localStorage whenever they change
  useEffect(() => {
    localStorage.setItem("dropdownItems", JSON.stringify(items));
  }, [items]);

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
