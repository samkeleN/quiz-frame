import { buildFrameMetaHTML, getButtonIndex } from "@/app/utils/framesUtils";
import { NextResponse, NextRequest } from "next/server";


// TODO make image just question text
type QuestionConfig = {
    image: string; // question needs to be asked in this image
    title: string;
    options: {
        buttonText: string;
        value: string;
    }[];
}

const QUIZ_CONFIG: QuestionConfig[] = [
    {
        image: 'question1.png',
        title: 'What is your favorite color?',
        options: [
            { buttonText: 'Red', value: '1' },
            { buttonText: 'Yellow', value: '2' },
            { buttonText: 'Blue', value: '3' },
            { buttonText: 'Purple', value: '4' },
        ]
    },
    {
        image: 'question2.png',
        title: 'What do you do when you see a chicken?',
        options: [
            { buttonText: 'Feed', value: '1' },
            { buttonText: 'Say hello', value: '2' },
            { buttonText: 'Put it onchain', value: '3' },
            { buttonText: 'Hide', value: '4' },
        ]
    },
    {
        image: 'question3.png',
        title: 'What do you cook for your worst enemy?',
        options: [
            { buttonText: 'Pasta', value: '1' },
            { buttonText: 'Juice', value: '2' },
            { buttonText: 'Chicken feed', value: '3' },
            { buttonText: 'Revenge', value: '4' },
        ]
    },
]

// show quiz title image
// show 4 choices
// rediect to following question or result page

async function getResponse(req: NextRequest): Promise<NextResponse> {
    const questionNumber = Number(req.nextUrl.searchParams.get('n'));
    const { title, image, options } = QUIZ_CONFIG[questionNumber - 1];
    const buttons = options.map(option => option.buttonText);

    // create next url depending on whether there's another question
    let postUrl = 'api/result'
    if (questionNumber < QUIZ_CONFIG.length) {
        postUrl = `api/question?n=${Number(questionNumber) + 1}`
    }

    if (questionNumber > 1) {
        try {
            const previousPoints = req.nextUrl.searchParams.get('p'); // stored as comma separated string

            const prevQuestionAnswerIndex = await getButtonIndex(req)
            const prevQuestion = QUIZ_CONFIG[questionNumber - 2]
            const prevQuestionAnswerValue = prevQuestion.options[prevQuestionAnswerIndex].value

            postUrl += `&p=${previousPoints}${prevQuestionAnswerValue},`

        } catch (error) {
            console.error(error)
        }
    }


    return new NextResponse(
        buildFrameMetaHTML({
            title,
            image,
            buttons,
            postUrl
        })
    );
}

export async function POST(req: NextRequest): Promise<Response> {
    return getResponse(req);
}

export const dynamic = 'force-dynamic';