const chaiExpect = require('chai').expect;


describe('Home', () => {

  beforeEach(async function () {
    await browser.url('https://www.amazon.com/');
    browser.pause(1000);
    await $('//input[@type="submit"]').click(); 
    browser.pause(2000);
  });
  it('UI1', async () => {

    await $('//a[@data-csa-c-slot-id="nav_cs_0"]').click();
    browser.pause(3000);
    await $('//a[normalize-space()="Prime Early Access Deals"]').click();
    browser.pause(1000);

    for (var i = 1; i <= 48; i++) {
      var elements = await $(`(//span[@class="a-color-base solidBadgeText"])[${i}]`);
      var elementsText = await elements.getText();
      await elements.scrollIntoView();

      //console.log(await elementsText);
      await expect(elementsText).toEqual('PRIME EARLY ACCESS DEAL');
    }

    await browser.pause(2000);

  });

  xit('UI2', async () => {

    await $('//input[@id="twotabsearchtextbox"]').setValue("Typescript");

    await $('//input[@value="Go"]').click();

    await browser.pause(3000);

    await $('(//div[@class="a-section aok-relative s-image-square-aspect"])[3]').click();

    await browser.pause(2000);

    var elementToAssert = await $('//span[@id="newBuyBoxPrice"]');
    var elementToAssertText = await elementToAssert.getText();
    console.log(await elementToAssertText);

    await $('//input[@value="Add to Cart"]').click();

    await browser.pause(3000);

    await $('//span[@id="nav-cart-count"]').click(); //go to the cart to assert

    await browser.pause(1000);

    await expect($('//span[@class="a-size-medium a-color-base sc-price sc-white-space-nowrap sc-product-price a-text-bold"]')).toHaveText(elementToAssertText);
    await expect($('//span[@class="a-size-medium a-color-base sc-price sc-white-space-nowrap sc-product-price a-text-bold"]')).toHaveTextContaining(elementToAssertText);

    await browser.pause(1000);

    await $('//input[@value="Delete"]').click(); //Delete the item from the cart

    await browser.pause(1000);

    await expect($('//h1[@class="a-spacing-mini a-spacing-top-base"]')).toHaveTextContaining("Your Amazon Cart is empty.");

    await browser.pause(1000);

  });



  afterEach(async function () {
    //await browser.reset();
    
  });




});