import { useState } from "react";
import "../css/Card.css"; // Card css
import "bootstrap/dist/css/bootstrap.min.css"; // BOOTSTRAP CSS
import Text from "./Text.jsx"; // Text Component

const flashcards = [
  {
    question: "I'll ask twenty-one questions and they all about us.",
    answer: "[Green = Easy][Yellow = Medium][Red = Hard",
    difficulty: "start",
  },
  {
    question:
      " A Data structure that stores a collection of elements, each identified by an index or a key.",
    answer: "Array",
    difficulty: "easy",
  },
  {
    question:
      "A Data structure made up of nodes, where each node contains data and a reference (or link) to the next node in the sequence.",
    answer: "Linked List ",
    difficulty: "easy",
  },
  {
    question:
      "A data structure that follows the Last-In, First-Out (LIFO) principle, where the last element added is the first one to be removed.",
    answer: "Stack",
    difficulty: "easy",
  },
  {
    question:
      "a data structure that follows the First-In, First-Out (FIFO) principle, where the first element added is the first one to be removed.",
    answer: "Queue ",
    difficulty: "easy",
  },
  {
    question:
      "A hierarchical data structure where each node has at most two children, typically referred to as the left child and the right child.",
    answer: "Binary Tree",
    difficulty: "easy",
  },
  {
    question:
      "A data structure that uses a hash function to map keys to values, allowing for efficient retrieval and storage of data.",
    answer: "Hash Table",
    difficulty: "easy",
  },
  {
    question:
      "A step-by-step set of instructions or a sequence of actions for solving a specific problem or performing a specific task.",
    answer: "Algorithm ",
    difficulty: "easy",
  },
  {
    question: "Could be described to be a dynamically sized array",
    answer: "Vector",
    difficulty: "easy",
  },
  {
    question:
      "A Data structure where each node has references to both the next and the previous nodes, allowing for easier traversal in both directions.",
    answer: "Doubly Linked List",
    difficulty: "medium",
  },
  {
    question:
      "The process of visiting all the nodes in a tree data structure in a specific order, such as in-order, pre-order, or post-order traversal?",
    answer: "Tree traversal ",
    difficulty: "medium",
  },
  {
    question:
      "A data structure where each element has an associated priority, and the element with the highest priority is the first to be removed?",
    answer: "Priority Queue",
    difficulty: "medium",
  },
  {
    question:
      "This is a variation of a queue data structure in which the last element is connected to the first element, creating a circular arrangement?",
    answer: "Circular Queue",
    difficulty: "medium",
  },
  {
    question:
      "Occurs when there is a loop in a linked list, meaning that a node's next pointer points to a node that was previously encountered in the list?",
    answer: "Cycle",
    difficulty: "medium",
  },
  {
    question:
      "data structure in which the left subtree of a node contains only nodes with values less than the node's value, and the right subtree contains nodes with values greater than the node's value",
    answer: "Binary Search Tree",
    difficulty: "medium",
  },
  {
    question:
      "A technique in computer science where a problem is solved by breaking it down into smaller subproblems and storing the results of these subproblems to avoid redundant computations.",
    answer: "Dynamic programming",
    difficulty: "medium",
  },
  {
    question:
      "Data structure consists of nodes (vertices) and edges that connect these nodes, representing relationships or connections between objects.",
    answer: "Graph",
    difficulty: "medium",
  },
  {
    question:
      "A specialized tree-based data structure that the parent node is either greater than or less than its child nodes, depending on whether it's sorted by max or min.",
    answer: "Binary Heap",
    difficulty: "hard",
  },
  {
    question:
      " A tree-like data structure used to store a dynamic set of strings, where the keys are usually strings, and each node in the trie represents a character in the string.",
    answer: "Trie",
    difficulty: "hard",
  },
  {
    question:
      "occurs when two different keys produce the same hash value, causing a conflict in a hash table. Collisions are typically resolved using techniques like chaining or open addressing.",
    answer: "Hash Collision ",
    difficulty: "hard",
  },
  {
    question:
      "What is the time complexity of searching in a binary search tree?",
    answer: "O(logN)",
    difficulty: "hard",
  },
  {
    question: "The attribute of a singly linked list node that is a pointer?",
    answer: "next",
    difficulty: "easy",
  },
];

const Card = () => {
  const [currentCardIndex, setCardIndex] = useState(0); // Handle cycling through the cards

  const handleNextCard = () => {
    if (currentCardIndex < flashcards.length - 1) {
      setCardIndex(currentCardIndex + 1);
    } else {
      alert("No more cards!");
    }
  }; // end-handle-next-card

  const handlePrevCard = () => {
    if (currentCardIndex > 0) {
      setCardIndex(currentCardIndex - 1);
    } else {
      alert("No more cards!");
    }
  }; // end-handle-prev-card

  const handleLucky = () => {
    const min = 1; // Minimum value (inclusive)
    const max = flashcards.length; // Maximum value (inclusive)
    let randomNumber;

    do {
      randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
    } while (randomNumber === 0 || randomNumber === 22);

    setCardIndex(randomNumber);
  };
  return (
    <div className="my-card container d-flex flex-column align-items-center">
      <div className="desc container d-flex justify-content-center">
        <h1> Data Structures & Algorithms Review!</h1>
      </div>
      <div className="counter container d-flex justify-content-center">
        <h1>
          {" "}
          Card {currentCardIndex} of {flashcards.length - 1}{" "}
        </h1>
      </div>
      <Text
        question={flashcards[currentCardIndex].question}
        answer={flashcards[currentCardIndex].answer}
        difficulty={flashcards[currentCardIndex].difficulty}
      />
      <div className="container d-flex justify-content-center">
        <div
          onClick={handlePrevCard}
          className="btn my-button success-btn btn-outline-dark"
        >
          Previous
        </div>
        <div
          onClick={handleNextCard}
          className="btn my-button success-btn btn-outline-dark"
        >
          Next
        </div>
        <div
          onClick={handleLucky}
          className="btn my-button success-btn btn-outline-dark"
        >
          {" "}
          Im Feeling Lucky{" "}
        </div>
      </div>
    </div>
  );
};

export default Card;
