require("dotenv").config()

const giveKey = (req, res) => {
    res.type('application/javascript');
    const key = process.env.key
    const input = process.env.input
    const scriptContent = `const requiredInfo = {
            key: ${key},
            input: ${input},
            try_these_algorithm_options: ["Advanced Encryption Standard(AES)", "Blowfish", "GCM (Galois/Counter Mode)", "RC4", "RSA(Rivest-Shamir-Adleman)", "IDEA (International Data Encryption Algorithm)", "Triple DES (3DES)", "Twofish"]
        }`
    res.send(scriptContent);
}

module.exports = { giveKey }