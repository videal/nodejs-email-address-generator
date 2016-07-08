# Node.js E-mail Address Generator
Generates possible e-mail addresses based on the following values:
 - Person first name;
 - Person last name;
 - Company domain.
## Saple Code
```
var generator = require(...);
var results = generator.build('Alex', 'Vinogradov', 'videal.net');
```