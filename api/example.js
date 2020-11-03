module.exports = (req, res) => {
  console.log("LogFromFunction");
  res.json({
    body: req.body,
    query: req.query,
    cookies: req.cookies
  });
};
