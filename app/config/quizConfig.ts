type QuestionConfig = {
    format: string | null;
    title: string; // question printed in image
    options: {
        buttonText: string;
        value: string;
    }[];
}

function shuffleArray(array: any[]) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

export const QUIZ_CONFIG: QuestionConfig[] = [
    {
        format: 'multiple-choice',
        title: 'What is your favorite color?',
        options: shuffleArray([
            { buttonText: 'Red', value: '1' },
            { buttonText: 'Yellow', value: '1' },
            { buttonText: 'Blue', value: '1' },
            { buttonText: 'Purple', value: '1' },
        ])
    },
    {
        format: 'multiple-choice',
        title: 'What do you do when you see a chicken?',
        options: shuffleArray([
            { buttonText: 'Feed', value: '1' },
            { buttonText: 'Say hello', value: '0' },
            { buttonText: 'Put it onchain', value: '0' },
            { buttonText: 'Hide', value: '0' },
        ])
    },
    {
        format: 'multiple-choice',
        title: 'What is the capital of France?',
        options: shuffleArray([
            { buttonText: 'Paris', value: '1' },
            { buttonText: 'London', value: '0' },
            { buttonText: 'Berlin', value: '0' },
            { buttonText: 'Madrid', value: '0' },
        ])
    },
    {
        format: 'multiple-choice',
        title: 'Which planet is known as the Red Planet?',
        options: shuffleArray([
            { buttonText: 'Mars', value: '1' },
            { buttonText: 'Venus', value: '0' },
            { buttonText: 'Jupiter', value: '0' },
            { buttonText: 'Saturn', value: '0' },
        ])
    },
    {
        format: 'true-false',
        title: 'The Earth is flat.',
        options: [
            { buttonText: 'True', value: '0' },
            { buttonText: 'False', value: '1' },
        ]
    },
    {
        format: 'true-false',
        title: 'Water boils at 100°C.',
        options: [
            { buttonText: 'True', value: '1' },
            { buttonText: 'False', value: '0' },
        ]
    },
    {
        format: 'multiple-choice',
        title: 'What is the largest ocean on Earth?',
        options: shuffleArray([
            { buttonText: 'Pacific Ocean', value: '1' },
            { buttonText: 'Atlantic Ocean', value: '0' },
            { buttonText: 'Indian Ocean', value: '0' },
            { buttonText: 'Arctic Ocean', value: '0' },
        ])
    },
    {
        format: 'multiple-choice',
        title: 'Which country is known as the Land of the Rising Sun?',
        options: shuffleArray([
            { buttonText: 'Japan', value: '1' },
            { buttonText: 'China', value: '0' },
            { buttonText: 'South Korea', value: '0' },
            { buttonText: 'Thailand', value: '0' },
        ])
    },
    {
        format: 'multiple-choice',
        title: 'What is the chemical symbol for water?',
        options: shuffleArray([
            { buttonText: 'H2O', value: '1' },
            { buttonText: 'O2', value: '0' },
            { buttonText: 'CO2', value: '0' },
            { buttonText: 'H2', value: '0' },
        ])
    },
    {
        format: 'multiple-choice',
        title: 'Which planet is closest to the sun?',
        options: shuffleArray([
            { buttonText: 'Mercury', value: '1' },
            { buttonText: 'Venus', value: '0' },
            { buttonText: 'Earth', value: '0' },
            { buttonText: 'Mars', value: '0' },
        ])
    },
    {
        format: 'multiple-choice',
        title: 'What is the hardest natural substance on Earth?',
        options: shuffleArray([
            { buttonText: 'Diamond', value: '1' },
            { buttonText: 'Gold', value: '0' },
            { buttonText: 'Iron', value: '0' },
            { buttonText: 'Silver', value: '0' },
        ])
    },
    {
        format: 'multiple-choice',
        title: 'Which planet is known as the Blue Planet?',
        options: shuffleArray([
            { buttonText: 'Earth', value: '1' },
            { buttonText: 'Neptune', value: '0' },
            { buttonText: 'Uranus', value: '0' },
            { buttonText: 'Saturn', value: '0' },
        ])
    },
    {
        format: 'multiple-choice',
        title: 'What is the largest mammal in the world?',
        options: shuffleArray([
            { buttonText: 'Blue Whale', value: '1' },
            { buttonText: 'Elephant', value: '0' },
            { buttonText: 'Giraffe', value: '0' },
            { buttonText: 'Hippopotamus', value: '0' },
        ])
    },
    {
        format: 'multiple-choice',
        title: 'Which element is said to keep bones strong?',
        options: shuffleArray([
            { buttonText: 'Calcium', value: '1' },
            { buttonText: 'Iron', value: '0' },
            { buttonText: 'Potassium', value: '0' },
            { buttonText: 'Sodium', value: '0' },
        ])
    },
    {
        format: 'multiple-choice',
        title: 'What is the smallest unit of matter?',
        options: shuffleArray([
            { buttonText: 'Atom', value: '1' },
            { buttonText: 'Molecule', value: '0' },
            { buttonText: 'Electron', value: '0' },
            { buttonText: 'Proton', value: '0' },
        ])
    },
    {
        format: 'multiple-choice',
        title: 'Which gas do plants absorb from the atmosphere?',
        options: shuffleArray([
            { buttonText: 'Carbon Dioxide', value: '1' },
            { buttonText: 'Oxygen', value: '0' },
            { buttonText: 'Nitrogen', value: '0' },
            { buttonText: 'Hydrogen', value: '0' },
        ])
    },
    {
        format: 'true-false',
        title: 'The sun is a star.',
        options: [
            { buttonText: 'True', value: '1' },
            { buttonText: 'False', value: '0' },
        ]
    },
    {
        format: 'true-false',
        title: 'Humans have four lungs.',
        options: [
            { buttonText: 'True', value: '0' },
            { buttonText: 'False', value: '1' },
        ]
    },
    {
        format: 'true-false',
        title: 'The chemical symbol for gold is Au.',
        options: [
            { buttonText: 'True', value: '1' },
            { buttonText: 'False', value: '0' },
        ]
    },
    {
        format: 'true-false',
        title: 'The human body has four kidneys.',
        options: [
            { buttonText: 'True', value: '0' },
            { buttonText: 'False', value: '1' },
        ]
    },
    {
        format: 'true-false',
        title: 'Lightning never strikes in the same place twice.',
        options: [
            { buttonText: 'True', value: '0' },
            { buttonText: 'False', value: '1' },
        ]
    },
    {
        format: 'true-false',
        title: 'The capital of Australia is Sydney.',
        options: [
            { buttonText: 'True', value: '0' },
            { buttonText: 'False', value: '1' },
        ]
    },
    {
        format: 'true-false',
        title: 'The human skeleton is made up of less than 100 bones.',
        options: [
            { buttonText: 'True', value: '0' },
            { buttonText: 'False', value: '1' },
        ]
    },
    {
        format: 'true-false',
        title: 'Mount Everest is the tallest mountain in the world.',
        options: [
            { buttonText: 'True', value: '1' },
            { buttonText: 'False', value: '0' },
        ]
    },
    {
        format: 'true-false',
        title: 'The Great Wall of China is visible from space.',
        options: [
            { buttonText: 'True', value: '0' },
            { buttonText: 'False', value: '1' },
        ]
    },
    {
        format: 'true-false',
        title: 'Venus is the closest planet to the Sun.',
        options: [
            { buttonText: 'True', value: '0' },
            { buttonText: 'False', value: '1' },
        ]
    },
    {
        format: 'true-false',
        title: 'The Pacific Ocean is the largest ocean on Earth.',
        options: [
            { buttonText: 'True', value: '1' },
            { buttonText: 'False', value: '0' },
        ]
    },
]