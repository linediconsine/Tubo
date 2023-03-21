# Tubo
## A simple pipe and consume implementation

## Pipe

Instead of

```
const temp_name = getName({ name: 'GianGuido' })
const temp_name_upperCase = toUppercase(temp_name)
...
```
or
```
toUppercase(getName({ name: 'GianGuido' }))
```

You can now use something like:

```
      const actual = pipe(
            getName,
            toUppercase,
            get6Characters,
            reverse
          )({ name: 'GianGuido' });
```

Reference:
- [This article](https://www.freecodecamp.org/news/pipe-and-compose-in-javascript-5b04004ac937/)

## Linting & Formatting

-   Run `yarn lint` or `npm run lint` to lint the code.
-   Run `yarn format` or `npm run format` to format the code.


## Testing


-   Run `yarn test` or `npm run test` to execute all tests.
-   Run `yarn test:watch` or `npm run test:watch` to run tests in watch (loop) mode.
-   Run `yarn test:coverage` or `npm run test:coverage` to see the tests coverage report.

