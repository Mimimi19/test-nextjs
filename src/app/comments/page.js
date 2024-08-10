import React from 'react';
import Link from 'next/link';
import { ResizableTextArea } from '../components/index'; // Import the client component
import styles from "./comments.css";

export default function Comment() {
    return (
        <>
            <div className='tile'>
                <h1>Comments</h1>
                <Link href={`/`}>Home</Link>
            </div>
            <div>
                <h2>コメントを入力してください</h2>
                <input type='text' />
                <button>送信</button>
            </div>
            <div className="w-full justify-center flex-col items-center flex">
                <h1 className="p-5 font-bold text-2xl">可変テキストボックス</h1>
                <ResizableTextArea />
            </div>
        </>
    );
}
