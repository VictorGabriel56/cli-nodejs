const { http } = require('gluegun');

module.exports = {
    name: 'ssh',
    description: 'test',
    run: async toolbox => {
        const {
            parameters,
            template,
            print: { success, error}
        } = toolbox

        const api = toolbox.http.create({
        baseURL: 'http://localhost:80'
        })   

        api.get('/');
    }
}