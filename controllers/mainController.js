module.exports = {
    showHome: (req, res) => {
        res.render('home');
    },
    redirHome: (req, res) => {
        res.redirect('/');
    },
};
