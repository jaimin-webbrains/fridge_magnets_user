import React, { useEffect, useState } from "react";
import "../../assets/css/dashboardlayout.css";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import DehazeIcon from "@mui/icons-material/Dehaze";
import { Collapse } from "reactstrap";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useHistory,
  useParams,
} from "react-router-dom";
import { UncontrolledCollapse, Button, CardBody, Card } from "reactstrap";
import { getCategories, getSlugCategories } from "services/categoryServices";
import NavigationActions from "redux/navigation/actions";
import { withRouter } from "react-router-dom";
import { compose } from "redux";
import { connect } from "react-redux";
import AuthActions from "redux/auth/actions";
import dashboardRoutes from "routes/dashboardRoutes";
const { success, error, fetching } = NavigationActions;
const { setuser } = AuthActions;

function SideBarUser(props) {
  const {
    token,
    success,
    fetching,
    isFetching,
    error,
    setFieldValue,
    values,
    handleChange,
    handleSubmit,
    setValues,
    isValid,
    handleBlur,
    errors,
    touched,
    submitCount,
  } = props;

  const [toggle1, settoggle] = useState({ collapse: true });
  const [toggle2, settoggle2] = useState({ collapse: false });
  const [parentcate, setparentcate] = useState([]);
  const [subcate, setsubcate] = useState([]);
  const [flag, setflag] = useState(false);

  let history = useHistory();
  // let slug = useParams();
  let { slug } = useParams();

  const toggle = () => {
    settoggle({ collapse: !toggle1.collapse });
  };
  const toggleset = () => {
    settoggle2({ collapse: !toggle2.collapse });
  };

  const getcategorise = async () => {
    await getCategories(token).then((data) => {
      const ans = data.data.filter((val) => {
        return val.parent_id === 0;
      });
      const subcat = data.data.filter((val) => {
        return val.parent_id !== 0;
      });
      setparentcate(ans);
      setsubcate(subcat);

      if (data.success) {
        success();
        // setCategoryOptions(
        //   data.data.map((val) => ({ value: val.id, label: val.name }))
        // );
      } else {
        error(data.message);
      }
    });
  };
  useEffect(() => {
    getcategorise();
  }, []);
  return (
    <>
      <div className='col-lg-3 col-md-12 col-sm-12 mb-3'>
        <div className='menu'>
          {!history.location.pathname.includes("/printing-products") ? (
            <>
              {parentcate.map((val, ind) => {
                var toggleid = `toggle${ind}`;
                var togglehash = `#toggle${ind}`;
                return ind === 0 ? (
                  <>
                    <div
                      onClick={() => {
                        toggle();
                      }}
                      className='collpase'
                    >
                      <DehazeIcon className='f-size' />
                      <span>{val.name}</span>

                      {toggle1.collapse === true ? (
                        <RemoveIcon className='f-size' />
                      ) : (
                        <AddIcon className='f-size' />
                      )}
                    </div>
                    <div>
                      <Collapse isOpen={toggle1.collapse}>
                        <Card>
                          <ul className='primary-menu'>
                            {subcate.map((val1) => {
                              return val.id === val1.parent_id ? (
                                <>
                                  <Link to={`/categories/${val1.slug}`}>
                                    <li>{val1.name}</li>
                                  </Link>
                                </>
                              ) : null;
                            })}
                          </ul>
                        </Card>
                      </Collapse>
                    </div>
                  </>
                ) : (
                  <>
                    {/* <div
                      onClick={() => {
                        setflag(!flag);
                      }}
                      className='collpase'
                      id={toggleid}
                    >
                      <span>{val.name}</span>
                      {togglehash === "" ? (
                        <RemoveIcon className='f-size' />
                      ) : (
                        <AddIcon className='f-size' />
                      )}
                    </div>
                    <div className=''>
                      <UncontrolledCollapse toggler={togglehash}>
                        <Card>
                          <ul className='primary-menu'>
                            {subcate.map((val1) => {
                              return val.id === val1.parent_id ? (
                                <>
                                  <Link to={`/categories/${val1.slug}`}>
                                    <li>{val1.name}</li>
                                  </Link>
                                </>
                              ) : null;
                            })}
                          </ul>
                        </Card>
                      </UncontrolledCollapse>
                    </div> */}
                  </>
                );
              })}
            </>
          ) : (
            <>
              {parentcate.map((val, ind) => {
                var toggleid = `toggle${ind}`;
                var togglehash = `#toggle${ind}`;
                return val.name == "Printing Products" ? (
                  <>
                    <div
                      onClick={() => {
                        toggle();
                      }}
                      className='collpase'
                    >
                      <DehazeIcon className='f-size' />
                      <span>{val.name}</span>

                      {toggle1.collapse === true ? (
                        <RemoveIcon className='f-size' />
                      ) : (
                        <AddIcon className='f-size' />
                      )}
                    </div>
                    <div>
                      <Collapse isOpen={toggle1.collapse}>
                        <Card>
                          <ul className='primary-menu'>
                            {subcate.map((val1) => {
                              return val.id === val1.parent_id ? (
                                <>
                                  <Link to={`/printing-products/${val1.slug}`}>
                                    <li>{val1.name}</li>
                                  </Link>
                                </>
                              ) : null;
                            })}
                          </ul>
                        </Card>
                      </Collapse>
                    </div>
                  </>
                ) : null;
                // <>
                //   <div
                //     onClick={() => {
                //       setflag(!flag);
                //     }}
                //     className='collpase'
                //     id={toggleid}
                //   >
                //     <span>{val.name}</span>
                //     {togglehash === "" ? (
                //       <RemoveIcon className='f-size' />
                //     ) : (
                //       <AddIcon className='f-size' />
                //     )}
                //   </div>
                //   <div className=''>
                //     <UncontrolledCollapse toggler={togglehash}>
                //       <Card>
                //         <ul className='primary-menu'>
                //           {subcate.map((val1) => {
                //             return 2 === val1.parent_id ? (
                //               <>
                //                 <Link to={`/categories/${val1.slug}`}>
                //                   <li>{val1.name}</li>
                //                 </Link>
                //               </>
                //             ) : null;
                //           })}
                //         </ul>
                //       </Card>
                //     </UncontrolledCollapse>
                //   </div>
                // </>
              })}
            </>
          )}

          {/* <div
            onClick={() => {
              toggle();
            }}
            className='collpase'
          >
            <DehazeIcon className='f-size' />
            <span>FRIDGE MAGNETS PRODUCTS</span>

            {toggle1.collapse === true ? (
              <RemoveIcon className='f-size' />
            ) : (
              <AddIcon className='f-size' />
            )}
          </div> */}
          {/* <div>
            <Collapse isOpen={toggle1.collapse}>
              <Card>
                <ul className='primary-menu'>
                  <li>Calendar Fridge Magnets</li>
                  <li>House Shaped Fridge Magnets</li>
                  <li>Important/Emergency Number Fridge Magnets</li>
                  <li>Business Card Magnets</li>
                  <li>Kitchen Fridge Magnets</li>
                  <li>First Aid / Medical Fridge Magnets</li>
                  <li>Financial Year Calendar Magnets</li>
                  <li>Shopping List / To Do Lists</li>
                </ul>
                <div
                  onClick={() => {
                    toggleset();
                  }}
                  className='collpase'
                >
                  {/* <Button
                onClick={() => {
                  toggleset();
                }}
              >
                <DehazeIcon className='f-size' />
              </Button>
                  <span>MORE FRIDGE MAGNETS</span>
                 
                    {toggle2.collapse === true ? (
                      <RemoveIcon className='f-size' />
                    ) : (
                      <AddIcon className='f-size' />
                    )}
                  </Button>
                </div>
              </Card>
            </Collapse>
          </div> */}

          {/* <div className=''>
            <Collapse isOpen={toggle2.collapse}>
              <Card>
                <ul className='primary-menu'>
                  <li>Air Fresheners</li>
                  <li>Christmas Cards</li>
                  <li>DL Cardboard With Magnet Strip</li>
                  <li>Information Fridge Magnets</li>
                  <li>Photo Frame Fridge Magnets</li>
                  <li>Promotional Fridge Magnets</li>
                  <li>Invitations - Special Event Fridge Magnets</li>
                </ul>
              </Card>
            </Collapse>
          </div> */}
        </div>
      </div>
    </>
  );
}

const mapStateToProps = (state) => {
  return {
    ...state.themeChanger,
    token: state.auth.accessToken,
    user: state.auth.user,
    isFetching: state.navigation.isFetching,
  };
};

export default compose(
  withRouter,
  // enhancer,
  connect(mapStateToProps, { success, error, fetching, setuser })
)(SideBarUser);
