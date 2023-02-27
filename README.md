# Dicas do projeto

- Foi instalado como dependência o Sass
- Foi instalado como dependência o css-module `npm install -D typescript-plugin-css-modules`
- É preciso adicionar ao `tsconfig.json` a seguinte configuração:

```
{
   "compilerOptions" : {
     "plugins" : [{ "name" : " typescript-plugin-css-modules " }]
  }
}
```

## Interface

Uma interface é literalmente uma forma de colocarmos essa tipagem fora dos dois pontos : usando como nome. É como se fosse uma variável em que colocamos os tipos de variável dentro da própria variável.
Exemplo:

```
interface ITarefa {
    tarefa: string,
    tempo: string
}
```




