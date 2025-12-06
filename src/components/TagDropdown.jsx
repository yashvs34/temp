import { useState, useRef, useEffect } from "react";
import { useRecoilState } from "recoil";
import { filterAtom } from "../atoms/filterAtom";

function TagDropdown() {
  const options = ["Organic", "Skincare", "Portable", "Wireless", "Gadgets", "Casual", "Fashion", "Unisex", "Makeup", "Cotton", "Smart", "Accessories", "Beauty", "Fragrance-free", "Formal"]; // unique categories

  const [selected, setSelected] = useState([]);
  const [open, setOpen] = useState(false);
  const containerRef = useRef(null);
  const [refresh, setRefresh] = useRecoilState(filterAtom);

  useEffect(() => {
    if (refresh) {
      setSelected([]);
      setRefresh(false);
    }
  }, [refresh, setRefresh]);

  const toggleOption = (option) => {
    if (selected.includes(option)) {
      setSelected(selected.filter((o) => o !== option));
    } else {
      setSelected([...selected, option]);
    }
  };

  const handleBlur = (e) => {
    if (!containerRef.current.contains(e.relatedTarget)) {
      setOpen(false);
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === "Escape") setOpen(false);
  };

  return (
    <div
      ref={containerRef}
      tabIndex={0}
      onBlur={handleBlur}
      onKeyDown={handleKeyDown}
    >
      <button className="tag_dropdown_button" type="button" onClick={() => setOpen(!open)}>
        {selected.length > 0 ? selected.join(", ") : "Tags"}
      </button>

      {open && (
        <div className="tag_dropdown_container">
          {options.map((option) => (
            <label key={option} style={{ display: "block", cursor: "pointer" }}>
              <input
                type="checkbox"
                checked={selected.includes(option)}
                onChange={() => toggleOption(option)}
                style={{ marginRight: "5px" }}
              />
              {option}
            </label>
          ))}
        </div>
      )}
    </div>
  );
}

export default TagDropdown;
