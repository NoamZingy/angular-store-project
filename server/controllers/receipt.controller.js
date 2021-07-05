const express = require("express");
const router = express.Router();
const markdownpdf = require("markdown-pdf");
const path = require('path');

router.post('/generateReceipt', (req, res) => {
    const receiptsFileName= req.body.client+"_"+new Date().getTime()+".pdf";
    console.log(req.body.receiptString)
    markdownpdf().from.string(req.body.receiptString).to(path.join(__dirname, '../public/receipts/'+receiptsFileName), () => {
        res.json({ path: `http://localhost:3000/receipts/${receiptsFileName}` });
    });
});


module.exports = router;