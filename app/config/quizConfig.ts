type QuestionConfig = {
    title: string; // question printed in image
    options: {
        buttonText: string;
        value: string;
    }[];
}

export const QUIZ_CONFIG: QuestionConfig[] = [
    {
        title: 'What is your favorite color?',
        options: [
            { buttonText: 'Red', value: '1' },
            { buttonText: 'Yellow', value: '2' },
            { buttonText: 'Blue', value: '3' },
            { buttonText: 'Purple', value: '4' },
        ]
    },
    {
        title: 'What do you do when you see a chicken?',
        options: [
            { buttonText: 'Feed', value: '1' },
            { buttonText: 'Say hello', value: '2' },
            { buttonText: 'Put it onchain', value: '3' },
            { buttonText: 'Hide', value: '4' },
        ]
    },
    {
        title: 'What meal would you make for your worst enemy?',
        options: [
            { buttonText: 'Pasta', value: '1' },
            { buttonText: 'Juice', value: '2' },
            { buttonText: 'Chicken feed', value: '3' },
            { buttonText: 'Revenge', value: '4' },
        ]
    },
]