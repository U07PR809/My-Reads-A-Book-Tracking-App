import React from "react";

const BookShelfChanger = props => {
  const { book, handleChange } = props;
  const { shelf } = book;

  const optionValues = [
    { value: "move", text: "Move to..." },
    { value: "currentlyReading", text: "Currently Reading" },
    { value: "wantToRead", text: "Want to Read" },
    { value: "read", text: "Read" },
    { value: "none", text: "None" }
  ];

  return (
    <div className="book-shelf-changer">
      <select
        onChange={event => handleChange(book, event.target.value)}
        value={shelf ? shelf : "None"}
      >
        {optionValues.map(option => (
          <option
            key={option.value}
            value={option.value}
            disabled={option.value === "move"}
          >
            {option.text}
          </option>
        ))}
      </select>
    </div>
  );
};

export default BookShelfChanger;
