import { buildFrameMetaHTML } from "@/app/utils/framesUtils";
import { NextResponse, NextRequest } from "next/server";

const RESULT_CONFIG = [
    { min: 3, max: 4, title: 'You are Optimism', image: 'optimism.png' },
    { min: 5, max: 6, title: 'You are Arbitrum', image: 'arbitrum.png' },
    { min: 7, max: 9, title: 'You are Base', image: 'base.png' },
    { min: 10, max: 12, title: 'You are Polygon', image: 'polygon.png' },
]

// add up score
// show result
// allow user to share

async function getResponse(req: NextRequest): Promise<NextResponse> {
    // TODO get points from previous question
    // Then add up all points

    const { title, image, } = RESULT_CONFIG[2]
    const buttons = ["Try again"]


    return new NextResponse(
        buildFrameMetaHTML({
            title,
            image,
            buttons,
            postUrl: 'begin'
        })
    );
}

export async function POST(req: NextRequest): Promise<Response> {
    return getResponse(req);
}

export const dynamic = 'force-dynamic';