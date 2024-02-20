import { useState } from "react";

const Checkbox = () => {
  const [lang, setLang] = useState([
    { label: "HTML", isChecked: false },
    { label: "CSS", isChecked: false },
    { label: "JS", isChecked: false },
    { label: "React", isChecked: false },
  ]);

  const handleChange = (index) => {
    // const updatedCheckboxes = [...lang];
    // updatedCheckboxes[index].isChecked = !updatedCheckboxes[index].isChecked;
    // setLang(updatedCheckboxes);

    setLang((prevState) =>
      [...prevState].map((lang, i) =>
        i === index ? { ...lang, isChecked: !lang.isChecked } : { ...lang }
      )
    );
  };

  return (
    <div>
      {/* LenGoToHell  */}
      {/* array.filter uvek vraca neki niz */}
      {/* <h1>I know {lang.filter((lang) => lang.isChecked).length} languages</h1> */}
      <h1>
        {/* [].length vraca false */}I know{" "}
        {lang.filter((lang) => lang.isChecked).length || "nothing"}{" "}
      </h1>
      {lang.map((lang, index) => (
        <div key={index}>
          <label>
            <input
              type="checkbox"
              checked={lang.isChecked}
              onChange={() => handleChange(index)}
            />
            {lang.label}
          </label>
        </div>
      ))}
    </div>
  );
};

export default Checkbox;
