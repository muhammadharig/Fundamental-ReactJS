// popsTypes = a mechanism that ensures that the passed value
//             is of the correct datatype.
//             age: PropsType.number

// defaultProps = default values for props in case they are not
//                passed from the parent component.
//                name: "Guest"

// have 2 types of propstypes
// 1. propsTypes
// 2. defaultProps

import PropTypes from "prop-types";

function Student(props) {
  return (
    <div className="student">
      <p>Name: {props.name}</p>
      <p>Age: {props.age}</p>
      <p>Student: {props.isStudent ? "Yes" : "No"}</p>
    </div>
  );
}

// make a propsType
Student.propTypes = {
  name: PropTypes.string,
  age: PropTypes.number,
  isStudent: PropTypes.bool,
};

Student.defaultProps = {
  name: "Guest",
  age: 0,
  isStudent: false,
};

export default Student;
