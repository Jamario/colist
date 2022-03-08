import * as React from 'react';

type Props = {
    children: React.ReactNode;
};

export default function IntroLayout({ children }: Props): JSX.Element {
    return (
        <div className='flex flex-col h-full items-center'>
            <div>CoList</div>
            <div>{children}</div>
        </div>
    );
}
