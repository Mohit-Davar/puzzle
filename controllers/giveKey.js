require("dotenv").config()

const giveKey = (req, res) => {
    res.type('application/javascript');
    const key = process.env.KEY
    const input = process.env.INPUT
    const scriptContent = `const requiredInfo = {
            key: ${key},
            input: ${input},
            Try_these_Algorithms: ["Blowfish", "RC4", "Rivest-Shamir-Adleman", "Twofish", "International Data Encryption Algorithm", "Advanced Encryption Standard" ]
        }`
    res.send(scriptContent);
}

module.exports = { giveKey }