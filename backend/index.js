const express = require('express');
const app = express();
const PORT = process.env.PORT || 5000;

app.get('/api/message', (req, res) => {
    res.json({ message: 'Success is no accident. It is hard work, perseverance, learning, studying, sacrifice, and most of all, love of what you are doing or learning to do!' });
});

app.listen(PORT, () => {
    console.log(`Backend running on http://localhost:5000`);
});
