import React, { useState } from "react";
import { FilterContainer, Select } from "./styles/Filter.styled";
import { useFilterUpdate } from "../FilterContext";
import { useEffect } from "react";

const Filter = () => {
  const getValues = useFilterUpdate();
  const [year, setYear] = useState("");
  const [exam, setExam] = useState("");
  const [sem, setSem] = useState("");

  useEffect(() => {
    getValues({ year, exam, sem });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [year, sem, exam]);
  return (
    <FilterContainer>
      <h3>Filter</h3>
      <label style={{ marginTop: "10px" }} htmlFor="year">
        Year
      </label>
      <Select onChange={(e) => setYear(e.target.value)} id="year">
        <option value="">All</option>
        <option value={2021}>2021</option>
        <option value={2020}>2020</option>
        <option value={2019}>2019</option>
        <option value={2018}>2018</option>
        <option value={2017}>2017</option>
        <option value={2016}>2016</option>
      </Select>
      <label style={{ marginTop: "10px" }} htmlFor="exam">
        Exam
      </label>
      <Select onChange={(e) => setExam(e.target.value)} id="exam">
        <option value="">All</option>
        <option value={"ut1"}>UT1</option>
        <option value={"ut2"}>UT2</option>
        <option value={"ese"}>ESE</option>
      </Select>
      <label style={{ marginTop: "10px" }} htmlFor="sem">
        Semester
      </label>
      <Select onChange={(e) => setSem(e.target.value)} id="sem">
        <option value="">All</option>
        <option value={"winter"}>Winter</option>
        <option value={"summer"}>Summer</option>
      </Select>
    </FilterContainer>
  );
};

export default Filter;

/*
users= users.filter(item => {
  for (let key in filter) {
    if (item[key] === undefined || item[key] != filter[key])
      return false;
  }
  return true;
});

console.log(users)
*/
