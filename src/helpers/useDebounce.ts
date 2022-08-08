import { useRef, useEffect, useCallback } from 'react';

export const useDebounce = <T, U extends any[]>(
    clb: (...args: U) => T,
    delay = 500,
) => {
    const clbRef = useRef(clb);

    /* Таймер */
    const timerRef = useRef<null | NodeJS.Timeout>(null);

    useEffect(() => {
        clbRef.current = clb;
    }, [clb]);

    return useCallback(
        (...args: U) => {
            if (timerRef.current) {
                clearTimeout(timerRef.current);
            }

            timerRef.current = setTimeout(() => {
                clbRef.current(...args)
            }, delay);
        },
        [delay],
    );
};
