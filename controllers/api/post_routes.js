const router = require('express').Router();

const {User, Post} = require('../../models');

const withAuth =  require('../../utils/auth')



router.post('/', withAuth, async (req, res) => {
    try {
        const post = await Post.create(req.body);

        res.status(200).json(post);
    } catch (error) {
        res.status(400).json(err);
    }
});

router.put('/:id', withAuth, async (req, res) => {
    try{
        const update = await Post.update(req.body, {where:{id: req.params.id}});
    

        res.status(200).json(update)
    }
    catch (error){
        res.status(400).json(err);
    }
});

router.delete('/:id', withAuth, async (req, res) => {
    try{
        const destroy = await Post.destroy({where:{id: req.params.id}});

        res.status(200).json(destroy)
    }
    catch (error){
        res.status(400).json(err);
    }
});




module.exports = router;