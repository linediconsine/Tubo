export const pipe =
    (...fns: Function[]): any =>
    (input: unknown) =>
        fns.reduce((v: unknown, f): unknown => f(v), input);

export const compose =
    (...fns: Function[]) =>
    (input: unknown) =>
        fns.reduceRight((v: unknown, f): unknown => f(v), input);
