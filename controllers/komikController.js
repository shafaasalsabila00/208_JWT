const db = require('../models');
const komik = require('../models/komik');

async function getAllKomik(req, res) {
    try {
        const komiks = await komik.findAll();
        res.status(200).json(komiks);
    } catch (err) {
        console.error('Error fetching komik:', err.message);
        res.status(500).json({ error: 'Failed to fetch komik.' });
    }
}

