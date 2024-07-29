router.post('/login', async (req, res) => {
    try {
      const { email, password } = req.body;
      const user = await User.findOne({ where: { email } });
  
      if (!user) {
        res.status(400).json({ message: 'No user with that email address!' });
        return;
      }
  
      const validPassword = user.checkPassword(password);
  
      if (!validPassword) {
        res.status(400).json({ message: 'Incorrect password!' });
        return;
      }
  
      req.session.save(() => {
        req.session.user_id = user.id;
        req.session.logged_in = true;
  
        res.json({ user, message: 'You are now logged in!' });
      });
  
    } catch (err) {
      res.status(500).json(err);
    }
  });
  