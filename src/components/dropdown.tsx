import { useDropdown } from "../hook/use-dropDown";
import { useStyles } from "../hook/use-style";
import { DropdownItem } from "../types";

const Dropdown = ({ initialItems }: { initialItems: DropdownItem[] }) => {
  const classes = useStyles();
  const {
    items,
    inputValue,
    isOpen,
    handleInputChange,
    setIsOpen,
    handleKeyDown,
    toggleDropdown,
  } = useDropdown(initialItems);

  return (
    <div className={classes.dropdown}>
      <input
        type="text"
        value={inputValue}
        onChange={handleInputChange}
        onKeyDown={handleKeyDown}
        onFocus={() => setIsOpen(true)}
        placeholder="press enter to add"
        className={classes.input}
      />
      {isOpen && (
        <div className={classes.list}>
          {items.map((item) => (
            <div
              key={item.id}
              className={classes.item}
              onClick={toggleDropdown}
            >
              {item.text}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
export default Dropdown;
