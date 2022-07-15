const settingAction = {
  SETTINGDATA: "SETTINGDATA",

  settingdata: (data) => {
    return {
      type: settingAction.SETTINGDATA,
      payload: data,
    };
  },
};

export default settingAction;
