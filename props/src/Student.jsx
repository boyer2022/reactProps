import PropTypes from 'type-check'

//  propTypes = a mechanism that ensures that the passed value
//                  is of the correct datatype.
//                  age: PropTypes.number

function Student(props) {

    return(
        <div className="student">
            <p>Name: {props.name}</p>
            <p>Age: {props.age}</p>
            {/* Boolean requires ternary operator (?) and return statement as string literal  with OR (:) */}
            <p>Student: {props.isStudent ? "Yes" : "No"}</p>
        </div>
    )

}
// Using propTypes- 
//              be sure to import from node_modules folder, propTypes (type-check...?)
Student.propTypes = {
    name: PropTypes.string,
    age: PropTypes.number,
    isStudent: PropTypes.bool,
}
export default Student