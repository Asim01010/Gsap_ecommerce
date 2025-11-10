export const getProducts = (req, res) => {
  res.send("Hello from Products API");
};
export const postProd = (req, res) => {
  //   res.send("Product created successfully");
  const id = req.body.firstName;
  console.log(id);
  res.send(`Product with name ${id} created successfully`);
};

export const updateProd = (req, res) => {
  const id = req.params.id;
  res.send(`Product with ID ${id} updated successfully`);
};
export const deleteProd = (req, res) => {
  const id = req.params.id;
  res.send(`Product with ID ${id} deleted successfully`);
};
