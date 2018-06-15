/**
 *
 * Created by Jess on 2018/6/15.
 */

'use strict';


const puppeteer = require('puppeteer');


async function moveTo(page, selector){
    let rect = await page.evaluate( (selector) => {

        const el = document.querySelector(selector);
        let rect = el.getBoundingClientRect();
        return {
            x: rect.x,
            y: rect.y,
        };

    }, selector);

    await page.mouse.move(rect.x, rect.y, { steps : 12});
}

async function main(){

    const browser = await puppeteer.launch({
        headless: false
    });
    const page = await browser.newPage();
    page.setViewport({
        width: 1280,
        height: 800
    });

    await page.goto('https://incentive.nebulas.io/cn/signup.html?invite=ltfLz', {
        waitUntil: 'networkidle2',
    });

    await page.bringToFront();

    await moveTo(page, '#email');

    await page.type('#email', '12345@qq.com', { delay: 500});

    await moveTo(page, '#nickname');

    await page.type('#nickname', '王3吓', { delay: 600});

    await moveTo(page, '#password');

    await page.type('#password', 'qq123456', { delay: 200});

    await moveTo(page, '#rePassword');

    await page.type('#rePassword', 'qq123456', { delay: 200});

    const dragSelector = '#nc_1_n1z';

    await moveTo(page, dragSelector);

    let dragStartPosition = await page.evaluate( () => {
        const dragSelector = '#nc_1_n1z';
        const el = document.querySelector(dragSelector);
        let rect = el.getBoundingClientRect();
        return {
            x: rect.x,
            y: rect.y,
        };
    });

    let endPosition = await page.evaluate( () => {
        const dragSelector = '#nc_1_n1z';
        const el = document.querySelector(dragSelector);
        const con = el.parentNode;
        let rect = el.getBoundingClientRect();
        return {
            x: rect.x + con.offsetWidth - 5,
            y: rect.y,
        };
    });

    console.log(dragStartPosition, endPosition);

    await page.mouse.move(dragStartPosition.x, dragStartPosition.y, { steps: 15});

    await page.mouse.down();

    await page.mouse.move(endPosition.x, endPosition.y, { steps: 25});

    await page.mouse.up();

    // const navigationPromise = page.waitForNavigation();
    //
    // await page.click('#su');
    //
    // await navigationPromise;

    await page.screenshot({path: 'screenshot/demo.png'});

    // await browser.close();

}


main();

