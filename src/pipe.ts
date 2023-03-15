const pipe =
    (...fns: Function[]): any =>
    (input: unknown) =>
        fns.reduce((v: unknown, f): unknown => f(v), input);

export default pipe;
