# Typescript Tut

### Typescript Compiler

Running `.ts` file with the `tsc` compiler command without having to manually type in the command. This can be done using the below command.

```js
    tsc <file_name.ts> --watch
    // or
    tsc <file_name.ts> -w
```

What if we would like to compile all file with the `.ts` extension name. Well thid can be done using the below command.

> This can only be done after generating the `tsconfig.json` file using the `tsc --init` command or manually adding the data within the `tsconfig.json` file.

```js
    tsc --watch
    // or
    tsc -w
```