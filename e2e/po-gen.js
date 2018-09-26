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
    let login = await pageObjectBuilder.generate({
        name: 'Login',
        byRoute: '/login',
        excludeElements: ['Step1', 'Step2']
    });
    login = await login.appendChild({
        name: 'UsernameStep',
        restrictToElements: ['Step1']
    });
    login = await login.appendChild({
        name: 'PasswordStep',
        restrictToElements: ['Step2'],
        byActionAsync: async () => {
            await login.getNextButton().click();
        }
    });
}
