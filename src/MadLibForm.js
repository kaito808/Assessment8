import React, { useState } from 'react';
import RestartButton from './RestartButton'; // Import the RestartButton component


function MadLibForm() {
  const [noun, setNoun] = useState('');
  const [noun2, setNoun2] = useState('');
  const [adjective, setAdjective] = useState('');
  const [color, setColor] = useState('');
  const [storyGenerated, setStoryGenerated] = useState(false);
  const [generatedStory, setGeneratedStory] = useState('');
  const [inputError, setInputError] = useState('');

  const handleNounChange = (event) => setNoun(event.target.value);
  const handleNoun2Change = (event) => setNoun2(event.target.value);
  const handleAdjectiveChange = (event) => setAdjective(event.target.value);
  const handleColorChange = (event) => setColor(event.target.value);

  const generateRandomStory = (event) => {
    event.preventDefault(); // Prevent form submission
    if (!noun || !noun2 || !adjective || !color) {
      setInputError('Please fill in all the required fields.');
      return;
    }
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

    const randomIndex = Math.floor(Math.random() * storyTemplates.length);
    const randomStory = storyTemplates[randomIndex];

    const storyWithInputs = randomStory
      .replace(`${adjective}`, adjective)
      .replace(`${noun}`, noun)
      .replace(`${noun2}`, noun2)
      .replace(`${color}`, color);

    setGeneratedStory(storyWithInputs);
    setStoryGenerated(true);
  };

  const restartGame = () => {
    // Reset input fields and clear the generated story
    setNoun('');
    setNoun2('');
    setAdjective('');
    setColor('');
    setStoryGenerated(false);
    setGeneratedStory('');
    setInputError('');
  };
  // Check if any of the input fields are empty
 //const areInputsEmpty = !noun || !noun2 || !adjective || !color;

 return (
  <div>
    {!storyGenerated ? (
      <form onSubmit={generateRandomStory}> {/* Wrap the input fields in a form */}
        <div>
          <input
            placeholder='Noun'
            value={noun}
            onChange={handleNounChange}
            required
            className={inputError ? 'error' : ''}
          />
        </div>
        <div>
          <input
            placeholder='Noun2'
            value={noun2}
            onChange={handleNoun2Change}
            required
            className={inputError ? 'error' : ''}
          />
        </div>
        <div>
          <input
            placeholder='Adjective'
            value={adjective}
            onChange={handleAdjectiveChange}
            required
            className={inputError ? 'error' : ''}
          />
        </div>
        <div>
          <input
            placeholder='Color'
            value={color}
            onChange={handleColorChange}
            required
            className={inputError ? 'error' : ''}
          />
        </div>
        {inputError && <span className='error-message'>{inputError}</span>}
        <button type="submit" disabled={!noun || !noun2 || !adjective || !color}>
          Get Story
        </button>
      </form>
    ) : (
      <div>
        <p>{generatedStory}</p>
        <RestartButton onClick={restartGame} />
      </div>
    )}
  </div>
);
}

export default MadLibForm;






