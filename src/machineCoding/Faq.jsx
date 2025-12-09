import React, { useState } from "react";

const faqData = [
  {
    question: "What is JavaScript?",
    answer:
      "JavaScript is a programming language that enables interactive web pages. It is commonly used for front-end web development and is a core technology of the World Wide Web, alongside HTML and CSS.",
    category: "Programming Basics",
  },
  {
    question: "How do I declare an array in JavaScript?",
    answer:
      "You can declare an array using square brackets `[]` or the `Array()` constructor. Using an array literal (`const myArray = [item1, item2];`) is generally the easiest and most common way.",
    category: "Programming Basics",
  },
  {
    question: "Can I store different data types in the same array?",
    answer:
      "Yes, JavaScript arrays are heterogeneous and can store elements of different data types, including strings, numbers, objects, and even other arrays.",
    category: "Technical Details",
  },
  {
    question: "How do you add an element to the end of an array?",
    answer:
      "You can use the `push()` method to add one or more elements to the end of an array. For example, `myArray.push(newItem);`.",
    category: "Technical Details",
  },
  {
    question: "What is the purpose of the `map()` function?",
    answer:
      "The `map()` function creates a new array by applying a function to each element of an existing array, which is useful for transforming data.",
    category: "Array Methods",
  },
];

const Faq = () => {
  const [openQuestion, setOpenQuestion] = useState(0);
  return (
    <div className="faqContainer">
      <h2>FAQ List</h2>
      {faqData.map((faq, i) => (
        <div key={i}>
          <p className="faqQuestion" onClick={() => setOpenQuestion(i)}>
            {faq.question}
            {i === openQuestion ? "⬆️" : "⬇️"}
          </p>
          <div className={`faqAnswer ${i === openQuestion ? "open" : ""}`}>
            <p>{faq.answer}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Faq;
