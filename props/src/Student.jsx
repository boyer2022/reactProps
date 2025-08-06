
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

export default Student