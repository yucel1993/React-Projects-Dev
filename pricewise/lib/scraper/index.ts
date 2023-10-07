import axios from "axios";
import * as cheerio from "cheerio";


export async function scrapeAmazonProduct(url:string) {


    //curl --proxy brd.superproxy.io:22225 --proxy-user brd-customer-hl_1fee1699-zone-unblocker:j45zo6zwbpp8 -k https://lumtest.com/myip.json

    if(!url) return;
    //brigt proxy configuration
    const username =String(process.env.BRIGHT_DATA_USERNAME);
    const password =String(process.env.BRIGHT_DATA_PASSWORD)
    const port =22225
    const session_id=(1000000 * Math.random()) | 0 
    const options ={
        auth:{
            username: `${username}-session-${session_id}`,
            password,
        },
        host:"brd.superproxy.io",
        port,
        rejectUnauthorized:false,
    }
    try {
    const response = await axios(url,options)     
    } catch (error:any) {
        throw new Error(`Failed to scrape product: ${error.message}`)
    }
}