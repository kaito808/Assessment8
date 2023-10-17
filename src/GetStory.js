import React, { useState } from "react";
import RestartButton from "./RestartButton";

function GetStory({ noun, noun2, adjective, color }) {
  // Define an array of story templates with placeholders for input values
  const storyTemplates = [
    `Once upon a time, there was a ${adjective} ${noun} who lived in a ${color} house.`,
    `${noun2} saw a beautiful ${color} ${noun} and felt ${adjective}.`,
    `There  was a  ${color} ${noun} who loved a ${adjective} ${noun2} `,
    `Once upon a time, a brave ${noun} embarked on a ${adjective} journey.`,
    `In a land far, far away, there lived a mischievous ${noun} with ${color} fur.`,
    `The ${adjective} ${noun} and the ${color} ${noun2} lived happily ever after.`,
    `Deep in the enchanted forest, a ${adjective} ${noun2} discovered a hidden treasure chest filled with ${color} jewels.`,
    `Once, there was a ${color} dragon that terrorized the kingdom, but a fearless ${noun} stepped up to save the day.`,
    `In a galaxy not so close, a ${adjective} ${noun} set off on a quest to find the legendary ${noun2}.`,
    `A mysterious ${noun} appeared at the doorstep, holding a ${adjective} message written in ${color} ink.`,
  

    // Add more story templates as needed
  ];

  // State to store the generated story
  const [generatedStory, setGeneratedStory] = useState('');

  // Function to generate a random story
  const generateRandomStory = () => {
    const randomIndex = Math.floor(Math.random() * storyTemplates.length);
    const randomStory = storyTemplates[randomIndex];
    
    // Replace placeholders with input values
    const storyWithInputs = randomStory
      .replace('${adjective}', adjective)
      .replace('${noun}', noun)
      .replace('${noun2}', noun2)
      .replace('${color}', color);
    
    // Set the generated story
    setGeneratedStory(storyWithInputs);
  };

  return (
    <div>
      <button onClick={generateRandomStory}>Get Story</button>
      {generatedStory && (
        <div>
          <h2>Generated Story:</h2>
          <p>{generatedStory}</p>
        </div>
      )} 
    </div>
  );
}

export default GetStory;
