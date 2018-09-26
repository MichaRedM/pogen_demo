const { PageObjectBuilder } = require('@pogen/service');

module.exports.GeneratePageObjects = async function  () {
    const pageObjectBuilder = new PageObjectBuilder();
    let dashboardPage = await pageObjectBuilder.generate({
        name: 'Dashboard',
        byRoute: '/dashboard'
    });
    dashboardPage = await dashboardPage.append({
        byActionAsync: async () => {
            await dashboardPage.getOpenPopup().click();
        }
    });
    let orderForm = await pageObjectBuilder.generate({
        name: 'Order',
        byRoute: '/order'
    })
    
}
