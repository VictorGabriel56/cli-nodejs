module.exports = {
    name: 'component',
    description: 'test',
    run: async toolbox => {
        const {
            parameters,
            template,
            print: { success, error}
        } = toolbox

        const name = parameters.first;

        if (!name) {
            error('Component name must be specified');
            return
        }

        await template.generate({
            template: 'component.js.ejs',
            target: `src/components/${name}/index.js`,
            props: { name },
        })

        success(`Generated ${name} component.`)
    }
}