import { ReactElement, ReactNode } from "react";

export default function StarSolid({
    children,
    className,
    size,
}: {
    children?: ReactNode;
    className?: string;
    color?: string;
    size?: string;
}): ReactElement {
    const classNames = "fill-current " + className ?? null;
    const width = size ? size : "24px";
    const height = size ? size : "24px";

    return (
        <svg
            className={classNames}
            width={width}
            height={height}
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path d="M16.926 20.2a1 1 0 0 1-.466-.115l-4.471-2.352-4.471 2.348a1 1 0 0 1-1.451-1.054l.854-4.98L3.3 10.521a1 1 0 0 1 .555-1.706l5-.727 2.237-4.531A1 1 0 0 1 11.989 3a1 1 0 0 1 .9.558l2.236 4.53 5 .727a1 1 0 0 1 .555 1.706l-3.618 3.527.854 4.98a1 1 0 0 1-.99 1.172z" />
            {children}
        </svg>
    );
}
