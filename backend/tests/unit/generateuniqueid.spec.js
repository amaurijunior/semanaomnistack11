const generateuniqueid = require('../../src/utils/generateuniqueid')

describe('generate unique id',()=>{

    it('should generate a unique id',()=>{

           const id = generateuniqueid();

           expect(id).toHaveLength(8);

    });


})