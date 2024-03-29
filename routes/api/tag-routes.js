const router = require('express').Router();
const { Tag, Product, ProductTag } = require('../../models');

// The `/api/tags` endpoint

router.get('/', async (req, res) => {
  try {
    const tagData = await Tag.findAll();
    res.status(200).json(tagData);
  } catch (error) {
    res.status(500).json(err);
  }
  // find all tags
  // be sure to include its associated Product data
});

router.get('/:id', async (req, res) => {
  try {
    const tagData = await Tag.findByPk(req.params.id, {
      // include: [
      //   {model: Tag, through: ProductTag, as: 'tagged_products'},
      // ],
    });
    if (!tagData) {
      res.status(400).status({ message: 'Tag not found'});
      return;
    }
    res.status(200).json(tagData);
  } catch (error) {
    res.status(500).json(err);
  }
  // find a single tag by its `id`
  // be sure to include its associated Product data
});

router.post('/', async (req, res) => {
  try {
    const tagData = await Tag.create(req.body);
    res.status(200).json(tagData);
  } catch (error) {
    res.status(400).json(err);
  }
  // create a new tag
});

router.put('/:id', async (req, res) => {
  try {
    const productData = await Tag.update(req.body, {
      where: { id: req.params.id },
    });
    res.status(200).json(tagData);
  } catch (error) {
    res.status(400).json(err);
  }
  // update a tag's name by its `id` value
});

router.delete('/:id', async (req, res) => {
  try {
    const tagData = await Tag.destroy({
      where: { 
        id: req.params.id,
      },
    });
    if (!tagData) {
      res.status(400).json({ message: 'No tag found'});
      return;
    }
    res.status(200).json(tagData);
  } catch (error) {
    res.status(500).json(err);
  }
  // delete on tag by its `id` value
});

module.exports = router;
