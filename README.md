# symbol.inspect

    <symbol> that can be used to declare custom inspect functions.

## install

```
npm install symbol.inspect
```

```ts
import SymbolInspect = require('symbol.inspect');

class A
{
	[SymbolInspect]()
	{
		return 'my custom inspect display'
	}
}

console.log(new A);
```
