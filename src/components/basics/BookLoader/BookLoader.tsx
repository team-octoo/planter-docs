import { FC, PropsWithChildren } from 'react';
import styles from './BookLoader.module.scss';

interface Props extends PropsWithChildren {};

/**
 * from https://codepen.io/aaroniker/pen/zYOewEP
 */

const BookLoader: FC<Props> = ({ children }) => {
    return (
        <div className={ styles['book'] }>
            <div className={ styles['inner'] }>
                <div className={ styles['left'] }></div>
                <div className={ styles['middle'] }></div>
                <div className={ styles['right'] }></div>
            </div>
            <ul>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
            </ul>
        </div>
    )
}

export default BookLoader;