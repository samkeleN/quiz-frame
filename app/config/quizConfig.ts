type QuestionConfig = {
    format: string | null;
    title: string; // question printed in image
    options: {
        buttonText: string;
        value: string;
    }[];
}

export const QUIZ_CONFIG: QuestionConfig[] = [
    {
        format: 'multiple-choice',
        title: 'What is your favorite color?',
        options: [
            { buttonText: 'Red', value: '1' },
            { buttonText: 'Yellow', value: '2' },
            { buttonText: 'Blue', value: '3' },
            { buttonText: 'Purple', value: '4' },
        ]
    },
    {
        format: 'multiple-choice',
        title: 'What do you do when you see a chicken?',
        options: [
            { buttonText: 'Feed', value: '1' },
            { buttonText: 'Say hello', value: '2' },
            { buttonText: 'Put it onchain', value: '3' },
            { buttonText: 'Hide', value: '4' },
        ]
    },
    {
        format: 'multiple-choice',
        title: 'What is the capital of France?',
        options: [
            { buttonText: 'Paris', value: '5' },
            { buttonText: 'London', value: '1' },
            { buttonText: 'Berlin', value: '1' },
            { buttonText: 'Madrid', value: '1' },
        ]
    },
    {
        format: 'multiple-choice',
        title: 'Which planet is known as the Red Planet?',
        options: [
            { buttonText: 'Mars', value: '5' },
            { buttonText: 'Venus', value: '1' },
            { buttonText: 'Jupiter', value: '1' },
            { buttonText: 'Saturn', value: '1' },
        ]
    },
    {
        format: 'true-false',
        title: 'The Earth is flat.',
        options: [
            { buttonText: 'True', value: '1' },
            { buttonText: 'False', value: '5' },
        ]
    },
    {
        format: 'true-false',
        title: 'Water boils at 100°C.',
        options: [
            { buttonText: 'True', value: '5' },
            { buttonText: 'False', value: '1' },
        ]
    },
]