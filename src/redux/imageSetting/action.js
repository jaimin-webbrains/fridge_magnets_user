const imageAction = {
  IMAGE: "",

  image: (data) => {
    console.log(data, "jjjgg");
    return {
      type: imageAction.IMAGE,
      image_src: data,
    };
  },
};

export default imageAction;
