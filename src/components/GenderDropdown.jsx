import { useState, useRef, useEffect } from "react";
import { useRecoilState } from "recoil";
import { filterAtom } from "../atoms/filterAtom";
import '../styles/genderDropdown.css'

function GenderDropdown() {
  const options = ["Male", "Female"];
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

  return (
    <div className="gender_dropdown" ref={containerRef} tabIndex={0} onBlur={handleBlur}>
      <button className="gender_dropdown_button" type="button" onClick={() => setOpen(!open)} >
        Gender
      </button>

      {open && (
        <div className="gender_dropdown_container">
          {options.map((option) => (
            <label key={option} style={{ display: "block" }}>
              <input type="checkbox" checked={selected.includes(option)} onChange={() => toggleOption(option)} />
              {option}
            </label>
          ))}
        </div>
      )}
    </div>
  );
}

export default GenderDropdown;
