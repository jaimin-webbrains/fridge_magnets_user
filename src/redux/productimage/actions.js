const productimageAction = {
  IMAGE: "IMAGE",

  image: (data) => {
    return {
      type: productimageAction.IMAGE,
      payload: data,
    };
  },
};

export default productimageAction;
