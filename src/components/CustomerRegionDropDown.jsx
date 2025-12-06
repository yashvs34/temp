import { useState, useRef, useEffect } from "react";
import { useRecoilState } from "recoil";
import { filterAtom } from "../atoms/filterAtom";

function CustomerRegionDropdown() {
  const options = ["Central", "East", "West", "North", "South"];

  const [selected, setSelected] = useState([]);
  const [refresh, setRefresh] = useRecoilState(filterAtom);
  const [open, setOpen] = useState(false);
  const containerRef = useRef(null);

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
      className="customer_region_dropdown" ref={containerRef} tabIndex={0} onBlur={handleBlur} onKeyDown={handleKeyDown}>
      <button className="customer_region_dropdown_button" type="button" onClick={() => setOpen(!open)}>
        {selected.length > 0 ? selected.join(", ") : "Customer Regions"}
      </button>

      {open && (
        <div className="customer_region_dropdown_container" >
          {options.map((option) => (
            <label key={option} style={{ display: "block", cursor: "pointer" }}>
              <input type="checkbox" checked={selected.includes(option)} onChange={() => toggleOption(option)} style={{ marginRight: "5px" }}/>
              {option}
            </label>
          ))}
        </div>
      )}
    </div>
  );
}

export default CustomerRegionDropdown;
