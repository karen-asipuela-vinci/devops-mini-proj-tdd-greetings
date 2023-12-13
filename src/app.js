class Main {
  greet (name) {
    if (name === null || name === undefined || name === ' ') {
      return 'Hello, my friend.';
    }

    // creation of list of the lowercase and uppercase names and put names in the rigth list
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
        // case where there is no lowercase name
        let printLower;
        if (lowerCase.length === 0) {
          printLower = '';

          // creation of begin of phrase for each language
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

          // adding all lowercase names to the sentence
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
        // case where there is no uppercase names
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
        // case where there is only one uppercase word and adding it too the sentence
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
        // adding all uppercase names to the sentence
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
    // case with only one uppercase word
    if (name === name.toUpperCase()) return 'HELLO, ' + name + '!';
    return 'Hello, ' + name + '.';
  }
}

module.exports = { Main };