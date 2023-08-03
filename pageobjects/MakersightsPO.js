const {LoginPage} = require('./LoginPage');
const {LogoutPage} = require('./LogoutPage');
const {DashBoardPage} = require('./DashboardPage');
const {AllproductsPage} = require('./AllproductsPage');
const {AllTestsPage} = require('./AllTestsPage');
const {BrandSettingsPage} = require('./BrandSettingsPage');
const {ExplorePage} = require('./ExplorePage');
const {MySettingsPage} = require('./MySettingsPage');
const {SurveyCreatorPage} = require('./SurveyCreatorPage');
class MakersightsPO
{
constructor(page)
{
    this.page = page;
    this.loginPage = new LoginPage(this.page);
    this.dashboardPage = new DashboardPage(this.page);
    this.ordersHistoryPage = new OrdersHistoryPage(this.page);
    this.ordersReviewPage = new OrdersReviewPage(this.page);
    this.cartPage = new CartPage(this.page);


}

getLoginPage()
{
    return this.loginPage;
}

getCartPage()
{
    return this.cartPage;
}

getDashboardPage()
{
    return this.dashboardPage;
}
getOrdersHistoryPage()
{
    return this.ordersHistoryPage;
}

getOrdersReviewPage()
{
    return this.ordersReviewPage;
}
}
module.exports = {MakersightsPO};