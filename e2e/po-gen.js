const { PageObjectBuilder } = require('@pogen/service');

module.exports.GeneratePageObjects = async function  () {
    const pageObjectBuilder = new PageObjectBuilder();
    let dashboardPage = await pageObjectBuilder.generate({
        name: 'Dashboard',
        byRoute: '/dashboard'
    });
}
