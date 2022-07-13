const productimageAction = {
  IMAGE: "",

  image: (data) => {
    console.log(data, "gggj");
    return {
      type: productimageAction.IMAGE,
      image_src: data,
    };
  },
};

export default productimageAction;
