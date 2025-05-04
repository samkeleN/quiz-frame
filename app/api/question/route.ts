import { QUIZ_CONFIG } from "@/app/config/quizConfig";
import { buildFrameMetaHTML, getButtonIndex } from "@/app/utils/framesUtils";
import { getPreviousAnswerValue } from "@/app/utils/quizUtils";
import { NextResponse, NextRequest } from "next/server";

// show quiz question in image
// show 4 choices
// rediect to following question or result page

// Update the logic to use the `api/image` route for image-based questions.
async function getResponse(req: NextRequest): Promise<NextResponse> {
    const { searchParams } = req.nextUrl;
    const questionNumber = Number(searchParams.get('n')) || 1;
    const format = searchParams.get('format') || '';

    const question = QUIZ_CONFIG[questionNumber - 1];
    const title = question?.title || 'Question';
    const buttons = question?.options || []; // Assuming 'options' is the correct property

    let postUrl = 'api/result?';
    if (questionNumber < QUIZ_CONFIG.length) {
        postUrl = `api/question?n=${Number(questionNumber) + 1}&`;
    }

    if (questionNumber > 1) {
        const previousPoints = req.nextUrl.searchParams.get('p') ?? ''; // stored as comma-separated string
        const prevQuestionAnswerValue = await getPreviousAnswerValue(req, questionNumber);
        postUrl += `p=${previousPoints}${prevQuestionAnswerValue},`;
    }

    postUrl += `format=${format}&`;

    return new NextResponse(
        buildFrameMetaHTML({
            title,
            image: `api/image?text=${encodeURIComponent(title)}`, // Use the `api/image` route
            buttons: buttons.map(button => button.buttonText),
            postUrl
        })
    );
}

export async function POST(req: NextRequest): Promise<Response> {
    return getResponse(req);
}

export async function GET(req: NextRequest): Promise<NextResponse> {
    const format = req.nextUrl.searchParams.get('format');

    // Filter questions based on the selected format
    const filteredQuestions = QUIZ_CONFIG.filter(q => q.format === format);

    if (filteredQuestions.length === 0) {
        return new NextResponse('No questions found for the selected format', { status: 404 });
    }

    return NextResponse.json(filteredQuestions);
}

export const dynamic = 'force-dynamic';