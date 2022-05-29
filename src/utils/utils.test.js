const utils = require('../utils/index.js');

test('Remoção de acentos', () => {
    expect(utils.removerAcentos('Área de ação!')).toBe('Area de acao!');
});
