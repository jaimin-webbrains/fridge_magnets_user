import React, { useEffect, useState } from "react";
import Viewer from "react-viewer";
import { getGallery } from "services/galleryService";
import NavigationActions from "redux/navigation/actions";
import { Link, withRouter } from "react-router-dom";
import { compose } from "redux";
import { connect } from "react-redux";
import AuthActions from "redux/auth/actions";
import { getCategories } from "services/categoryServices";
const { success, error, fetching } = NavigationActions;
const { setuser } = AuthActions;

function Gallery(props) {
  const { token, success, error } = props;

  const [parentcate, setparentcate] = useState([]);
  const [catvalue, setcatvalue] = useState("");
  const [photos, setphotos] = useState([]);
  const [data, setdata] = useState([]);

  const [cate, setcat] = useState([]);
  const [visible, setVisible] = useState(false);

  const getcategarise = async () => {
    await getCategories(token).then(data => {
      if (catvalue === "") {
        const ans = data.data?.filter(val => {
          return val.parent_id !== 0;
        });
        setcatvalue(ans[0]?.name);
        // console.log("jhhj", ans[0].name);
      }
      setparentcate(data.data);
      if (data.success) {
        success();
      } else {
        error();
      }
    });
  };
  useEffect(() => {
    getcategarise();
  }, []);

  const getData = async () => {
    await getGallery(token, { data: catvalue }).then(data => {
      if (data.success) {
        setphotos(data.data);
        const photoarray = data.data.map(val => {
          return {
            src: `${process.env.REACT_APP_BACKEND_UPLOAD_PATH}/${val.product_Images}`,
            alt: `${val.product_Images}`
          };
        });
        setdata(photoarray);
        // success();
      } else {
        // error();
      }
    });
  };
  useEffect(() => {
    getData();
  }, [catvalue]);
  return (
    <>
      <div className="row">
        <div className="col-12">
          <select
            className="sstyle"
            onChange={e => {
              setcatvalue(e.target.value);
              setcat(e.target.value.replaceAll(" ", "-"));
            }}
          >
            {parentcate.map(val => {
              return (
                <option
                  className={
                    val.parent_id === 0 ? "text-bold disabled_color" : ""
                  }
                  disabled={val.parent_id === 0 ? true : null}
                >
                  {val.name}
                </option>
              );
            })}
          </select>
        </div>
      </div>
      <div className="row mb-4">
        <div className="col-lg-8 col-md-8 col-sm-12">
          <h3 className="h3style">{catvalue}</h3>
        </div>
        <div className="col-lg-4 col-md-4 col-sm-12">
          <Link to={`/categories/${cate}`} className="btn gallery-btn">
            Get a Price
          </Link>
        </div>
      </div>
      <div className="row">
        {photos?.map(val => {
          return (
            <>
              <div className="col-lg-6 col-md-6 col-sm-12">
                <div className="">
                  <img
                    onClick={() => {
                      setVisible(true);
                    }}
                    src={`${process.env.REACT_APP_BACKEND_UPLOAD_PATH}/${val.product_Images}`}
                    alt=""
                    className="myimgstyle"
                  />
                </div>
              </div>
            </>
          );
        })}
      </div>
      <div className="row">
        <div className="col-8 mx-auto">
          <Viewer
            visible={visible}
            onClose={() => {
              setVisible(false);
            }}
            images={data}
          />
        </div>
      </div>
    </>
  );
}

const mapStateToProps = state => {
  return {
    ...state.themeChanger,
    token: state.auth.accessToken,
    user: state.auth.user,
    isFetching: state.navigation.isFetching,
    image: state.productimage.image_src
  };
};

export default compose(
  withRouter,
  // enhancer,
  connect(mapStateToProps, { success, error, fetching, setuser })
)(Gallery);
