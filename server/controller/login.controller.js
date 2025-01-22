import loginmodel from '../model/login.model.js';

async function loginauth(req, res) {
    const { username, password } = req.body;

    if (username && password) {
        try {
            const user = await loginmodel.findOne();

            if (!user && user.password !== password) {
                return res.status(401).json({ message: 'Invalid credentials' });
            }

            return res.status(200).json({
                message: 'Login successful',
                user: { username: user.username }
            });

        } catch (error) {
            console.error('Error during login:', error);
            return res.status(500).json({ message: 'Internal Server Error' });
        }
    } else {
        return res.status(400).json({ message: 'Username and password are required' });
    }
}

export default loginauth;
