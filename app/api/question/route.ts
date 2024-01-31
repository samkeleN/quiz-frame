import { buildFrameMetaHTML } from "@/app/utils/framesUtils";
import { NextResponse, NextRequest } from "next/server";



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
            { buttonText: 'Give sunglasses', value: '4' },
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
    const questionNumber = req.nextUrl.searchParams.get('n');
    const { title, image, options } = QUIZ_CONFIG[questionNumber - 1];
    const buttons = options.map(option => option.buttonText);

    // create next url depending on whether there's another question
    let postUrl = 'result'
    if (questionNumber < QUIZ_CONFIG.length) {
        postUrl = `question?n=${Number(questionNumber) + 1}`
    }

    // TODO get points from previous question if not first question
    // TODO add any points from previous question
    // const previousPoints = req.nextUrl.searchParams.get('p'); // stored as comma separated string
    // if (previousPoints) {
    //     postUrl += `&points=${previousPoints}`
    // }

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