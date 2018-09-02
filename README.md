# yandex-dialogs-sdk-lowdb
Makes your session persistent by saving it into a json file

# Usage

```js
const { Alice } = require('yandex-dialogs-sdk');
const lowDBSession = require('yandex-dialogs-sdk-lowdb');

const alice = new Alice();
// Now user session becomes persistent
// Sync with file databse.json
alice.use(lowDBSession.middleware('database.json'));

alice.any(ctx => {
    const counter = ctx.session.get('counter') || 0;
    ctx.session.set('counter', counter + 1);
    return Reply.text(`count: ${counter + 1}`);
});
alice.listen(8080);
```
