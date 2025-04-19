const askModel = (req, res) => {
    const { query } = req.body;
    res.json({ reply: `You asked: ${query}` });
  };
  
  module.exports = { askModel };
  