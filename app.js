var express = require('express');
var app = express();
var useragent = require('express-useragent');
const port = process.env.PORT || 5000;

/***************************************/
/*******         Router          *******/
/***************************************/

/*
 * http://<domain>
 * Desciption: Main page
 */
app.get('/', (req, res) => {
    var data = {
        status: "success",
        message: "coba gan"
    }
    res.status(200).json(data);
})

/*
 * http://<domain>/:phonenum
 * Desciption: Redirect url to respective whatsapp api interface without message text
 */
app.get('/:phonenum', (req, res) => {
    var source = req.header('user-agent');
    var ua = useragent.parse(source);

    if (ua.isDesktop) {
        res.status(308).redirect(`https://web.whatsapp.com/send?phone=+${req.params.phonenum}`);
    } else if (ua.isMobile) {
        res.status(308).redirect(`whatsapp://send?phone=+${req.params.phonenum}`);
    } else {
        res.status(400).json({status: "error"});
    }
})

/*
 * http://<domain>/:phonenum/:message
 * Desciption: Redirect url to respective whatsapp api interface with message text
 */
app.get('/:phonenum/:message', (req, res) => {
    var source = req.header('user-agent');
    var ua = useragent.parse(source);

    if (ua.isDesktop) {
        res.status(308).redirect(`https://web.whatsapp.com/send?phone=+${req.params.phonenum}&text=${req.params.message}`);
    } else if (ua.isMobile) {
        res.status(308).redirect(`whatsapp://send?phone=+${req.params.phonenum}&text=${req.params.message}`);
    } else {
        res.status(400).json({status: "error"});
    }
})

/*
 * http://<domain>/whatsapp
 * Desciption: Redirect url to respective whatsapp api interface using predefined phone number
 */
app.get('/whatsapp', (req, res) => {
    var source = req.header('user-agent');
    var ua = useragent.parse(source);
    var phonenum = '0123456789';
    
    if (ua.isDesktop) {
        res.status(308).redirect(`https://web.whatsapp.com/send?phone=+${phonenum}`);
    } else if (ua.isMobile) {
        res.status(308).redirect(`whatsapp://send?phone=+${phonenum}`);
    } else {
        res.status(400).json({status: "error"});
    }
})

// Start server at <port>
app.listen(port, (err) => {
    console.log(`Available at http://localhost:${port}`);
    if (err) {
        console.log(err);
    }
})
