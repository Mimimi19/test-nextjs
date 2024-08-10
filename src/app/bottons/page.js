import React from 'react';
import styles from './botton.css';
import { LikeButton , FavoIcon} from '../components/index';
import Link from 'next/link';

export default function Botton() {
  return (
    <>
        <div className='tile'>
            <h1>Buttons</h1>
        </div>
        <div className='bottons'>
            <ul>
                <li>
                    <Link href={`/`}>Home</Link>
                </li>
                <li>
                    <button>Click me</button>
                </li>
                <li>
                    <button>
                    <LikeButton />
                    </button>
                </li>
                <li>
                    <button>
                    <FavoIcon />
                    </button>
                </li>

            </ul>
        </div>
    </>
  
  );
}
