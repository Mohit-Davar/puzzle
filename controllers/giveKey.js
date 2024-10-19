require("dotenv").config()

const giveKey = (req, res) => {
    res.type('application/javascript');
    const key = process.env.KEY
    const input = process.env.INPUT
    const scriptContent = `const requiredInfo = {
            key: ${key},
            input: ${input},
            Try_these_Algorithms: ["Advanced Encryption Standard", "Blowfish", "Twofish", "RC4", "Rivest-Shamir-Adleman", "International Data Encryption Algorithm"]
        }`
    res.send(scriptContent);
}

module.exports = { giveKey }