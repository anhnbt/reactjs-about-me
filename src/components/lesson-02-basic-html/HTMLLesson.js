import React, {useEffect} from 'react';
import WhatIsHTML from './WhatIsHTML';
import HTMLHistoryTimeline from './HTMLHistoryTimeline';
import SimpleHTMLExample from "./SimpleHTMLExample";
import WebBrowserExplanation from "./WebBrowserExplanation";
import HTMLStructure from "./HTMLStructure";
import HTMLElements from "./HTMLElements";
import HtmlAttributes from "./HTMLAttributes";
import HtmlStylesSimple from "./HtmlStylesSimple";
import HtmlEntities from "./HtmlEntities";

const HTMLLesson = () => {

    useEffect(() => {
        document.title = 'Cấu trúc và các thẻ HTML cơ bản';
    }, []);

    return (
        <div className="bg-gray-100 py-10">
            <header className="text-center mb-8">
                <h1 className="text-4xl font-bold">Bài học: Cấu trúc và các thẻ HTML cơ
                    bản</h1>
                <p className="text-lg text-gray-700">[Web Frontend] Building Website with HTML and CSS</p>
            </header>
            <section className="mb-12">
                <WhatIsHTML/>
            </section>

            <section className="mb-12">
                <HTMLHistoryTimeline/>
            </section>

            <section className="mb-12">
                <SimpleHTMLExample/>
            </section>

            <section className="mb-12">
                <WebBrowserExplanation/>
            </section>

            <section className="mb-12">
                <HTMLStructure/>
            </section>

            <section className="mb-12">
                <HTMLElements/>
            </section>

            <section className="mb-12">
                <HtmlAttributes/>
            </section>

            <section className="mb-12">
                <HtmlStylesSimple/>
            </section>

            // TODO: HTML Text Formatting
            // TODO: HTML Comments

            <section className="mb-12">
                <HtmlEntities/>
            </section>

            <footer className="text-center mt-16">
                <p className="text-gray-600">Cảm ơn đã tham gia học về HTML!</p>
            </footer>
        </div>
    );
};

export default HTMLLesson;
