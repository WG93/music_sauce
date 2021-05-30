import classNames from 'classnames';
import { ReactNode } from 'react';

import './Card.scss';

export interface CardProps {
    title: string;
    className?: string;
    children?: ReactNode;
    hint?: string;
}

const Card = ({ title, className, children, hint }: CardProps) => {
    return (
        <div className={classNames('card', className)}>
            <div
                className={classNames('card__content', {
                    'has-children': !!children,
                })}
            >
                {title}
            </div>
            {children && <div className="card__content">{children}</div>}
            {hint && <div className="card__hint">{hint}</div>}
        </div>
    );
};

export default Card;
