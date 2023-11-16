export class Main {
  greet (name) {
    if (name === null || name === undefined || name === ' ') return 'Hello, my friend.';
    if (Array.isArray(name)) {
      if (name.length > 1) {
        const upperCase = [];
        const lowerCase = [];
        let langue = null;
        name.forEach((element) => {
          if (
            element === 'fr' ||
                        element === 'en' ||
                        element === 'nl'
          ) {
            langue = element;
          } else if (element.toUpperCase() === element) {
            upperCase.push(element);
          } else {
            lowerCase.push(element);
          }
        });

        let printLower;
        if (lowerCase.length === 0) {
          printLower = '';
        } else {
          if (langue != null) {
            if (langue === 'fr') {
              printLower = 'Bonjour, ' + lowerCase[0];
            } else if (langue === 'nl') {
              printLower = 'Goeiedag, ' + lowerCase[0];
            }
          } else {
            printLower = 'Hello, ' + lowerCase[0];
          }
        }

        if (lowerCase.length > 1) {
          const notLast = lowerCase.slice(1, -1);
          const last = lowerCase.slice(-1);
          notLast.forEach((element) => {
            printLower += ', ' + element;
          });
          if (langue != null) {
            if (langue === 'fr') {
              printLower = printLower + ' et ' + last + '.';
            } else if (langue === 'nl') {
              printLower = printLower + ' en ' + last + '.';
            }
          } else {
            printLower = printLower + ' and ' + last + '.';
          }
        } else {
          printLower += '.';
        }

        if (upperCase.length === 0) {
          if (langue != null) {
            if (langue === 'fr') {
              return printLower;
            } else if (langue === 'nl') {
              return printLower;
            }
          } else {
            return printLower;
          }
        }
        if (upperCase.length === 1) {
          if (langue != null) {
            if (langue === 'fr') {
              return (
                printLower + ' ET BONJOUR ' + upperCase[0] + '!'
              );
            } else if (langue === 'nl') {
              return (
                printLower +
                                ' EN GOEIENDAG ' +
                                upperCase[0] +
                                '!'
              );
            }
          } else {
            return printLower + ' AND HELLO ' + upperCase[0] + '!';
          }
        }
        let printUpper;
        if (langue != null) {
          if (langue === 'fr') {
            printUpper = ' ET BONJOUR, ' + upperCase[0];
          } else if (langue === 'nl') {
            printUpper = ' EN GOEIENDAG, ' + upperCase[0];
          }
        } else {
          printUpper = ' AND HELLO ' + upperCase[0];
        }
        const notLastU = upperCase.slice(1, -1);
        const lastU = upperCase.slice(-1);
        notLastU.forEach((element) => {
          printUpper += ', ' + element;
        });
        if (langue != null) {
          if (langue === 'fr') {
            return printLower + printUpper + ' ET' + lastU + '!';
          } else if (langue === 'nl') {
            return printLower + printUpper + ' EN' + lastU + '!';
          }
        } else {
          return printLower + printUpper + ' AND ' + lastU + '!';
        }
      }
    }
    if (name === name.toUpperCase()) return 'HELLO, ' + name + '!';
    return 'Hello, ' + name + '.';
  }
}
